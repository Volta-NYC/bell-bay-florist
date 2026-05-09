import type { Metadata } from "next"
import { business } from "@/data/business"
import Breadcrumbs from "@/lib/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Celebrations & Events",
  description: "Celebrations and event flowers from Bell Bay Florist.",
}

export default function CelebrationsEventsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Celebrations & Events" }]} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 lg:grid-cols-[.9fr_1.1fr] lg:px-6">
        <div>
          <h1 className="font-serif text-5xl text-forest">Celebrations & Events</h1>
          <p className="mt-5 text-xl leading-8 text-muted">{business.tagline}</p>
          <p className="mt-6 leading-8 text-muted">{business.about}</p>
        </div>
        <form className="border border-stone-200 bg-white p-6 shadow-soft">
          <h2 className="font-serif text-3xl text-forest">Contact Form</h2>
          <div className="mt-6 grid gap-4">
            <input placeholder="Name" className="border border-stone-200 px-4 py-3 outline-none focus:border-gold" />
            <input placeholder="Email" type="email" className="border border-stone-200 px-4 py-3 outline-none focus:border-gold" />
            <input placeholder="Phone" className="border border-stone-200 px-4 py-3 outline-none focus:border-gold" />
            <input placeholder="Event date" className="border border-stone-200 px-4 py-3 outline-none focus:border-gold" />
            <textarea placeholder="Message" rows={7} className="border border-stone-200 px-4 py-3 outline-none focus:border-gold" />
            <button type="button" className="bg-forest px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

