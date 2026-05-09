export default function FAQAccordion({ items }: { items: { question: string; answer?: string }[] }) {
  return (
    <div className="divide-y divide-stone-200 border border-stone-200 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 font-semibold text-ink outline-none transition hover:text-forest focus-visible:ring-2 focus-visible:ring-gold">
            <span>{item.question}</span>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-blush text-forest transition group-open:rotate-45">+</span>
          </summary>
          {item.answer ? <p className="px-5 pb-5 text-sm leading-7 text-muted">{item.answer}</p> : null}
        </details>
      ))}
    </div>
  )
}

