import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { categories, getCategory } from "@/data/categories"
import { productsByCategory } from "@/data/products"
import Breadcrumbs from "@/lib/components/breadcrumbs"
import ProductBrowser from "@/lib/components/product-browser"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) return {}
  return {
    title: category.name,
    description: `Shop ${category.name} at Bell Bay Florist.`,
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()

  return (
    <>
      <Breadcrumbs items={[{ label: "Shop", href: "/shop" }, { label: category.name }]} />
      <ProductBrowser products={productsByCategory(category.slug)} heading={category.name} description={category.description} />
    </>
  )
}

