import Link from "next/link"
import { ArrowRightIcon, FlowerIcon } from "./icons"

export default function CategoryCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="group flex min-h-36 flex-col justify-between border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:border-gold/70 hover:shadow-lg">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blush text-forest">
        <FlowerIcon className="h-6 w-6" />
      </div>
      <div className="mt-8 flex items-end justify-between gap-4">
        <h3 className="font-serif text-2xl leading-tight text-ink">{title}</h3>
        <ArrowRightIcon className="h-5 w-5 shrink-0 text-forest transition group-hover:translate-x-1" />
      </div>
    </Link>
  )
}

