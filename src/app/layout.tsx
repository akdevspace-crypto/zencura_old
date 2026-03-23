import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const lorestta = localFont({
  src: "../../public/font/Lorestta.ttf",
  variable: "--font-lorestta",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Zencura | Future of Preventive Health",
  description: "Zencura advances healthcare from reactive treatment to conscious, preventive living. A premium traditional wellness institution rooted in heritage.",
  openGraph: {
    title: "Zencura | Future of Preventive Health",
    description: "Architecting a civilization where health is the natural standard. Rooted in tradition, building for the future.",
    url: "https://zencura.com",
    siteName: "Zencura",
    images: [
      {
        url: "/og-image.jpg", // Placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zencura | Future of Preventive Health",
    description: "Deeply rooted heritage wellness for a conscious future.",
  },
};

import SmoothScroll from '@/components/layout/SmoothScroll';

import { HeritageBackground } from '@/components/ui/HeritageOrnaments';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${sourceSerif.variable} ${lorestta.variable} antialiased selection:bg-primary/20 selection:text-primary min-h-screen bg-bg text-primary linen-texture`}
      >
        <HeritageBackground />
        <SmoothScroll>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}


