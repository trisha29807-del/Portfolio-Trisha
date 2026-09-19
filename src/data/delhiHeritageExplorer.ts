export const dheHero = {
  label: "Project 03",
  category: "Web / Hackathon",
  title: "Delhi Heritage Explorer",
  description:
    "An AI-powered web platform for discovering Delhi's cultural heritage through exploration, contextual place details, an AI heritage guide, personalized trails, quizzes, and local artisan discovery.",
  meta: [
    { label: "Role", value: "Team Project" },
    { label: "Context", value: "Delhi AI Grind 2026" },
    { label: "Achievement", value: "Top 50 Finalist" },
  ],
  stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Gemini"],
  liveUrl: "https://delhi-heritage-explorer.vercel.app",
  githubUrl: "https://github.com/trisha29807-del/delhi-heritage-explorer",
};

export const team = [
  "Trisha",
  "Yashika Singh",
  "Suhani Gupta",
  "Tushti Arora",
  "Shruti Sharma",
];

export const challenge = {
  statement: "Delhi's heritage is everywhere. Discovering it shouldn't feel fragmented.",
  body:
    "Delhi's tourism, cultural heritage, and food ecosystems largely operate in silos — leading to underutilized heritage sites, inefficient food discovery, low youth engagement, and a lack of data-driven, personalized tourism experiences.",
  pillars: ["Heritage Sites", "Food Culture", "Local Participation"],
};

export const idea = {
  body:
    "Instead of another static list of monuments and dates, we wanted Delhi's history to feel explorable — something users could browse, ask questions about, learn through, personalize into a trail, and connect with beyond monuments.",
  pillars: ["Explore", "Ask", "Personalize", "Learn", "Connect"],
};

export interface HeritageSpot {
  name: string;
  category: string;
  metro: string;
}

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
  body:
    "The Explore screen turns heritage into a browsable directory. Users can search by name and filter across Mughal Era, Colonial, Ancient, Food Heritage, and Living Culture, then open an individual place for richer context.",
  points: [
    "Search monuments, food streets, and cultural places",
    "Filter by historical and cultural categories",
    "Open a place for contextual and practical details",
  ],
};

export const heritageDetail = {
  body:
    "A selected destination moves from browsing into context, combining a short historical description with its era, nearby metro information, nearby food, a listen-story action, and directions.",
  points: [
    "Historical context and era",
    "Nearest Metro information",
    "Nearby food discovery",
    "Listen Story and Get Directions actions",
  ],
};

export const aiGuide = {
  body:
    "The AI Heritage Guide adds a conversational layer to the experience. Users can ask about Delhi's monuments, history, food streets, or possible heritage walks, with English, Hindi, and Punjabi available through the language selector.",
  features: [
    { title: "Ask", description: "Ask open-ended questions about Delhi's heritage and history." },
    { title: "Learn", description: "Get contextual answers through the app's heritage assistant." },
    { title: "Choose a Language", description: "Switch between English, Hindi, and Punjabi." },
  ],
};

export const personalize = {
  body:
    "Two experiences make discovery feel more personal: a knowledge quiz with progress and badges, and a smart recommendation flow that starts by asking where the user wants to explore.",
  quiz: {
    title: "Heritage Quiz",
    description:
      "An 11-question heritage quiz with scoring, a streak counter, XP, and achievement badges such as Mughal Expert, Street Food Scholar, Architecture Buff, and Delhi Explorer.",
  },
  recommendations: {
    title: "Smart Recommendations",
    description:
      "The recommendation flow lets users choose an area — Old Delhi, Central Delhi, South Delhi, or Surprise Me — before generating a personalized heritage trail.",
  },
};

export const artisanConnect = {
  body:
    "The experience extends beyond monuments into living culture through a directory of local Delhi artisans and craftspeople across categories such as textile arts, pottery and stone, jewellery, calligraphy, woodwork, and culinary arts.",
  note:
    "The current product presents artisan profiles with specialties, ratings, locations, and a front-end booking interaction.",
};

export const underTheHood = {
  layers: [
    { label: "Frontend", value: "React + TypeScript + Vite" },
    { label: "Styling", value: "Tailwind CSS + shadcn/ui" },
    { label: "Backend / Data", value: "Supabase (edge functions)" },
    { label: "AI", value: "Gemini via Supabase edge functions" },
  ],
  detail:
    "The AI layer is wired through Supabase edge functions: heritage-chat handles the guide experience and heritage-recommend generates structured itinerary data from a user's stated preferences. The portfolio presents the architecture without exposing implementation secrets.",
};

export const hackathon = {
  event: "Delhi AI Grind 2026",
  result: "Top 50 Finalist",
  body:
    "Delhi Heritage Explorer was built as our submission for the Delhi AI Grind hackathon at IGDTUW, where our team of five reached the Top 50 finalists.",
};

export const whatILearned = [
  "Narrowing a broad hackathon brief around tourism, food, and culture into a product we could actually finish.",
  "Wiring a real AI backend through Supabase edge functions rather than treating the AI layer as a visual mockup.",
  "Being honest about the gap between a hackathon pitch and what can realistically be implemented within the available time.",
];

export const futureEnhancements = [
  "AR-based monument exploration",
  "Voice-enabled AI guide",
  "Heritage route planner",
  "User accounts with saved journeys",
];

export const dheScreens = {
  home: {
    src: "/dhe-screens/home.jpg",
    label: "01 · HOME",
    title: "A single entry point into Delhi's heritage",
    caption:
      "The home experience brings exploration, the AI guide, quizzes, and personalized discovery together instead of splitting them across unrelated flows.",
  },
  explore: {
    src: "/dhe-screens/explore.jpg",
    label: "02 · EXPLORE",
    title: "A visual directory for discovering Delhi",
    caption:
      "Search and category filters turn a large cultural landscape into a browsable experience spanning historical eras, food heritage, and living culture.",
  },
  detail: {
    src: "/dhe-screens/detail.jpg",
    label: "03 · PLACE DETAIL",
    title: "From discovery to context",
    caption:
      "A selected place combines historical context with practical information such as the nearest Metro station, nearby food, listening, and directions.",
  },
  guide: {
    src: "/dhe-screens/guide.jpg",
    label: "04 · AI GUIDE",
    title: "Ask Delhi anything",
    caption:
      "The conversational guide gives users a natural way to ask about monuments, history, food streets, or possible heritage walks, with English, Hindi, and Punjabi available.",
  },
  recommendations: {
    src: "/dhe-screens/recommendations.jpg",
    label: "05 · SMART RECOMMENDATIONS",
    title: "Personalized trails, not just places",
    caption:
      "Users can choose an area or let the experience surprise them before generating a personalized heritage trail.",
  },
  quiz: {
    src: "/dhe-screens/quiz.jpg",
    label: "06 · HERITAGE QUIZ",
    title: "Turn heritage into something you can play with",
    caption:
      "Daily challenges, XP, and badges add a lightweight learning loop to cultural discovery.",
  },
  artisans: {
    src: "/dhe-screens/artisans.jpg",
    label: "07 · ARTISAN CONNECT",
    title: "Heritage doesn't end at monuments",
    caption:
      "The product extends discovery into living culture through local artisans, craft categories, specialties, ratings, and locations.",
  },
};
