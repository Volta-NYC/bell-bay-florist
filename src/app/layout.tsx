import "./globals.css"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { business } from "@/data/business"
import Footer from "@/lib/components/footer"
import Header from "@/lib/components/header"
import PromoBar from "@/lib/components/promo-bar"

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bellbayflorist.com"),
  title: {
    default: "Bell Bay Florist | Bayside NY Florist Since 1976",
    template: "%s | Bell Bay Florist",
  },
  description:
    "Bell Bay Florist is a family owned and operated florist serving Bayside, Flushing, Whitestone, and surrounding areas with fresh flowers and plants.",
  openGraph: {
    title: "Bell Bay Florist",
    description: business.tagline,
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Florist",
    name: business.name,
    address: business.address,
    telephone: business.phone,
    email: business.email,
    url: "https://www.bellbayflorist.com",
    areaServed: business.areasServed,
    openingHours: business.hours.map((item) => `${item.day}: ${item.hours}`),
  }

  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        <PromoBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
