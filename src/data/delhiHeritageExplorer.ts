export const dheHero = {
  label: "Project 02",
  category: "Web / Hackathon",
  title: "Delhi Heritage Explorer",
  description:
    "A web platform for discovering Delhi's cultural heritage through an interactive heritage directory, an AI guide, a knowledge quiz, and personalized itinerary recommendations.",
  meta: [
    { label: "Role", value: "Team Project" },
    { label: "Context", value: "Delhi AI Grind 2026" },
    { label: "Achievement", value: "Top 50 Finalist" },
  ],
  stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
  liveUrl: "https://delhi-heritage-explorer.vercel.app",
  githubUrl: "https://github.com/trisha29807-del/delhi-heritage-explorer",
};

export const team = ["Trisha", "Yashika Singh", "Suhani Gupta", "Tushti Arora", "Shruti Sharma"];

export const challenge = {
  statement: "Delhi's heritage is everywhere. Discovering it shouldn't feel fragmented.",
  body: "Delhi's tourism, cultural heritage, and food ecosystems largely operate in silos — leading to underutilized heritage sites, inefficient food discovery, low youth engagement, and a lack of data-driven, personalized tourism experiences.",
  pillars: ["Heritage Sites", "Food Culture", "Local Participation"],
};

export const idea = {
  body: "Instead of another static list of monuments and dates, we wanted Delhi's history to feel explorable — a place you could browse by category, ask questions of, test your knowledge against, and get a personalized plan from, rather than just read about.",
  pillars: ["Explore", "Learn", "Personalize"],
};

export interface HeritageSpot {
  name: string;
  category: string;
  metro: string;
}

// Exactly the 12 spots defined in src/data/heritageSpots.ts — the app's own
// homepage copy says "30+ Heritage Sites," which the actual dataset doesn't
// support, so that number is not repeated here.
export const heritageSpots: HeritageSpot[] = [
  { name: "Red Fort", category: "Mughal", metro: "Lal Qila · Violet Line" },
  { name: "Qutub Minar", category: "Ancient", metro: "Qutub Minar · Yellow Line" },
  { name: "Humayun's Tomb", category: "Mughal", metro: "JLN Stadium · Violet Line" },
  { name: "India Gate", category: "Colonial", metro: "Central Secretariat · Yellow/Violet" },
  { name: "Jama Masjid", category: "Mughal", metro: "Jama Masjid · Violet Line" },
  { name: "Chandni Chowk", category: "Culture", metro: "Chandni Chowk · Yellow Line" },
  { name: "Paranthe Wali Gali", category: "Food", metro: "Chandni Chowk · Yellow Line" },
  { name: "Lodhi Gardens", category: "Ancient", metro: "Jor Bagh · Yellow Line" },
  { name: "Rashtrapati Bhavan", category: "Colonial", metro: "Central Secretariat" },
  { name: "Akshardham Temple", category: "Culture", metro: "Akshardham · Blue Line" },
  { name: "Lotus Temple", category: "Culture", metro: "Kalkaji Mandir · Violet Line" },
  { name: "Hauz Khas Village", category: "Ancient", metro: "Hauz Khas · Yellow/Magenta" },
];

export const exploreDelhi = {
  body: "Rather than a literal GPS map, the Explore screen is a filterable, category-based directory of heritage spots — Mughal, Ancient, Colonial, Culture, and Food — with a search bar and a card for each location. Tapping a spot opens a detail sheet with a description, category tag, and its nearest Delhi Metro station.",
  points: [
    "Browse and search heritage spots by name or category",
    "Filter by five categories: Mughal, Ancient, Colonial, Culture, Food",
    "View nearest-metro details for each location",
  ],
};

export const aiGuide = {
  body: "The AI Heritage Guide is a real chat interface backed by a Supabase edge function that calls Google's Gemini model. Users can ask questions about Delhi's monuments, history, and culture and get grounded, contextual answers — including in Hindi and Punjabi, via a language selector that's passed through to the model.",
  features: [
    { title: "Ask", description: "Ask open-ended questions about Delhi's heritage and history." },
    { title: "Learn", description: "Get contextual answers grounded in the app's heritage data." },
    { title: "Choose a Language", description: "Switch between English, Hindi, and Punjabi." },
  ],
};

export const personalize = {
  body: "Beyond the directory, two features make the experience feel personal rather than static: a knowledge quiz, and an AI-generated recommendation flow.",
  quiz: {
    title: "Heritage Quiz",
    description:
      "An 11-question quiz on Delhi's monuments and history, with scoring and a streak counter. Scoring 90% or higher unlocks a Quiz Champion badge.",
  },
  recommendations: {
    title: "Smart Recommendations",
    description:
      "Tell it how much time you have, your interests, and a preferred area, and a Gemini-backed edge function generates a personalized itinerary — a named plan with ordered stops, tips, and an estimated cost.",
  },
};

export const artisanConnect = {
  body: "A directory of local Delhi artisans and craftspeople — around 15, spanning crafts like Zardozi embroidery and block printing — each with a bio, specialty, and rating. Selecting a time slot shows a booking confirmation in the app.",
  note: "This booking flow is a working front-end demo — slot selection isn't yet persisted to a backend, so it confirms in the moment rather than creating a stored booking.",
};

export const underTheHood = {
  layers: [
    { label: "Frontend", value: "React + TypeScript + Vite" },
    { label: "Styling", value: "Tailwind CSS + shadcn/ui" },
    { label: "Backend / Data", value: "Supabase (edge functions)" },
    { label: "AI", value: "Gemini, via Supabase edge functions" },
  ],
  detail:
    "Two Supabase edge functions do the real work: heritage-chat streams Gemini responses for the AI guide, and heritage-recommend calls Gemini to generate a structured JSON itinerary from a user's stated time, interests, and area. Both call Gemini through Lovable's AI gateway rather than a direct API key in the client.",
};

export const hackathon = {
  event: "Delhi AI Grind 2026",
  result: "Top 50 Finalist",
  body: "Delhi Heritage Explorer was built as our submission for the Delhi AI Grind hackathon at IGDTUW, where our team of five reached the Top 50 finalists.",
};

export const whatILearned = [
  "Narrowing a broad hackathon brief (tourism + food + culture, all at once) down to one product we could actually finish.",
  "Wiring a real AI backend — two working Supabase edge functions calling Gemini — rather than mocking the AI layer.",
  "Being honest, in hindsight, about the gap between a hackathon pitch and what's actually implemented in the time available.",
];

export const futureEnhancements = [
  "AR-based monument exploration",
  "Voice-enabled AI guide",
  "Heritage route planner",
  "User accounts with saved journeys",
];
