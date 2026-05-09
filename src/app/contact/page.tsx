import type { Metadata } from "next"
import Link from "next/link"
import { business } from "@/data/business"
import Breadcrumbs from "@/lib/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Bell Bay Florist in Bayside, NY.",
}

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 lg:grid-cols-[.8fr_1.2fr] lg:px-6">
        <div>
          <h1 className="font-serif text-5xl text-forest">Contact Bell Bay Florist</h1>
          <div className="mt-8 space-y-3 text-muted">
            <p>{business.address}</p>
            <p>{business.phone}</p>
            <p>{business.tollFree}</p>
            <p>{business.fax}</p>
            <p>{business.email}</p>
          </div>
          <div className="mt-8 flex gap-4 text-sm font-semibold text-forest">
            <Link href={business.facebook}>Facebook</Link>
            <Link href={business.instagram}>Instagram</Link>
            <Link href={business.yelp}>Yelp</Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form className="border border-stone-200 bg-white p-6 shadow-soft">
            <h2 className="font-serif text-3xl text-forest">Send a Message</h2>
            <div className="mt-6 grid gap-4">
              <input placeholder="Name" className="border border-stone-200 px-4 py-3 outline-none focus:border-gold" />
              <input placeholder="Email" type="email" className="border border-stone-200 px-4 py-3 outline-none focus:border-gold" />
              <input placeholder="Phone" className="border border-stone-200 px-4 py-3 outline-none focus:border-gold" />
              <textarea placeholder="Message" rows={6} className="border border-stone-200 px-4 py-3 outline-none focus:border-gold" />
              <button type="button" className="bg-forest px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white">
                Submit
              </button>
            </div>
          </form>

          <div className="border border-stone-200 bg-warm p-6">
            <h2 className="font-serif text-3xl text-forest">Hours of Operation</h2>
            <div className="mt-6 divide-y divide-stone-200">
              {business.hours.map((item) => (
                <div key={item.day} className="flex justify-between gap-4 py-3 text-sm">
                  <span className="font-semibold text-ink">{item.day}</span>
                  <span className="text-muted">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

