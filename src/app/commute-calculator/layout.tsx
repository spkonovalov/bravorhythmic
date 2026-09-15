import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commute Calculator",
  description: "Calculate driving times to our rhythmic gymnastics locations.",
  alternates: {
    canonical: "/commute-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
