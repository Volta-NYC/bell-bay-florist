"use client"

import { useMemo, useState } from "react"
import type { Product } from "@/data/products"
import { formatPrice } from "@/data/products"

export default function ProductOptions({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[0]?.name ?? "Standard")
  const [deliveryMode, setDeliveryMode] = useState<"Delivery" | "Pickup">("Delivery")
  const [extras, setExtras] = useState<string[]>([])
  const [added, setAdded] = useState(false)

  const selectedSize = useMemo(() => product.sizes.find((item) => item.name === size) ?? product.sizes[0], [product.sizes, size])

  const toggleExtra = (name: string) => {
    setExtras((values) => {
      if (values.includes(name)) return values.filter((value) => value !== name)
      if (values.length >= 3) return values
      return [...values, name]
    })
  }

  return (
    <div className="space-y-7">
      <fieldset>
        <legend className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted">Select Size</legend>
        <div className="grid gap-3">
          {product.sizes.map((item) => (
            <label key={item.name} className={`flex cursor-pointer items-center justify-between border px-4 py-3 ${size === item.name ? "border-forest bg-blush/60" : "border-stone-200 bg-white"}`}>
              <span className="flex items-center gap-3">
                <input type="radio" name="size" checked={size === item.name} onChange={() => setSize(item.name)} className="h-4 w-4 accent-forest" />
                {item.name}
              </span>
              {item.price ? <span className="font-semibold text-forest">{formatPrice(item.price)}</span> : null}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted">Add Something Extra</legend>
        <div className="grid gap-3">
          {product.addOns.map((item) => (
            <label key={item.name} className="flex cursor-pointer items-center gap-3 border border-stone-200 bg-white px-4 py-3 text-sm text-ink">
              <input type="checkbox" checked={extras.includes(item.name)} onChange={() => toggleExtra(item.name)} className="h-4 w-4 accent-forest" />
              {item.name}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted">Delivery Options</legend>
        <div className="grid grid-cols-2 border border-stone-200 bg-white p-1">
          {(["Delivery", "Pickup"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setDeliveryMode(mode)}
              className={`px-4 py-3 text-sm font-semibold transition ${deliveryMode === mode ? "bg-forest text-white" : "text-forest hover:bg-blush"}`}
              aria-pressed={deliveryMode === mode}
            >
              {mode}
            </button>
          ))}
        </div>
      </fieldset>

      {deliveryMode === "Delivery" ? (
        <label className="block">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.14em] text-muted">ZIP Code</span>
          <input inputMode="numeric" placeholder="11361" className="w-full border border-stone-200 bg-white px-4 py-3 outline-none focus:border-gold" />
        </label>
      ) : null}

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" className="mt-1 h-4 w-4 accent-forest" />
        Keep Me In The Loop For Seasonal Flowers And Important Holidays
      </label>

      <button
        type="button"
        onClick={() => setAdded(true)}
        className="w-full bg-forest px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        Add To Cart
      </button>
      {added ? (
        <p className="border border-gold/60 bg-blush px-4 py-3 text-center text-sm font-semibold text-forest" role="status">
          Added {selectedSize?.name ?? "Standard"} to cart.
        </p>
      ) : null}
    </div>
  )
}

