import "./globals.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Navbar, Hero, Footer } from "@/components/index";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saung Angklung of San Francisco",
  description: "Learn about Angklung workshops, performances, and other events happening in San Francisco.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} bg-white text-black`}>
        <Navbar />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
