import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { business } from "@/data/business"
import { formatPrice, getProduct, products, relatedProducts } from "@/data/products"
import Breadcrumbs from "@/lib/components/breadcrumbs"
import ProductGrid from "@/lib/components/product-grid"
import { ProductImage } from "@/lib/components/product-card"
import ProductOptions from "@/lib/components/product-options"

type PageProps = {
  params: Promise<{ slug: string }>
}

const badgeLabel = {
  "best-seller": "Best Seller",
  "top-seller": "Top Seller",
  "summer-special": "Summer Special !",
} as const

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.description ?? `${product.name} from Bell Bay Florist.`,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  return (
    <>
      <Breadcrumbs items={[{ label: "Shop", href: "/shop" }, { label: product.name }]} />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 lg:grid-cols-[1fr_.9fr] lg:px-6">
        <div className="bg-white p-3 shadow-soft">
          <ProductImage product={product} priority />
        </div>

        <div className="space-y-7">
          <div>
            {product.badge ? (
              <span className="mb-4 inline-flex bg-blush px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-forest">
                {badgeLabel[product.badge]}
              </span>
            ) : null}
            <h1 className="font-serif text-4xl leading-tight text-forest sm:text-5xl">{product.name}</h1>
            {product.price ? <p className="mt-4 text-2xl font-semibold text-ink">{formatPrice(product.price)}</p> : null}
            {product.description ? <p className="mt-5 leading-8 text-muted">{product.description}</p> : null}
            <p className="mt-4 text-sm leading-7 text-muted">{business.notices[business.notices.length - 1]}</p>
          </div>

          <ProductOptions product={product} />
        </div>
      </section>

      <section className="border-t border-stone-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="mb-8 font-serif text-4xl text-forest">You May Also Like</h2>
          <ProductGrid products={relatedProducts(product)} />
        </div>
      </section>
    </>
  )
}
