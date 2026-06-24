import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miguel Dizo — Composer & Music Producer",
  description:
    "Cinematic scores and immersive soundscapes for film, TV, and video games.",
  openGraph: {
    title: "Miguel Dizo — Composer & Music Producer",
    description:
      "Cinematic scores and immersive soundscapes for film, TV, and video games.",
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
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full bg-dark text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
