import type { Product } from "@/data/products"
import ProductCard from "./product-card"

export default function ProductGrid({ products, priorityCount = 0 }: { products: Product[]; priorityCount?: number }) {
  if (!products.length) {
    return (
      <div className="border border-dashed border-stone-300 bg-white p-10 text-center">
        <p className="font-serif text-2xl text-forest">No products from the scrape file are available in this section.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={product.slug} product={product} priority={index < priorityCount} />
      ))}
    </div>
  )
}

