export interface Tour {
  id: number;
  title: string;
  duration: string;
  route: string;
  price: number;
  rating: number;
  badge?: string;
  imageSrc: string;
  departure: string;
  type: string;
  theme: string;
  accommodation: string;
  transport: string;
  season: string;
  level: string;
  description: string;
  video?: string; // url vidéo
  // Détails pour page détaillée
  overview: string;
  highlights: string[];
  datesAndPrices: string;
  itinerary: string[];
  extension: string;
  practicalInfo: string;
}

export const TOURS: Tour[] = [
  {
    id: 1,
    title: "Explore Madagascar",
    duration: "7 days",
    route: "Antananarivo → Nosy Be",
    price: 1500,
    rating: 4.8,
    badge: "Best Seller",
    imageSrc: "/images/madagascar.jpg",
    departure: "Every Monday",
    type: "Adventure",
    theme: "Wildlife",
    accommodation: "3-star hotels",
    transport: "Bus + Boat",
    season: "April - October",
    level: "Moderate",
    description: "A short description of the tour...",
    video: "/videos/madagascar.mp4",
    overview: "This is the full overview of the tour including all important info.",
    highlights: ["Visit lemur park", "Explore rainforests", "Beach relaxation"],
    datesAndPrices: "Next departures: April 10, May 5, June 12… Price per person: €1500",
    itinerary: [
      "Day 1: Arrival and orientation",
      "Day 2: Rainforest trekking",
      "Day 3: Cultural village visit",
      "... more days ..."
    ],
    extension: "Optional 3-day extension to Tsingy de Bemaraha.",
    practicalInfo: "Visa required, tropical climate, pack light clothes, bring insect repellent."
  }
  ,
  {
    id: 2,
    title: "Explore Madagascar",
    duration: "7 days",
    route: "Antananarivo → Nosy Be",
    price: 1500,
    rating: 4.8,
    badge: "Best Seller",
    imageSrc: "/images/madagascar.jpg",
    departure: "Every Monday",
    type: "Adventure",
    theme: "Wildlife",
    accommodation: "3-star hotels",
    transport: "Bus + Boat",
    season: "April - October",
    level: "Moderate",
    description: "A short description of the tour...",
    video: "/videos/madagascar.mp4",
    overview: "This is the full overview of the tour including all important info.",
    highlights: ["Visit lemur park", "Explore rainforests", "Beach relaxation"],
    datesAndPrices: "Next departures: April 10, May 5, June 12… Price per person: €1500",
    itinerary: [
      "Day 1: Arrival and orientation",
      "Day 2: Rainforest trekking",
      "Day 3: Cultural village visit",
      "... more days ..."
    ],
    extension: "Optional 3-day extension to Tsingy de Bemaraha.",
    practicalInfo: "Visa required, tropical climate, pack light clothes, bring insect repellent."
  },
  {
    id: 4,
    title: "Explore Madagascar",
    duration: "7 days",
    route: "Antananarivo → Nosy Be",
    price: 1500,
    rating: 4.8,
    badge: "Best Seller",
    imageSrc: "/images/madagascar.jpg",
    departure: "Every Monday",
    type: "Adventure",
    theme: "Wildlife",
    accommodation: "3-star hotels",
    transport: "Bus + Boat",
    season: "April - October",
    level: "Moderate",
    description: "A short description of the tour...",
    video: "/videos/madagascar.mp4",
    overview: "This is the full overview of the tour including all important info.",
    highlights: ["Visit lemur park", "Explore rainforests", "Beach relaxation"],
    datesAndPrices: "Next departures: April 10, May 5, June 12… Price per person: €1500",
    itinerary: [
      "Day 1: Arrival and orientation",
      "Day 2: Rainforest trekking",
      "Day 3: Cultural village visit",
      "... more days ..."
    ],
    extension: "Optional 3-day extension to Tsingy de Bemaraha.",
    practicalInfo: "Visa required, tropical climate, pack light clothes, bring insect repellent."
  },
  {
    id: 1,
    title: "Explore Madagascar",
    duration: "7 days",
    route: "Antananarivo → Nosy Be",
    price: 1500,
    rating: 4.8,
    badge: "Best Seller",
    imageSrc: "/images/madagascar.jpg",
    departure: "Every Monday",
    type: "Adventure",
    theme: "Wildlife",
    accommodation: "3-star hotels",
    transport: "Bus + Boat",
    season: "April - October",
    level: "Moderate",
    description: "A short description of the tour...",
    video: "/videos/madagascar.mp4",
    overview: "This is the full overview of the tour including all important info.",
    highlights: ["Visit lemur park", "Explore rainforests", "Beach relaxation"],
    datesAndPrices: "Next departures: April 10, May 5, June 12… Price per person: €1500",
    itinerary: [
      "Day 1: Arrival and orientation",
      "Day 2: Rainforest trekking",
      "Day 3: Cultural village visit",
      "... more days ..."
    ],
    extension: "Optional 3-day extension to Tsingy de Bemaraha.",
    practicalInfo: "Visa required, tropical climate, pack light clothes, bring insect repellent."
  },
  {
    id: 1,
    title: "Explore Madagascar",
    duration: "7 days",
    route: "Antananarivo → Nosy Be",
    price: 1500,
    rating: 4.8,
    badge: "Best Seller",
    imageSrc: "/images/madagascar.jpg",
    departure: "Every Monday",
    type: "Adventure",
    theme: "Wildlife",
    accommodation: "3-star hotels",
    transport: "Bus + Boat",
    season: "April - October",
    level: "Moderate",
    description: "A short description of the tour...",
    video: "/videos/madagascar.mp4",
    overview: "This is the full overview of the tour including all important info.",
    highlights: ["Visit lemur park", "Explore rainforests", "Beach relaxation"],
    datesAndPrices: "Next departures: April 10, May 5, June 12… Price per person: €1500",
    itinerary: [
      "Day 1: Arrival and orientation",
      "Day 2: Rainforest trekking",
      "Day 3: Cultural village visit",
      "... more days ..."
    ],
    extension: "Optional 3-day extension to Tsingy de Bemaraha.",
    practicalInfo: "Visa required, tropical climate, pack light clothes, bring insect repellent."
  },
  {
    id: 1,
    title: "Explore Madagascar",
    duration: "7 days",
    route: "Antananarivo → Nosy Be",
    price: 1500,
    rating: 4.8,
    badge: "Best Seller",
    imageSrc: "/images/madagascar.jpg",
    departure: "Every Monday",
    type: "Adventure",
    theme: "Wildlife",
    accommodation: "3-star hotels",
    transport: "Bus + Boat",
    season: "April - October",
    level: "Moderate",
    description: "A short description of the tour...",
    video: "/videos/madagascar.mp4",
    overview: "This is the full overview of the tour including all important info.",
    highlights: ["Visit lemur park", "Explore rainforests", "Beach relaxation"],
    datesAndPrices: "Next departures: April 10, May 5, June 12… Price per person: €1500",
    itinerary: [
      "Day 1: Arrival and orientation",
      "Day 2: Rainforest trekking",
      "Day 3: Cultural village visit",
      "... more days ..."
    ],
    extension: "Optional 3-day extension to Tsingy de Bemaraha.",
    practicalInfo: "Visa required, tropical climate, pack light clothes, bring insect repellent."
  },
  {
    id: 1,
    title: "Explore Madagascar",
    duration: "7 days",
    route: "Antananarivo → Nosy Be",
    price: 1500,
    rating: 4.8,
    badge: "Best Seller",
    imageSrc: "/images/madagascar.jpg",
    departure: "Every Monday",
    type: "Adventure",
    theme: "Wildlife",
    accommodation: "3-star hotels",
    transport: "Bus + Boat",
    season: "April - October",
    level: "Moderate",
    description: "A short description of the tour...",
    video: "/videos/madagascar.mp4",
    overview: "This is the full overview of the tour including all important info.",
    highlights: ["Visit lemur park", "Explore rainforests", "Beach relaxation"],
    datesAndPrices: "Next departures: April 10, May 5, June 12… Price per person: €1500",
    itinerary: [
      "Day 1: Arrival and orientation",
      "Day 2: Rainforest trekking",
      "Day 3: Cultural village visit",
      "... more days ..."
    ],
    extension: "Optional 3-day extension to Tsingy de Bemaraha.",
    practicalInfo: "Visa required, tropical climate, pack light clothes, bring insect repellent."
  },
  {
    id: 1,
    title: "Explore Madagascar",
    duration: "7 days",
    route: "Antananarivo → Nosy Be",
    price: 1500,
    rating: 4.8,
    badge: "Best Seller",
    imageSrc: "/images/madagascar.jpg",
    departure: "Every Monday",
    type: "Adventure",
    theme: "Wildlife",
    accommodation: "3-star hotels",
    transport: "Bus + Boat",
    season: "April - October",
    level: "Moderate",
    description: "A short description of the tour...",
    video: "/videos/madagascar.mp4",
    overview: "This is the full overview of the tour including all important info.",
    highlights: ["Visit lemur park", "Explore rainforests", "Beach relaxation"],
    datesAndPrices: "Next departures: April 10, May 5, June 12… Price per person: €1500",
    itinerary: [
      "Day 1: Arrival and orientation",
      "Day 2: Rainforest trekking",
      "Day 3: Cultural village visit",
      "... more days ..."
    ],
    extension: "Optional 3-day extension to Tsingy de Bemaraha.",
    practicalInfo: "Visa required, tropical climate, pack light clothes, bring insect repellent."
  },
  {
    id: 1,
    title: "Explore Madagascar",
    duration: "7 days",
    route: "Antananarivo → Nosy Be",
    price: 1500,
    rating: 4.8,
    badge: "Best Seller",
    imageSrc: "/images/madagascar.jpg",
    departure: "Every Monday",
    type: "Adventure",
    theme: "Wildlife",
    accommodation: "3-star hotels",
    transport: "Bus + Boat",
    season: "April - October",
    level: "Moderate",
    description: "A short description of the tour...",
    video: "/videos/madagascar.mp4",
    overview: "This is the full overview of the tour including all important info.",
    highlights: ["Visit lemur park", "Explore rainforests", "Beach relaxation"],
    datesAndPrices: "Next departures: April 10, May 5, June 12… Price per person: €1500",
    itinerary: [
      "Day 1: Arrival and orientation",
      "Day 2: Rainforest trekking",
      "Day 3: Cultural village visit",
      "... more days ..."
    ],
    extension: "Optional 3-day extension to Tsingy de Bemaraha.",
    practicalInfo: "Visa required, tropical climate, pack light clothes, bring insect repellent."
  },
  {
    id: 1,
    title: "Explore Madagascar",
    duration: "7 days",
    route: "Antananarivo → Nosy Be",
    price: 1500,
    rating: 4.8,
    badge: "Best Seller",
    imageSrc: "/images/madagascar.jpg",
    departure: "Every Monday",
    type: "Adventure",
    theme: "Wildlife",
    accommodation: "3-star hotels",
    transport: "Bus + Boat",
    season: "April - October",
    level: "Moderate",
    description: "A short description of the tour...",
    video: "/videos/madagascar.mp4",
    overview: "This is the full overview of the tour including all important info.",
    highlights: ["Visit lemur park", "Explore rainforests", "Beach relaxation"],
    datesAndPrices: "Next departures: April 10, May 5, June 12… Price per person: €1500",
    itinerary: [
      "Day 1: Arrival and orientation",
      "Day 2: Rainforest trekking",
      "Day 3: Cultural village visit",
      "... more days ..."
    ],
    extension: "Optional 3-day extension to Tsingy de Bemaraha.",
    practicalInfo: "Visa required, tropical climate, pack light clothes, bring insect repellent."
  }

  
  // Autres tours...
];