export default function TestimonialCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="border border-stone-200 bg-white p-6">
      <h3 className="font-serif text-2xl text-forest">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
    </article>
  )
}

