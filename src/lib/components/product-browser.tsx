"use client"

import { useMemo, useState } from "react"
import { colors, flowerTypes, priceRanges } from "@/data/categories"
import type { Product } from "@/data/products"
import ProductGrid from "./product-grid"

type Sort = "bestselling" | "lowest" | "highest"

function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value]
}

export default function ProductBrowser({
  products,
  heading,
  description,
}: {
  products: Product[]
  heading: string
  description?: string
}) {
  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [sort, setSort] = useState<Sort>("bestselling")

  const filtered = useMemo(() => {
    const next = products
      .filter((product) => {
        if (!selectedPrices.length) return true
        if (typeof product.price !== "number") return false
        return selectedPrices.some((label) => {
          const range = priceRanges.find((item) => item.label === label)
          return range ? product.price! >= range.min && product.price! <= range.max : true
        })
      })
      .filter((product) => !selectedTypes.length || selectedTypes.some((type) => product.flowerTypes.includes(type)))
      .filter((product) => !selectedColors.length || selectedColors.some((color) => product.colors.includes(color)))

    if (sort === "lowest") {
      return next.toSorted((a, b) => (a.price ?? Number.MAX_VALUE) - (b.price ?? Number.MAX_VALUE))
    }
    if (sort === "highest") {
      return next.toSorted((a, b) => (b.price ?? 0) - (a.price ?? 0))
    }
    return next
  }, [products, selectedPrices, selectedTypes, selectedColors, sort])

  const filterControls = (
    <div className="space-y-8">
      <FilterGroup title="Price Range">
        {priceRanges.map((range) => (
          <label key={range.label} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-muted">
            <span className="flex items-center gap-2">
              <input type="checkbox" checked={selectedPrices.includes(range.label)} onChange={() => setSelectedPrices((values) => toggleValue(values, range.label))} className="h-4 w-4 accent-forest" />
              {range.label}
            </span>
            <span>{range.count}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Flower Type">
        {flowerTypes.map((type) => (
          <label key={type.label} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-muted">
            <span className="flex items-center gap-2">
              <input type="checkbox" checked={selectedTypes.includes(type.label)} onChange={() => setSelectedTypes((values) => toggleValue(values, type.label))} className="h-4 w-4 accent-forest" />
              {type.label}
            </span>
            <span>{type.count}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Color">
        {colors.map((color) => (
          <label key={color.label} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-muted">
            <span className="flex items-center gap-2">
              <input type="checkbox" checked={selectedColors.includes(color.label)} onChange={() => setSelectedColors((values) => toggleValue(values, color.label))} className="h-4 w-4 accent-forest" />
              <span className="h-4 w-4 rounded-full border border-stone-300" style={{ backgroundColor: color.value }} />
              {color.label}
            </span>
            <span>{color.count}</span>
          </label>
        ))}
      </FilterGroup>
    </div>
  )

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 lg:px-6">
      <div className="mb-8 flex flex-col gap-5 border-b border-stone-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="font-serif text-4xl text-forest sm:text-5xl">{heading}</h1>
          {description ? <p className="mt-3 max-w-2xl leading-7 text-muted">{description}</p> : null}
        </div>
        <label className="flex w-full max-w-xs items-center gap-3 text-sm font-semibold text-ink lg:justify-end">
          Sort
          <select value={sort} onChange={(event) => setSort(event.target.value as Sort)} className="w-full border border-stone-200 bg-white px-4 py-3 text-sm font-normal text-ink outline-none focus:border-gold">
            <option value="bestselling">Bestselling</option>
            <option value="lowest">Lowest Price</option>
            <option value="highest">Highest Price</option>
          </select>
        </label>
      </div>

      <details className="mb-6 border border-stone-200 bg-white lg:hidden">
        <summary className="cursor-pointer px-4 py-3 font-semibold text-forest">Filters</summary>
        <div className="p-4">{filterControls}</div>
      </details>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="hidden border border-stone-200 bg-white p-5 lg:block">
          {filterControls}
        </aside>
        <section aria-live="polite">
          <div className="mb-4 text-sm text-muted">{filtered.length} products</div>
          <ProductGrid products={filtered} />
        </section>
      </div>
    </div>
  )
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-4 font-serif text-2xl text-forest">{title}</legend>
      <div className="space-y-3">{children}</div>
    </fieldset>
  )
}

