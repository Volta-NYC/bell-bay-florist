import Image from "next/image"
import Link from "next/link"
import type { Product } from "@/data/products"
import { formatPrice } from "@/data/products"

const badgeLabel: Record<NonNullable<Product["badge"]>, string> = {
  "best-seller": "Best Seller",
  "top-seller": "Top Seller",
  "summer-special": "Summer Special !",
}

export function ProductImage({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-blush">
      {product.image ? (
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 280px, (min-width: 768px) 33vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#f5e6e0,transparent_34%),linear-gradient(135deg,#f9f4ef,#e8efe9)] p-6 text-center">
          <div>
            <div className="mx-auto mb-4 h-12 w-12 rounded-full border border-gold/60 bg-white/60" />
            <p className="font-serif text-xl leading-tight text-forest">{product.name}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block border border-stone-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-xl">
      <div className="relative">
        <ProductImage product={product} priority={priority} />
        {product.badge ? (
          <span className="absolute left-3 top-3 bg-forest px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
            {badgeLabel[product.badge]}
          </span>
        ) : null}
      </div>
      <div className="space-y-2 p-4">
        <h3 className="min-h-[3.25rem] font-serif text-xl leading-tight text-ink group-hover:text-forest">{product.name}</h3>
        {product.price ? <p className="font-semibold text-forest">{formatPrice(product.price)}</p> : null}
      </div>
    </Link>
  )
}

