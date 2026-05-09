export const business = {
  name: "Bell Bay Florist",
  tagline: "Beautiful Flowers For All Occasions...Since 1976",
  address: "43-06 Bell Blvd., Bayside, NY 11361",
  phone: "(718) 428-3166",
  tollFree: "(800) 862-4257",
  fax: "(718) 428-3188",
  email: "info@bellbayflorist.com",
  website: "bellbayflorist.com",
  facebook: "https://www.facebook.com/Bell-Bay-Florist-129739973845575/",
  yelp: "https://www.yelp.com/biz/bell-bay-florist-bayside",
  instagram: "https://www.instagram.com/bellbayflorist/",
  networkAffiliation: "Proud Member of the Teleflora Network",
  about:
    "Bell Bay Florist is a family owned and operated business that has been serving Bayside for over 35 years. For three generations, we've been committed to providing our customers with the finest quality flowers and personalized service and attention they deserve. We are located on Bell Blvd in Bayside NY, the neighborhood we have lived in for over a half century. We proudly serve Bayside and the surrounding areas with daily deliveries of beautiful fresh flowers and plants.",
  nationalDelivery: "Via Teleflora and FTD networks",
  owners: "Gus and Mike",
  areasServed: ["Bayside", "Flushing", "Whitestone", "Surrounding areas"],
  hours: [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "10:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "10:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  notices: [
    "Make Mom's Day Special With An Arrangement Of Beautiful Flowers!",
    "Shop local and save!",
    "Sympathy Flowers - SHOP NOW >",
    "Spring in your Step - SHOP NOW >",
    "SIGN UP FOR SPECIAL OFFERS!",
    "Save $5 everyday when you place your order online!",
    "Due to the increase of the cost of flowers some products may be impacted for Valentine's Day delivery dates.",
    "Due to the increase of the cost of flowers some products may be impacted for Mother's Day delivery dates.",
    "All items featured on this site represent the types of arrangements we offer and WILL VARY depending upon availability and requested delivery date.",
  ],
  promo: {
    code: "save05",
    text: "Take $5.00 off your purchase when you enter code save05",
  },
  delivery: {
    localFee: "$8.50",
    outsideLocalFee: "$12.95",
    pickup: "In-store pickup available",
    sameDay:
      "U.S. orders must be received before 1:00 PM in the recipient's time zone. Orders after that time delivered the following day.",
    timing:
      "Specific time-of-day requests: best effort, not guaranteed. No Sunday deliveries - delivered next business day. Rural route and cemetery deliveries cannot be guaranteed. International orders: call only, not accepted online.",
    holidayOrdering:
      "Place orders at least 2 days prior to: Thanksgiving, Christmas, New Year's, Valentine's Day, Easter, Administrative Professionals Week, Mother's Day, Memorial Day, Father's Day, Independence Day, Labor Day",
  },
  funeralHomes: ["Lloyd Funeral Home", "Thomas F. Dalton Funeral Home"],
  funeralHomeNote: "Others available by calling (718) 428-3166",
  substitution: [
    "Substitutions may occur due to flower availability",
    "Style, theme, and color scheme maintained with equal-value flowers",
    "Keepsake item substitutions possible during high demand",
    "Single-flower arrangements: every attempt to match type, may substitute color",
  ],
  paymentMethods: [
    "Visa",
    "MasterCard",
    "Discover Network",
    "American Express",
    "ApplePay",
    "PayPal",
    "Google Pay",
    "PazeWallet",
  ],
  navigation: {
    learnMore: ["About Us", "Safe Shopping", "Privacy", "Delivery", "Substitutions", "Site Map"],
    shop: ["Mother's Day", "Graduation", "Anniversary", "Birthday", "Get Well"],
  },
} as const

export const faqs = [
  {
    question: 'What makes an arrangement a "best seller"?',
    answer:
      "These are designs that consistently perform well-popular styles, versatile colors, and gift-ready presentations.",
  },
  {
    question: "Are best sellers good for last-minute gifting in Bayside?",
    answer:
      "Often yes. Delivery availability depends on date and demand; checkout shows the soonest available option.",
  },
  {
    question: "Can I customize a best-selling arrangement?",
    answer: "You can add notes at checkout. We'll do our best while keeping the overall style and value.",
  },
  {
    question: "Which best seller is safest if I don't know the recipient's preferences?",
    answer: "A bright mixed bouquet or soft pastel arrangement is usually a safe, cheerful choice.",
  },
] as const

export const homepageFaqQuestions = [
  "Do you offer same day flower delivery in Bayside NY?",
  "What are your delivery areas around Bayside NY?",
  "How can I order flowers for a special occasion in Bayside NY?",
  "What types of flowers are in season in Bayside NY?",
  "Can I customize my flower arrangement?",
  "Do you provide wedding and event floral services in Long Island NY?",
] as const

