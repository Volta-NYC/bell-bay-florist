export default function NewsletterSignup({ dark = false }: { dark?: boolean }) {
  return (
    <form className="space-y-3" action="#">
      <label className={`block font-serif text-xl ${dark ? "text-white" : "text-forest"}`} htmlFor={dark ? "footer-newsletter" : "newsletter"}>
        SIGN UP FOR SPECIAL OFFERS!
      </label>
      <div className={`flex overflow-hidden border ${dark ? "border-white/25 bg-white/10" : "border-stone-200 bg-white"}`}>
        <input
          id={dark ? "footer-newsletter" : "newsletter"}
          type="email"
          placeholder="Email address"
          className={`min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none ${dark ? "text-white placeholder:text-white/55" : "text-ink placeholder:text-muted"}`}
        />
        <button type="button" className={`${dark ? "bg-gold text-forest" : "bg-forest text-white"} px-5 text-sm font-semibold uppercase tracking-[0.12em]`}>
          Join
        </button>
      </div>
    </form>
  )
}

