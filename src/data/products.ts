import type { CategorySlug } from "./categories"
import type { OccasionSlug } from "./occasions"

export interface Product {
  id: string
  name: string
  slug: string
  price?: number
  description?: string
  image?: string
  category: CategorySlug[]
  occasions: OccasionSlug[]
  flowerTypes: string[]
  colors: string[]
  badge?: "best-seller" | "top-seller" | "summer-special"
  sizes: { name: string; price?: number }[]
  addOns: { name: string; image?: string }[]
  sku?: string
  container?: string
  homepageFeatured?: boolean
  bestSeller?: boolean
}

export const addOns = [
  { name: "9 Inch Balloon" },
  { name: "Box Of Chocolates" },
  { name: "Stuffed Animals" },
] as const

const standard = (price?: number) => [{ name: "Standard", price }]

const product = (data: Omit<Product, "id" | "slug" | "sizes" | "addOns"> & { slug?: string; sizes?: Product["sizes"] }): Product => {
  const slug =
    data.slug ??
    data.name
      .toLowerCase()
      .replace(/®/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")

  return {
    ...data,
    id: slug,
    slug,
    sizes: data.sizes ?? standard(data.price),
    addOns: [...addOns],
  }
}

export const products: Product[] = [
  product({
    name: "Deal of the Day",
    price: 50,
    category: ["spring-bouquets"],
    occasions: ["birthday", "just-because", "thank-you", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Pink", "Yellow", "Green"],
    homepageFeatured: true,
  }),
  product({
    name: "Sensational",
    price: 125,
    category: ["lavish", "flowers-in-a-vase"],
    occasions: ["anniversary", "birthday", "mothers-day"],
    flowerTypes: ["Roses", "Lilies"],
    colors: ["Pink", "White", "Green"],
    homepageFeatured: true,
  }),
  product({
    name: "Love's Divine Bouquet - Long Stemmed Roses",
    price: 165,
    image: "/images/products/loves-divine-bouquet-long-stemmed-roses.jpg",
    category: ["roses", "lavish", "flowers-in-a-vase"],
    occasions: ["anniversary", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red"],
    homepageFeatured: true,
  }),
  product({
    name: "A Dozen Premium Red Roses",
    price: 100,
    image: "/images/products/red-rose-bouquet.jpg",
    category: ["roses", "lavish", "flowers-in-a-vase"],
    occasions: ["anniversary", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red"],
    homepageFeatured: true,
  }),
  product({
    name: "Golden Garden Dried Floral Bouquet",
    price: 35,
    category: ["flowers-in-a-gift"],
    occasions: ["birthday", "just-because", "thank-you"],
    flowerTypes: ["Roses"],
    colors: ["Yellow", "Orange"],
    homepageFeatured: true,
  }),
  product({
    name: "A Dozen Premium Multi-Color Roses",
    price: 100,
    category: ["roses", "lavish", "flowers-in-a-vase"],
    occasions: ["birthday", "anniversary", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red", "Pink", "Yellow", "Orange"],
    homepageFeatured: true,
  }),
  product({
    name: "Bayside Beauty",
    price: 79.95,
    category: ["flowers-in-a-vase", "lavish"],
    occasions: ["birthday", "thank-you", "mothers-day"],
    flowerTypes: ["Roses", "Lilies"],
    colors: ["Pink", "White", "Purple"],
    homepageFeatured: true,
  }),
  product({
    name: "Dreams From the Heart Bouquet",
    price: 94.99,
    image: "/images/products/dreams-from-the-heart-bouquet.jpg",
    category: ["flowers-in-a-vase", "lavish"],
    occasions: ["sympathy", "anniversary", "mothers-day"],
    flowerTypes: ["Roses", "Lilies"],
    colors: ["Pink", "White"],
    homepageFeatured: true,
  }),
  product({
    name: "Dance with Me Bouquet with Red Roses",
    price: 65.95,
    image: "/images/products/dance-with-me-bouquet-with-red-roses.jpg",
    category: ["roses", "flowers-in-a-vase"],
    occasions: ["anniversary", "birthday", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red", "Pink"],
    homepageFeatured: true,
  }),
  product({
    name: "Be My Love Bouquet with Red Roses",
    price: 65.95,
    image: "/images/products/be-my-love-bouquet-with-red-roses.jpg",
    category: ["roses", "flowers-in-a-vase"],
    occasions: ["anniversary", "birthday", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red"],
    badge: "best-seller",
    homepageFeatured: true,
    bestSeller: true,
  }),
  product({
    name: "Willow Garden",
    price: 74.95,
    category: ["plants", "spring-bouquets"],
    occasions: ["get-well", "sympathy", "just-because"],
    flowerTypes: ["Plants"],
    colors: ["Green", "White"],
    homepageFeatured: true,
  }),
  product({
    name: "Teleflora's Be Happy® Bouquet with Roses",
    price: 59.95,
    image: "/images/products/telefloras-be-happy-bouquet-with-roses.jpg",
    category: ["roses", "flowers-in-a-gift", "spring-bouquets"],
    occasions: ["birthday", "get-well", "thank-you", "just-because", "mothers-day"],
    flowerTypes: ["Roses", "Daisies"],
    colors: ["Yellow", "Red", "Green"],
    homepageFeatured: true,
    bestSeller: true,
  }),
  product({
    name: "Always a Lady",
    price: 99.95,
    image: "/images/products/always-a-lady.jpg",
    category: ["lavish", "flowers-in-a-vase"],
    occasions: ["anniversary", "birthday", "mothers-day"],
    flowerTypes: ["Roses", "Lilies"],
    colors: ["Pink", "Purple"],
    badge: "best-seller",
    homepageFeatured: true,
    bestSeller: true,
  }),
  product({
    name: "A Dozen Multi-Color Roses",
    price: 70,
    category: ["roses", "flowers-in-a-vase"],
    occasions: ["birthday", "anniversary", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red", "Pink", "Yellow", "Orange"],
    badge: "best-seller",
    homepageFeatured: true,
    bestSeller: true,
  }),
  product({
    name: "White Phalaenopsis Orchid",
    price: 79.95,
    image: "/images/products/white-phalaenopsis-orchid.jpg",
    category: ["plants", "flowers-in-a-gift"],
    occasions: ["sympathy", "thank-you", "mothers-day"],
    flowerTypes: ["Orchids", "Plants"],
    colors: ["White", "Green"],
    homepageFeatured: true,
  }),
  product({
    name: "Two Dozen Red Roses",
    price: 185,
    image: "/images/products/two-dozen-red-roses.jpg",
    category: ["roses", "lavish", "flowers-in-a-vase"],
    occasions: ["anniversary", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red"],
    homepageFeatured: true,
  }),
  product({
    name: "Brighter Days",
    price: 69.95,
    category: ["spring-bouquets", "flowers-in-a-vase"],
    occasions: ["birthday", "get-well", "thank-you", "just-because"],
    flowerTypes: ["Roses", "Daisies"],
    colors: ["Yellow", "Pink", "Green"],
    homepageFeatured: true,
    bestSeller: true,
  }),
  product({
    name: "Timeless",
    price: 105,
    category: ["lavish", "flowers-in-a-vase"],
    occasions: ["anniversary", "sympathy", "mothers-day"],
    flowerTypes: ["Roses", "Lilies"],
    colors: ["White", "Pink", "Green"],
    homepageFeatured: true,
    bestSeller: true,
  }),
  product({
    name: "Possibly Pink",
    price: 65.95,
    category: ["spring-bouquets", "flowers-in-a-vase"],
    occasions: ["birthday", "thank-you", "mothers-day"],
    flowerTypes: ["Roses", "Carnations"],
    colors: ["Pink", "White"],
    homepageFeatured: true,
  }),
  product({
    name: "Sunshine and Smiles-Deluxe",
    price: 79.95,
    category: ["spring-bouquets", "flowers-in-a-vase"],
    occasions: ["birthday", "get-well", "thank-you"],
    flowerTypes: ["Daisies", "Roses"],
    colors: ["Yellow", "Green"],
    homepageFeatured: true,
  }),
  product({
    name: "Make Me Blush - Dozen Long Stemmed Pink Roses",
    price: 100,
    image: "/images/products/make-me-blush-dozen-long-stemmed-pink-roses.jpg",
    category: ["roses", "lavish", "flowers-in-a-vase"],
    occasions: ["anniversary", "mothers-day", "thank-you"],
    flowerTypes: ["Roses"],
    colors: ["Pink"],
    homepageFeatured: true,
  }),
  product({
    name: "Stunning Beauty Bouquet",
    price: 79.95,
    image: "/images/products/stunning-beauty-bouquet.jpg",
    category: ["flowers-in-a-vase", "spring-bouquets"],
    occasions: ["birthday", "thank-you", "mothers-day"],
    flowerTypes: ["Roses", "Lilies"],
    colors: ["Pink", "White"],
    homepageFeatured: true,
    bestSeller: true,
  }),
  product({
    name: "Red Rose Classic",
    price: 85,
    image: "/images/products/red-rose-bouquet.jpg",
    category: ["roses", "flowers-in-a-vase"],
    occasions: ["anniversary", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red"],
    bestSeller: true,
  }),
  product({
    name: "Irresistable",
    price: 59.95,
    category: ["spring-bouquets", "flowers-in-a-vase"],
    occasions: ["birthday", "just-because", "thank-you"],
    flowerTypes: ["Roses", "Carnations"],
    colors: ["Pink", "Purple"],
    badge: "summer-special",
    bestSeller: true,
  }),
  product({
    name: "Deep Emotions Roses",
    price: 74,
    category: ["roses", "flowers-in-a-vase"],
    occasions: ["anniversary", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red"],
    bestSeller: true,
  }),
  product({
    name: "Sunny Days",
    price: 53.95,
    category: ["spring-bouquets", "flowers-in-a-vase"],
    occasions: ["birthday", "get-well", "thank-you"],
    flowerTypes: ["Daisies", "Roses"],
    colors: ["Yellow", "Orange"],
    bestSeller: true,
  }),
  product({
    name: "Simple Pleasures",
    price: 44.95,
    category: ["spring-bouquets", "flowers-in-a-vase"],
    occasions: ["birthday", "just-because", "thank-you"],
    flowerTypes: ["Carnations", "Chrysanthemums"],
    colors: ["Pink", "Yellow"],
    bestSeller: true,
  }),
  product({
    name: "Colorful Basket Arrangement",
    price: 44.95,
    category: ["flowers-in-a-basket", "spring-bouquets"],
    occasions: ["birthday", "get-well", "thank-you"],
    flowerTypes: ["Carnations", "Chrysanthemums"],
    colors: ["Pink", "Yellow", "Purple"],
    badge: "best-seller",
    bestSeller: true,
  }),
  product({
    name: "Enchanted Cottage",
    price: 62.95,
    image: "/images/products/enchanted-cottage.jpg",
    category: ["roses", "flowers-in-a-vase", "spring-bouquets"],
    occasions: ["birthday", "thank-you", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["White", "Purple"],
    bestSeller: true,
  }),
  product({
    name: "Madly in Love Bouquet with Red Roses",
    price: 85,
    image: "/images/products/madly-in-love-bouquet-with-red-roses.jpg",
    category: ["roses", "flowers-in-a-vase", "lavish"],
    occasions: ["anniversary", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red"],
    bestSeller: true,
  }),
  product({
    name: "Hugs and Kisses Bouquet with Red Roses",
    price: 64.95,
    image: "/images/products/hugs-and-kisses-bouquet-with-red-roses.jpg",
    category: ["roses", "flowers-in-a-vase"],
    occasions: ["anniversary", "birthday", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red", "Pink"],
    bestSeller: true,
  }),
  product({
    name: "Red And White Delight",
    price: 56.95,
    image: "/images/products/red-and-white-delight.jpg",
    category: ["roses", "flowers-in-a-vase"],
    occasions: ["anniversary", "sympathy", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red", "White"],
    bestSeller: true,
  }),
  product({
    name: "So Happy You're Mine",
    price: 54.95,
    image: "/images/products/so-happy-youre-mine.jpg",
    category: ["roses", "flowers-in-a-gift"],
    occasions: ["anniversary", "birthday", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red", "Pink"],
    badge: "best-seller",
    bestSeller: true,
  }),
  product({
    name: "Blooming Garden Basket",
    price: 77.95,
    image: "/images/products/blooming-garden-basket.jpg",
    category: ["flowers-in-a-basket", "plants"],
    occasions: ["sympathy", "get-well", "thank-you"],
    flowerTypes: ["Plants", "Carnations", "Chrysanthemums"],
    colors: ["Green", "White", "Pink"],
    bestSeller: true,
  }),
  product({
    name: "Basket Full of Wishes",
    price: 64.95,
    image: "/images/products/basket-full-of-wishes.jpg",
    category: ["flowers-in-a-basket", "spring-bouquets"],
    occasions: ["birthday", "get-well", "thank-you"],
    flowerTypes: ["Roses", "Carnations"],
    colors: ["Yellow", "Purple", "Pink"],
    badge: "best-seller",
    bestSeller: true,
  }),
  product({
    name: "Lavish Love Bouquet with Long Stemmed Red Roses",
    price: 94.95,
    image: "/images/products/lavish-love-bouquet-with-long-stemmed-red-roses.jpg",
    category: ["roses", "lavish", "flowers-in-a-vase"],
    occasions: ["anniversary", "mothers-day"],
    flowerTypes: ["Roses"],
    colors: ["Red"],
    bestSeller: true,
  }),
  product({
    name: "A Little Pink Me Up",
    price: 82.95,
    image: "/images/products/a-little-pink-me-up.jpg",
    category: ["flowers-in-a-vase", "spring-bouquets"],
    occasions: ["birthday", "get-well", "thank-you", "mothers-day"],
    flowerTypes: ["Roses", "Carnations"],
    colors: ["Pink"],
    bestSeller: true,
  }),
  product({
    name: "Love and Laughter",
    price: 69.95,
    image: "/images/products/love-and-laughter.jpg",
    category: ["flowers-in-a-vase", "spring-bouquets"],
    occasions: ["birthday", "anniversary", "thank-you"],
    flowerTypes: ["Roses", "Lilies"],
    colors: ["Purple", "White"],
    badge: "best-seller",
    bestSeller: true,
  }),
  product({
    name: "Simply Elegant Spathiphyllum (Peace Lily) - Small",
    price: 44.99,
    image: "/images/products/simply-elegant-spathiphyllum-peace-lily-small.jpg",
    category: ["plants"],
    occasions: ["sympathy", "get-well", "thank-you"],
    flowerTypes: ["Plants", "Lilies"],
    colors: ["Green", "White"],
    badge: "top-seller",
    bestSeller: true,
  }),
  product({
    name: "Arrive In Style",
    price: 59.95,
    category: ["flowers-in-a-vase", "spring-bouquets"],
    occasions: ["birthday", "thank-you", "mothers-day"],
    flowerTypes: ["Roses", "Lilies"],
    colors: ["Pink", "White"],
    bestSeller: true,
  }),
  product({
    name: "Sweetness",
    price: 59.95,
    description:
      "Beckoning with sunlit grace and beauty, this warm and uplifting bouquet is ready to offer cheer and flowering elegance to your recipient today. A collection of pink blooms, including Peruvian Lilies, carnations, mini carnations, and roses, are highlighted by yellow and white chrysanthemums, and lush greens. Presented in a classic clear glass vase.",
    category: ["flowers-in-a-vase", "spring-bouquets"],
    occasions: ["birthday", "get-well", "thank-you", "mothers-day"],
    flowerTypes: ["Alstroemeria", "Carnations", "Chrysanthemums", "Roses"],
    colors: ["Pink", "Yellow", "White", "Green"],
  }),
  product({
    name: "Grand Bouquet",
    description:
      "When great events call for something really grand, send this extraordinary bouquet with its colorful array of flowers. Callas, larkspur, roses, snapdragons and gerberas arrive in a ceramic urn.",
    category: ["lavish", "flowers-in-a-gift"],
    occasions: ["birthday", "anniversary", "graduation"],
    flowerTypes: ["Roses", "Gerbera Daisies"],
    colors: ["Pink", "Purple", "Yellow"],
  }),
  product({
    name: "Just for You",
    description:
      "This striking array of pink and purple flowers is the perfect way to show just how much you're thinking of someone special. Oriental lilies, stock, delphinium and gerberas arranged in a natural vine basket.",
    category: ["flowers-in-a-basket", "lavish"],
    occasions: ["just-because", "thank-you", "mothers-day"],
    flowerTypes: ["Lilies", "Gerbera Daisies"],
    colors: ["Pink", "Purple"],
  }),
  product({
    name: "Calypso",
    description:
      "Remind someone of their favorite tropical vacation - hot-colored blossoms in an oceanic blue glass cube vase. Hot pink gerberas, orange roses, bi-color dahlias, yellow miniature carnations, yellow Mokara orchids and blue delphinium, accented with seeded eucalyptus and oregonia.",
    category: ["flowers-in-a-vase", "flowers-in-a-gift", "spring-bouquets"],
    occasions: ["birthday", "just-because", "thank-you"],
    flowerTypes: ["Gerbera Daisies", "Roses", "Carnations", "Orchids"],
    colors: ["Pink", "Orange", "Yellow", "Blue"],
  }),
  product({
    name: "Lavender Garden",
    description:
      "Passionate purples and lavenders convey your sincerest wishes. Daisies, purple carnations, larkspur and purple statice accented by a chiffon bow.",
    category: ["spring-bouquets"],
    occasions: ["sympathy", "thank-you", "get-well"],
    flowerTypes: ["Daisies", "Carnations"],
    colors: ["Purple"],
  }),
  product({
    name: "Garden Centerpiece",
    image: "/images/products/garden-centerpiece.jpg",
    description:
      "Pastel flowers, including asters, carnations, chrysanthemums and gerberas delivered in a low bowl.",
    category: ["flowers-in-a-gift", "spring-bouquets"],
    occasions: ["thank-you", "mothers-day", "birthday"],
    flowerTypes: ["Carnations", "Chrysanthemums", "Gerbera Daisies"],
    colors: ["Pink", "White", "Purple"],
  }),
  product({
    name: "Garden Fresh Blooms",
    description:
      "What refreshes your spirits more than a stroll through a country garden? Give someone special an arrangement that inspires the senses.",
    category: ["spring-bouquets", "flowers-in-a-vase"],
    occasions: ["birthday", "thank-you", "get-well"],
    flowerTypes: ["Roses", "Daisies"],
    colors: ["Pink", "Yellow", "Green"],
  }),
  product({
    name: "Sentiments of Serenity Spray",
    image: "/images/products/sentiments-of-serenity-spray.jpg",
    description: "Beautifully simple - white roses, lilies and carnations decorated with white satin ribbon.",
    category: ["roses", "lavish"],
    occasions: ["sympathy"],
    flowerTypes: ["Roses", "Lilies", "Carnations"],
    colors: ["White"],
  }),
]

export const bestSellerProducts = products.filter((product) => product.bestSeller)
export const homepageFeaturedProducts = products.filter((product) => product.homepageFeatured)

export const getProduct = (slug: string) => products.find((product) => product.slug === slug)

export const productsByCategory = (slug: CategorySlug) =>
  products.filter((product) => product.category.includes(slug))

export const productsByOccasion = (slug: OccasionSlug) =>
  products.filter((product) => product.occasions.includes(slug))

export const relatedProducts = (product: Product, limit = 4) =>
  products
    .filter((candidate) => candidate.slug !== product.slug)
    .filter(
      (candidate) =>
        candidate.category.some((category) => product.category.includes(category)) ||
        candidate.occasions.some((occasion) => product.occasions.includes(occasion)),
    )
    .slice(0, limit)

export const formatPrice = (price?: number) => (typeof price === "number" ? `$${price.toFixed(2)}` : "")

