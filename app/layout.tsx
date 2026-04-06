import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "greek"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aegean Lotus Sea View Apartments | Heraklion, Crete",
  description:
    "Stylish sea view apartments in the heart of Heraklion Old Town, Crete. Direct sea views, modern comforts, and steps from historic landmarks. Book direct for the best rates.",
  keywords: [
    "Heraklion apartments",
    "Crete accommodation",
    "sea view apartments",
    "Aegean Lotus",
    "Heraklion Old Town",
    "holiday rental Crete",
  ],
  openGraph: {
    title: "Aegean Lotus Sea View Apartments | Heraklion, Crete",
    description:
      "Stylish sea view apartments in the heart of Heraklion Old Town. Book direct for the best rates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
