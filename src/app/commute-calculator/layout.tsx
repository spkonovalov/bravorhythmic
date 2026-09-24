import type { Metadata } from "next";

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Gymnastics Commute Calculator | Bravo Rhythmic",
  description: "Calculate driving times from your home to our rhythmic gymnastics locations in Redwood City and Santa Clara. Find the best class schedule for your commute.",
  path: "/commute-calculator"
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
