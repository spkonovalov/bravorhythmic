import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const metadata = {
  title: "The Ultimate Guide to Rhythmic Gymnastics in the Bay Area | Bravo Rhythmic",
  description: "Discover the best programs, competitive levels, and what to expect when enrolling your child in rhythmic gymnastics across Silicon Valley and the Bay Area.",
};

export default function ArticlePage() {
  const filePath = path.join(process.cwd(), "articles", "bravo-rhythmic-gymnastics-bay-area-guide.md");
  let content = "";
  try {
    content = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    content = "Article not found.";
  }

  // Remove the h1 from the markdown content as we will render it explicitly 
  // or let react-markdown handle it. Let's let react-markdown handle it, 
  // but apply tailwind typography styles.

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-bravo-dark">
      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12 border-b border-bravo-purple/20 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/Bravo_1.svg" alt="Bravo Rhythmic Gymnastics Logo" width={32} height={32} className="h-8 w-auto" />
            <span className="text-xl md:text-2xl font-bold tracking-tight text-bravo-purple">
              Bravo Rhythmic Gymnastics
            </span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-600">
            <Link href="/" className="hover:text-bravo-purple transition-colors">All Articles</Link>
            <Link href="/commute-calculator" className="hover:text-bravo-purple transition-colors">Commute Calculator</Link>
          </nav>
        </div>
      </header>
      
      {/* Article Content */}
      <main className="flex-1 w-full max-w-3xl mx-auto py-16 px-6">
        <div className="mb-8">
          <Link href="/" className="text-sm text-bravo-purple font-medium hover:underline mb-8 inline-block">
            ← Back to all articles
          </Link>
          <div className="flex gap-2 mb-6">
            <span className="bg-bravo-purple/10 text-bravo-purple text-xs font-semibold px-2 py-1 rounded-full">Guides</span>
            <span className="bg-bravo-purple/10 text-bravo-purple text-xs font-semibold px-2 py-1 rounded-full">Local</span>
          </div>
          <p className="text-zinc-500 text-sm">Published on September 14, 2026 · By Bravo Rhythmic Team</p>
        </div>

        <article className="prose prose-zinc lg:prose-lg max-w-none prose-headings:text-bravo-dark prose-a:text-bravo-purple hover:prose-a:text-bravo-purple/80 prose-a:no-underline hover:prose-a:underline">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </article>
        
        <div className="mt-16 pt-8 border-t border-zinc-200">
          <h4 className="font-bold text-lg mb-4">Share this guide</h4>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 rounded-full text-sm font-medium transition-colors">
              Copy Link
            </button>
            <Link href="/commute-calculator" className="px-4 py-2 bg-bravo-purple text-white hover:bg-bravo-purple/90 rounded-full text-sm font-medium transition-colors">
              Try the Commute Calculator
            </Link>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-12 px-6 border-t border-zinc-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-bravo-dark font-bold text-lg">Bravo Rhythmic</div>
          <div className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Bravo Rhythmic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
