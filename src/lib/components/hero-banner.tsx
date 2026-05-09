import Image from "next/image"
import Link from "next/link"
import { business } from "@/data/business"
import { ArrowRightIcon } from "./icons"

export default function HeroBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-warm">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(245,230,224,.95),transparent_28%),linear-gradient(115deg,#ffffff_0%,#fff_48%,#eef4ee_100%)]" />
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[.95fr_1.05fr] lg:px-6">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl leading-[1.02] text-forest sm:text-6xl lg:text-7xl">
            {business.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Make Mom's Day Special With An Arrangement Of Beautiful Flowers!
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/shop" className="inline-flex items-center justify-center gap-2 bg-forest px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-ink">
              Shop local and save
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/sympathy" className="inline-flex items-center justify-center border border-forest px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-forest transition hover:bg-blush">
              Sympathy Flowers
            </Link>
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <div className="absolute left-4 top-0 w-[58%] border border-white bg-white p-3 shadow-2xl">
            <Image src="/images/products/loves-divine-bouquet-long-stemmed-roses.jpg" alt="Love's Divine Bouquet - Long Stemmed Roses" width={500} height={625} priority className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="absolute bottom-3 right-0 w-[52%] border border-white bg-white p-3 shadow-2xl">
            <Image src="/images/products/stunning-beauty-bouquet.jpg" alt="Stunning Beauty Bouquet" width={500} height={625} priority className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="absolute bottom-20 left-0 max-w-[250px] bg-forest p-5 text-white shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">save05</p>
            <p className="mt-2 font-serif text-2xl leading-tight">Take $5.00 off your purchase</p>
          </div>
        </div>
      </div>
    </section>
  )
}

