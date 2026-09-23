import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://learn.bravorhythmic.com"),
  title: {
    template: "%s | Bravo Rhythmic",
    default: "Rhythmic Gymnastics Blog & Parents Guide | Bravo",
  },
  description: "Explore our rhythmic gymnastics blog for parents and beginners. Discover guides on leotards, equipment, and kids gymnastics classes. Read more!",
};

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-US"
      className={`${roboto.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
