import type { Metadata } from "next"
import { business, faqs, homepageFaqQuestions } from "@/data/business"
import Breadcrumbs from "@/lib/components/breadcrumbs"
import FAQAccordion from "@/lib/components/faq-accordion"

export const metadata: Metadata = {
  title: "Help and FAQ",
  description: "Bell Bay Florist delivery, substitution, payment, funeral home, and FAQ details.",
}

export default function HelpPage() {
  const policyItems = [
    { question: "Local Delivery", answer: `Local delivery fee: ${business.delivery.localFee} per order, per address. Outside local delivery area: ${business.delivery.outsideLocalFee}. ${business.delivery.pickup}.` },
    { question: "Same-Day Delivery", answer: `${business.delivery.sameDay} ${business.delivery.timing}` },
    { question: "Holiday Ordering", answer: business.delivery.holidayOrdering },
    { question: "Substitution Policy", answer: business.substitution.join(". ") },
    { question: "Accepted Payment Methods", answer: business.paymentMethods.join(", ") },
    { question: "Funeral Home Deliveries", answer: `${business.funeralHomes.join(", ")}. ${business.funeralHomeNote}.` },
  ]

  return (
    <>
      <Breadcrumbs items={[{ label: "Help" }]} />
      <section className="mx-auto max-w-5xl px-4 pb-16 lg:px-6">
        <h1 className="font-serif text-5xl text-forest">Help / FAQ</h1>
        <p className="mt-5 leading-8 text-muted">Delivery policy details, substitution policy, payment methods accepted, and frequently asked questions from the scrape.</p>

        <div className="mt-10 space-y-12">
          <div>
            <h2 className="mb-5 font-serif text-3xl text-forest">Best Sellers FAQs</h2>
            <FAQAccordion items={[...faqs]} />
          </div>

          <div>
            <h2 className="mb-5 font-serif text-3xl text-forest">Homepage FAQs</h2>
            <FAQAccordion items={homepageFaqQuestions.map((question) => ({ question }))} />
          </div>

          <div>
            <h2 className="mb-5 font-serif text-3xl text-forest">Policies</h2>
            <FAQAccordion items={policyItems} />
          </div>
        </div>
      </section>
    </>
  )
}

