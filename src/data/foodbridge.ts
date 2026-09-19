export const foodbridgeHero = {
  label: "Project 04",
  title: "FoodBridge",
  subtitle: "Turning surplus into something useful.",
  description:
    "FoodBridge is a real-time Android platform that connects surplus food donors with NGOs, orphanages, and individuals, making it easier to donate, discover, and claim available food.",
  badges: ["Android", "Kotlin", "Firebase"],
  githubUrl: "https://github.com/trisha29807-del/FOOD-BRIDGE-CONNECT",
};

// Key statistics as stated in the project's own problem-statement documentation —
// cited as the documented motivation for the app, not as FoodBridge's achieved impact.
export const problem = {
  realityPoints: [
    "40% of food produced in India is wasted every year.",
    "Over 80 crore people face food insecurity daily.",
    "No real-time, centralized system connects surplus food with those who need it.",
    "Food goes to landfills while people sleep hungry.",
  ],
  solutionPoints: [
    "Donate easily",
    "Discover instantly",
    "Request & claim seamlessly",
    "Reduce waste. Serve more.",
  ],
};

export interface WorkflowStep {
  number: string;
  label: string;
  description: string;
}

export const workflow: WorkflowStep[] = [
  {
    number: "01",
    label: "Sign Up",
    description: "Create an account and choose a role — Donor, NGO/Orphanage, or Buyer.",
  },
  {
    number: "02",
    label: "Donate / List",
    description: "Donors post surplus food with type, quantity, pickup location, and expiry.",
  },
  {
    number: "03",
    label: "Browse",
    description: "Listings appear in real time; users filter by food type or search by name and location.",
  },
  {
    number: "04",
    label: "Request / Claim",
    description: "A single tap claims a listing — donors can't claim their own posts.",
  },
  {
    number: "05",
    label: "Communicate",
    description: "Built-in chat lets donors and recipients coordinate pickup directly.",
  },
  {
    number: "06",
    label: "Order / Track",
    description: "Orders are tracked through to completion and marked received once collected.",
  },
];

export interface UserRole {
  name: string;
  description: string;
}

export const roles: UserRole[] = [
  {
    name: "Donor / Seller",
    description:
      "Restaurants, hotels, caterers, event organizers, canteens, and households looking for a quick way to list surplus food instead of throwing it away.",
  },
  {
    name: "NGO / Orphanage",
    description:
      "Non-profits, orphanages, old-age homes, and community kitchens that need a reliable, real-time source of free food donations.",
  },
  {
    name: "Buyer",
    description:
      "Budget-conscious individuals, small food businesses, and community groups seeking discounted surplus food that would otherwise be wasted.",
  },
];

export interface AppScreen {
  number: string;
  label: string;
  caption: string;
  image: string;
}

// image is filled in by the component (imported assets) — kept as a key here
export const appScreens = [
  { number: "01", label: "Discover", caption: "Browse available food and filter listings.", key: "browse" },
  { number: "02", label: "Donate", caption: "Create a food listing with relevant details.", key: "donate" },
  { number: "03", label: "Order", caption: "Review and manage selected food in the cart.", key: "cart" },
  { number: "04", label: "Connect", caption: "Communicate directly with donors and recipients.", key: "chat" },
  { number: "05", label: "Track", caption: "Follow orders through to pickup and completion.", key: "orders" },
] as const;

export const underTheHood = {
  pipeline: ["Android App (Kotlin)", "Firebase Authentication", "Cloud Firestore", "Real-Time Data"],
  // Verified directly from a Firestore console screenshot in the project documentation.
  collections: [
    { name: "food_listings", description: "Real-time surplus food postings" },
    { name: "food_requests", description: "Requests posted by users in need" },
    { name: "fulfillments", description: "Records of fulfilled requests" },
    { name: "orders", description: "Claimed listings, tracked to pickup" },
    { name: "users", description: "Profiles, roles, and account info" },
    { name: "notifications", description: "Real-time listing and order alerts" },
    { name: "chats", description: "Messaging between donors and recipients" },
  ],
};

export interface Feature {
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    title: "Real-Time Listings",
    description: "New food listings appear instantly for every user via Firestore's live queries.",
  },
  {
    title: "Search & Filter",
    description: "Chip filters and a live search bar narrow listings by type, name, or location.",
  },
  {
    title: "Role-Based Access",
    description: "Sign-up assigns a Donor, NGO/Orphanage, or Buyer role that shapes the experience.",
  },
  {
    title: "Claim & Track Orders",
    description: "One-tap claiming, with orders tracked from confirmation through pickup.",
  },
  {
    title: "In-App Chat",
    description: "Donors and recipients message each other directly to coordinate handoffs.",
  },
  {
    title: "Food Safety Guidance",
    description: "A dedicated FSSAI screen links out to official food-safety guidelines.",
  },
];

export const techStack = [
  "Kotlin",
  "Android SDK",
  "Firebase Authentication",
  "Cloud Firestore",
  "Firebase Storage",
  "Material Design",
  "RecyclerView",
  "Kotlin Coroutines",
];
