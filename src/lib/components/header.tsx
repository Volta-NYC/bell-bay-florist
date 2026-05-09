"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { business } from "@/data/business"
import { categories } from "@/data/categories"
import { occasions } from "@/data/occasions"
import { CartIcon, ChevronDownIcon, CloseIcon, MenuIcon, PhoneIcon, SearchIcon } from "./icons"

const topLinks = [
  { label: "Wedding", href: "/wedding" },
  { label: "Celebrations & Events", href: "/celebrations-events" },
  { label: "Sympathy", href: "/sympathy" },
  { label: "About Us", href: "/about" },
  { label: "Help", href: "/help" },
]

function MegaMenu({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 py-6 text-sm font-semibold uppercase tracking-[0.13em] text-ink transition hover:text-forest">
        {label}
        <ChevronDownIcon className="h-4 w-4" />
      </button>
      <div className="invisible absolute left-0 top-full z-40 w-[620px] translate-y-2 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="grid grid-cols-[1.4fr_.9fr] gap-8 border border-stone-200 bg-white p-7 shadow-xl">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:px-6">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Bell Bay Florist home">
          <Image src="/images/brand/logo-bell-bay-florist.svg" alt="Bell Bay Florist" width={210} height={58} priority className="h-12 w-auto" />
        </Link>

        <nav className="ml-4 hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          <Link href="/occasions/mothers-day" className="py-6 text-sm font-semibold uppercase tracking-[0.13em] text-forest">
            Mothers Day
          </Link>
          <MegaMenu label="Occasions">
            <div>
              <h3 className="mb-4 font-serif text-2xl text-forest">Occasions</h3>
              <div className="grid grid-cols-2 gap-3">
                {occasions.map((occasion) => (
                  <Link key={occasion.slug} href={occasion.path} className="rounded-sm px-2 py-2 text-sm text-ink transition hover:bg-blush hover:text-forest">
                    {occasion.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-l border-stone-200 pl-8">
              <h3 className="mb-4 font-serif text-2xl text-forest">Upcoming Occasions</h3>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">May 12</p>
              <Link href="/occasions/mothers-day" className="mt-2 block text-sm text-ink hover:text-forest">
                Mother's Day
              </Link>
            </div>
          </MegaMenu>
          <MegaMenu label="Flowers">
            <div>
              <h3 className="mb-4 font-serif text-2xl text-forest">Flowers</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/shop" className="rounded-sm px-2 py-2 text-sm text-ink transition hover:bg-blush hover:text-forest">
                  Best Sellers
                </Link>
                {categories.map((category) => (
                  <Link key={category.slug} href={category.path} className="rounded-sm px-2 py-2 text-sm text-ink transition hover:bg-blush hover:text-forest">
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-l border-stone-200 pl-8">
              <h3 className="mb-4 font-serif text-2xl text-forest">Shop Price</h3>
              {["$45 - $55", "$55 - $75", "$75 - $100", "$100 - $150"].map((range) => (
                <Link key={range} href="/shop" className="block rounded-sm px-2 py-2 text-sm text-ink transition hover:bg-blush hover:text-forest">
                  {range}
                </Link>
              ))}
            </div>
          </MegaMenu>
          {topLinks.map((link) => (
            <Link key={link.href} href={link.href} className="py-6 text-sm font-semibold uppercase tracking-[0.13em] text-ink transition hover:text-forest">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden min-w-[230px] items-center rounded-full border border-stone-200 bg-warm px-4 py-2 lg:flex">
          <SearchIcon className="h-4 w-4 text-muted" />
          <input aria-label="Search flowers" placeholder="Search flowers" className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-muted" />
        </div>

        <a href={`tel:${business.tollFree.replace(/[^0-9]/g, "")}`} className="hidden items-center gap-2 text-sm font-semibold text-forest lg:flex">
          <PhoneIcon className="h-4 w-4" />
          {business.tollFree}
        </a>

        <button className="hidden h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-forest transition hover:bg-blush lg:flex" aria-label="Cart">
          <CartIcon className="h-5 w-5" />
        </button>

        <button className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-forest xl:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Menu">
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-stone-200 bg-white xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-6 px-5 py-6" aria-label="Mobile navigation">
            <div className="flex items-center rounded-full border border-stone-200 bg-warm px-4 py-2">
              <SearchIcon className="h-4 w-4 text-muted" />
              <input aria-label="Search flowers" placeholder="Search flowers" className="w-full bg-transparent px-3 text-sm outline-none placeholder:text-muted" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link href="/shop" onClick={() => setOpen(false)} className="font-semibold text-forest">
                Best Sellers
              </Link>
              <Link href="/occasions/mothers-day" onClick={() => setOpen(false)} className="font-semibold text-forest">
                Mother's Day
              </Link>
              {occasions.map((occasion) => (
                <Link key={occasion.slug} href={occasion.path} onClick={() => setOpen(false)} className="text-sm text-ink">
                  {occasion.name}
                </Link>
              ))}
              {categories.map((category) => (
                <Link key={category.slug} href={category.path} onClick={() => setOpen(false)} className="text-sm text-ink">
                  {category.name}
                </Link>
              ))}
              {topLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-ink">
                  {link.label}
                </Link>
              ))}
            </div>
            <a href={`tel:${business.tollFree.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 text-sm font-semibold text-forest">
              <PhoneIcon className="h-4 w-4" />
              {business.tollFree}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

