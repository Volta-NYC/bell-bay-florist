import Link from "next/link"
import type { ReactNode } from "react"
import { business, faqs } from "@/data/business"
import { categories } from "@/data/categories"
import { occasions } from "@/data/occasions"
import { homepageFeaturedProducts } from "@/data/products"
import CategoryCard from "@/lib/components/category-card"
import FAQAccordion from "@/lib/components/faq-accordion"
import HeroBanner from "@/lib/components/hero-banner"
import NewsletterSignup from "@/lib/components/newsletter-signup"
import ProductGrid from "@/lib/components/product-grid"
import TestimonialCard from "@/lib/components/testimonial-card"
import { FlowerIcon, HeartIcon, TruckIcon } from "@/lib/components/icons"

export default function HomePage() {
  return (
    <>
      <HeroBanner />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-4xl text-forest">Featured Arrangements</h2>
              <p className="mt-3 text-muted">Shop local and save!</p>
            </div>
            <Link href="/shop" className="text-sm font-semibold uppercase tracking-[0.14em] text-forest hover:text-ink">
              View Best Sellers
            </Link>
          </div>
          <ProductGrid products={homepageFeaturedProducts} priorityCount={4} />
        </div>
      </section>

      <section className="bg-warm py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="font-serif text-4xl text-forest">Shop by Occasion</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {occasions.slice(0, 9).map((occasion) => (
              <CategoryCard key={occasion.slug} title={occasion.name} href={occasion.path} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div>
              <h2 className="font-serif text-4xl text-forest">Why Choose Bell Bay Florist</h2>
              <p className="mt-5 leading-8 text-muted">{business.about}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <TrustItem icon={<HeartIcon className="h-7 w-7" />} title="Family-owned since 1976" text={business.tagline} />
              <TrustItem icon={<TruckIcon className="h-7 w-7" />} title="Same-day delivery" text={business.delivery.sameDay} />
              <TrustItem icon={<FlowerIcon className="h-7 w-7" />} title="3 generations of service" text="For three generations, we've been committed to providing our customers with the finest quality flowers and personalized service." />
              <TrustItem icon={<FlowerIcon className="h-7 w-7" />} title="Teleflora network member" text={business.networkAffiliation} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{business.promo.code}</p>
            <h2 className="mt-2 font-serif text-4xl">Take $5.00 off your purchase</h2>
          </div>
          <Link href="/shop" className="inline-flex justify-center border border-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition hover:bg-white hover:text-forest">
            Shop Best Sellers
          </Link>
        </div>
      </section>

      <section className="bg-warm py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <TestimonialCard title="Daily deliveries" text="We proudly serve Bayside and the surrounding areas with daily deliveries of beautiful fresh flowers and plants." />
            <TestimonialCard title="National delivery" text={business.nationalDelivery} />
            <TestimonialCard title="Personalized service" text="We've been committed to providing our customers with the finest quality flowers and personalized service and attention they deserve." />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[.8fr_1.2fr] lg:px-6">
          <div>
            <h2 className="font-serif text-4xl text-forest">Flowers by Type</h2>
            <p className="mt-4 leading-7 text-muted">Best Sellers, Roses, Plants, Flowers In A Vase, Flowers In A Basket, Flowers in a Gift, Lavish, Spring Bouquets, and Yankee Candle.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <CategoryCard key={category.slug} title={category.name} href={category.path} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blush/60 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:px-6">
          <NewsletterSignup />
          <div>
            <h2 className="font-serif text-4xl text-forest">Best Sellers FAQs</h2>
            <div className="mt-6">
              <FAQAccordion items={[...faqs]} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function TrustItem({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="border border-stone-200 bg-warm p-6">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blush text-forest">{icon}</div>
      <h3 className="font-serif text-2xl text-forest">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
    </article>
  )
}
