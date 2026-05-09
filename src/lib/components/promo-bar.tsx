import { business } from "@/data/business"

export default function PromoBar() {
  return (
    <div className="bg-forest text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.16em] sm:text-sm">
        <span>{business.promo.text}</span>
      </div>
    </div>
  )
}

