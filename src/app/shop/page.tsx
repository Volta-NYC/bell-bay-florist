import type { Metadata } from "next"
import Breadcrumbs from "@/lib/components/breadcrumbs"
import ProductBrowser from "@/lib/components/product-browser"
import { bestSellerProducts } from "@/data/products"

export const metadata: Metadata = {
  title: "Best Sellers",
  description: "Shop Bell Bay Florist best-selling arrangements from the scrape catalog.",
}

export default function ShopPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Shop" }]} />
      <ProductBrowser products={bestSellerProducts} heading="Best Sellers" description="Grid of all 25 Best Seller products from the scrape." />
    </>
  )
}

