import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, Hero, EventCard } from "@/components/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "House of Angklung SF",
  description: "Learn about Angklung workshops, performances, and education in San Francisco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black`}>
        <Navbar />
        <Hero />
        <EventCard
          title="Angklung Performance with Maestro Sam Udjo"
          date="July 18, 2025"
          location="San Francisco"
          description="Join us for a magical night of music with Maestro Sam Udjo visiting from Indonesia. This educational performance will feature traditional Angklung music, cultural storytelling, and community engagement."
          imageUrl="/placeholder.jpg"
        />
        {children}
      </body>
    </html>
  );
}
