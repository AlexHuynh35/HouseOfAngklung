import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, Hero, Footer } from "@/components/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angklung House of San Francisco",
  description: "Learn about Angklung workshops, performances, and other events happening in San Francisco.",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
