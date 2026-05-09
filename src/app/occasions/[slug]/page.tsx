import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getOccasion, occasions } from "@/data/occasions"
import { productsByOccasion } from "@/data/products"
import Breadcrumbs from "@/lib/components/breadcrumbs"
import ProductBrowser from "@/lib/components/product-browser"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return occasions.map((occasion) => ({ slug: occasion.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const occasion = getOccasion(slug)
  if (!occasion) return {}
  return {
    title: occasion.name,
    description: `Shop ${occasion.name} flowers at Bell Bay Florist.`,
  }
}

export default async function OccasionPage({ params }: PageProps) {
  const { slug } = await params
  const occasion = getOccasion(slug)
  if (!occasion) notFound()

  return (
    <>
      <Breadcrumbs items={[{ label: "Occasions" }, { label: occasion.name }]} />
      <ProductBrowser products={productsByOccasion(occasion.slug)} heading={occasion.name} description={occasion.description} />
    </>
  )
}

