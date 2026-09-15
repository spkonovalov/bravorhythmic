import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bravo-light/20 font-sans text-bravo-dark">
      <header className="w-full py-6 px-8 border-b border-bravo-purple/20 bg-white">
        <h1 className="text-2xl font-bold tracking-tight text-bravo-purple">
          Bravo Rhythmic
        </h1>
      </header>
      
      <main className="flex-1 w-full max-w-4xl mx-auto py-16 px-6">
        <div className="flex flex-col items-start gap-6">
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-bravo-purple/10 text-bravo-purple">
            Blog & Learn
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome to the Knowledge Base
          </h2>
          <p className="text-lg leading-relaxed text-bravo-dark/70 max-w-2xl">
            This section is under development. Here we will publish useful materials, articles, and guides from Bravo Rhythmic club.
          </p>
          
          <div className="flex gap-4 mt-8">
            <Link href="/articles">
              <Button className="bg-bravo-purple hover:bg-bravo-purple/90 text-white rounded-full px-8 h-12 text-base">
                Read Articles
              </Button>
            </Link>
            <Button variant="outline" className="border-bravo-purple text-bravo-purple hover:bg-bravo-purple/10 rounded-full px-8 h-12 text-base">
              Back to Main Site
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="w-full py-8 text-center text-sm text-bravo-dark/50 border-t border-bravo-purple/10 bg-white mt-auto">
        © {new Date().getFullYear()} Bravo Rhythmic. All rights reserved.
      </footer>
    </div>
  );
}
