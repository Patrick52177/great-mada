import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Great Madagascar Tours | Local Tour Operator & Car Rental",
  description: "Discover Madagascar with GMT+3, the leading local tour operator. Group tours, tailor-made adventures, day trips and big deals. Feel free... wherever you are!",
  keywords: "Madagascar tours, Madagascar travel, tour operator Madagascar, lemur tour, Tsingy, Andasibe, Nosy Be",
  openGraph: {
    title: "Great Madagascar Tours | GMT+3",
    description: "Explore Madagascar's unique wildlife with the leading local tour operator. 214 TripAdvisor reviews.",
    type: "website",
    locale: "en_US",
    siteName: "Great Madagascar Tours",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.great-madagascar-tours.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Great Madagascar Tours GMT+3",
          url: "https://www.great-madagascar-tours.com",
          telephone: "+261 020 79 797 18",
          address: { "@type": "PostalAddress", streetAddress: "Lot II B 37 BIS - West Ampandrana", addressLocality: "Antananarivo", addressCountry: "MG" },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4", reviewCount: "214", bestRating: "5" },
        })}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
