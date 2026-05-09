export type OccasionSlug =
  | "birthday"
  | "anniversary"
  | "get-well"
  | "just-because"
  | "thank-you"
  | "new-baby"
  | "sympathy"
  | "graduation"
  | "mothers-day"

export const occasions = [
  { name: "Birthday", slug: "birthday", path: "/occasions/birthday", description: "" },
  { name: "Anniversary", slug: "anniversary", path: "/occasions/anniversary", description: "" },
  { name: "Get Well", slug: "get-well", path: "/occasions/get-well", description: "" },
  { name: "Just Because", slug: "just-because", path: "/occasions/just-because", description: "" },
  { name: "Thank You", slug: "thank-you", path: "/occasions/thank-you", description: "" },
  { name: "New Baby", slug: "new-baby", path: "/occasions/new-baby", description: "" },
  { name: "Sympathy", slug: "sympathy", path: "/occasions/sympathy", description: "" },
  { name: "Graduation", slug: "graduation", path: "/occasions/graduation", description: "" },
  { name: "Mother's Day", slug: "mothers-day", path: "/occasions/mothers-day", description: "" },
] as const

export const getOccasion = (slug: string) => occasions.find((occasion) => occasion.slug === slug)

