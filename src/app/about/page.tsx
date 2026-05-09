import type { Metadata } from "next"
import { business } from "@/data/business"
import Breadcrumbs from "@/lib/components/breadcrumbs"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Bell Bay Florist, a family owned Bayside florist since 1976.",
}

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 lg:grid-cols-[.9fr_1.1fr] lg:px-6">
        <div>
          <h1 className="font-serif text-5xl text-forest">About Bell Bay Florist</h1>
          <p className="mt-5 text-xl text-muted">{business.tagline}</p>
        </div>
        <div className="space-y-6 text-lg leading-9 text-muted">
          <p>{business.about}</p>
          <p>{business.nationalDelivery}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-3 lg:px-6">
          <InfoCard title="Areas Served" items={business.areasServed} />
          <InfoCard title="Delivery" items={[`Local delivery fee: ${business.delivery.localFee}`, `Outside local delivery area: ${business.delivery.outsideLocalFee}`, business.delivery.pickup]} />
          <InfoCard title="Same-Day Delivery" items={[business.delivery.sameDay, business.delivery.timing]} />
        </div>
      </section>

      <section className="bg-warm py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <h2 className="font-serif text-4xl text-forest">Visit Us</h2>
              <p className="mt-4 leading-7 text-muted">{business.address}</p>
            </div>
            <div className="grid min-h-[320px] place-items-center border border-stone-200 bg-white text-center shadow-soft">
              <div>
                <p className="font-serif text-3xl text-forest">{business.name}</p>
                <p className="mt-2 text-muted">{business.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function InfoCard({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <article className="border border-stone-200 bg-warm p-6">
      <h2 className="font-serif text-3xl text-forest">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

