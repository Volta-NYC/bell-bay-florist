export type CategorySlug =
  | "roses"
  | "plants"
  | "flowers-in-a-vase"
  | "flowers-in-a-basket"
  | "flowers-in-a-gift"
  | "lavish"
  | "spring-bouquets"
  | "yankee-candle"

export const priceRanges = [
  { label: "$45 - $55", min: 45, max: 55, count: 8 },
  { label: "$55 - $75", min: 55, max: 75, count: 39 },
  { label: "$75 - $100", min: 75, max: 100, count: 11 },
  { label: "$100 - $150", min: 100, max: 150, count: 5 },
] as const

export const flowerTypes = [
  { label: "Alstroemeria", count: 11 },
  { label: "Carnations", count: 20 },
  { label: "Chrysanthemums", count: 15 },
  { label: "Daisies", count: 8 },
  { label: "Gerbera Daisies", count: 3 },
  { label: "Hydrangea", count: 5 },
  { label: "Iris", count: 1 },
  { label: "Lilies", count: 22 },
  { label: "Orchids", count: 2 },
  { label: "Plants", count: 10 },
  { label: "Roses", count: 43 },
  { label: "Sunflowers", count: 1 },
  { label: "Tulips", count: 1 },
] as const

export const colors = [
  { label: "Blue", count: 4, value: "#729dc8" },
  { label: "Green", count: 20, value: "#6a9b62" },
  { label: "White", count: 22, value: "#f7f3ed" },
  { label: "Purple", count: 19, value: "#8e6bb0" },
  { label: "Red", count: 21, value: "#b54649" },
  { label: "Orange", count: 8, value: "#e9904a" },
  { label: "Pink", count: 21, value: "#e7a1b1" },
  { label: "Yellow", count: 13, value: "#e3c44f" },
] as const

export const categories = [
  {
    name: "Roses",
    slug: "roses",
    path: "/shop/roses",
    description: "Roses",
  },
  {
    name: "Plants",
    slug: "plants",
    path: "/shop/plants",
    description: "Plants",
  },
  {
    name: "Flowers In A Vase",
    slug: "flowers-in-a-vase",
    path: "/shop/flowers-in-a-vase",
    description: "Flowers In A Vase",
  },
  {
    name: "Flowers In A Basket",
    slug: "flowers-in-a-basket",
    path: "/shop/flowers-in-a-basket",
    description: "Flowers In A Basket",
  },
  {
    name: "Flowers in a Gift",
    slug: "flowers-in-a-gift",
    path: "/shop/flowers-in-a-gift",
    description: "Flowers in a Gift",
  },
  {
    name: "Lavish",
    slug: "lavish",
    path: "/shop/lavish",
    description: "Lavish",
  },
  {
    name: "Spring Bouquets",
    slug: "spring-bouquets",
    path: "/shop/spring-bouquets",
    description: "Spring Bouquets",
  },
  {
    name: "Yankee Candle",
    slug: "yankee-candle",
    path: "/shop/yankee-candle",
    description: "Yankee Candle",
  },
] as const

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug)

