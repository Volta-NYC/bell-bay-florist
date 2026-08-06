import Image from "next/image"
import Link from "next/link"
import { business } from "@/data/business"
import { categories } from "@/data/categories"
import NewsletterSignup from "./newsletter-signup"

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.2fr_.8fr_.8fr_1fr] lg:px-6">
        <div className="space-y-5">
          <Image src="/images/brand/logo-footer.png" alt="Bell Bay Florist" width={364} height={123} className="h-auto w-[220px] bg-white" />
          <p className="max-w-sm text-sm leading-6 text-white/78">{business.tagline}</p>
          <Image src="/images/brand/teleflora-proud-member.png" alt={business.networkAffiliation} width={147} height={19} />
        </div>

        <div>
          <h2 className="mb-4 font-serif text-xl">Learn More</h2>
          <div className="grid gap-2 text-sm text-white/76">
            <Link href="/about">About Us</Link>
            <Link href="/help">Safe Shopping</Link>
            <Link href="/help">Privacy</Link>
            <Link href="/help">Delivery</Link>
            <Link href="/help">Substitutions</Link>
            <Link href="/shop">Site Map</Link>
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-serif text-xl">Shop</h2>
          <div className="grid gap-2 text-sm text-white/76">
            <Link href="/occasions/mothers-day">Mother's Day</Link>
            <Link href="/occasions/graduation">Graduation</Link>
            <Link href="/occasions/anniversary">Anniversary</Link>
            <Link href="/occasions/birthday">Birthday</Link>
            <Link href="/occasions/get-well">Get Well</Link>
            {categories.slice(0, 3).map((category) => (
              <Link key={category.slug} href={category.path}>
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <NewsletterSignup dark />
          <div className="text-sm leading-6 text-white/76">
            <p>{business.address}</p>
            <p>{business.phone}</p>
            <p>{business.tollFree}</p>
            <p>{business.email}</p>
          </div>
          <div className="flex gap-4 text-sm text-white">
            <Link href={business.facebook}>Facebook</Link>
            <Link href={business.instagram}>Instagram</Link>
            <Link href={business.yelp}>Yelp</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/12">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <span>© {new Date().getFullYear()} {business.name}</span>
          <span className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <span>{business.networkAffiliation}</span>
            <a href="https://www.novusnyc.org/" className="no-underline text-[#F6B78D] hover:text-[#F6B78D]">
              Made by Novus
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
