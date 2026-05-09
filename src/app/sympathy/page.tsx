import type { Metadata } from "next"
import { business } from "@/data/business"
import { productsByOccasion } from "@/data/products"
import Breadcrumbs from "@/lib/components/breadcrumbs"
import ProductGrid from "@/lib/components/product-grid"

export const metadata: Metadata = {
  title: "Sympathy",
  description: "Sympathy flowers and funeral home delivery from Bell Bay Florist.",
}

export default function SympathyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Sympathy" }]} />
      <section className="bg-[#f8f8f5] pb-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[.85fr_1.15fr] lg:px-6">
          <div>
            <h1 className="font-serif text-5xl text-forest">Sympathy Flowers</h1>
            <p className="mt-5 leading-8 text-muted">Sympathy Flowers - SHOP NOW &gt;</p>
            <div className="mt-8 border border-stone-200 bg-white p-6">
              <h2 className="font-serif text-3xl text-forest">Funeral Home Deliveries</h2>
              <ul className="mt-5 space-y-3 text-muted">
                {business.funeralHomes.map((home) => (
                  <li key={home}>{home}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted">{business.funeralHomeNote}</p>
            </div>
          </div>
          <div>
            <ProductGrid products={productsByOccasion("sympathy")} priorityCount={2} />
          </div>
        </div>
      </section>
    </>
  )
}

