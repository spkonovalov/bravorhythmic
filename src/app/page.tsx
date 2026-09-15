import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const articles = [
  {
    id: "bravo-rhythmic-gymnastics-bay-area-guide",
    title: "The Ultimate Guide to Rhythmic Gymnastics in the Bay Area",
    excerpt: "Discover the best programs, competitive levels, and what to expect when enrolling your child in rhythmic gymnastics across Silicon Valley and the Bay Area.",
    date: "September 14, 2026",
    author: "Bravo Rhythmic Team",
    tags: ["Guides", "Local"],
    readTime: "8 min read"
  },
  {
    id: "how-to-choose-first-leotard",
    title: "How to Choose Your First Rhythmic Gymnastics Leotard",
    excerpt: "A practical guide for parents on selecting the right fabric, fit, and style for training and competitions without overspending.",
    date: "September 10, 2026",
    author: "Elena K.",
    tags: ["Lifehacks", "Equipment"],
    readTime: "5 min read"
  },
  {
    id: "balancing-school-and-competitive-sports",
    title: "Balancing School and Competitive Sports",
    excerpt: "Insights and opinions from our senior coaches on how elite gymnasts manage their time, homework, and rigorous training schedules effectively.",
    date: "September 5, 2026",
    author: "Maria I.",
    tags: ["Opinions", "Useful Info"],
    readTime: "6 min read"
  },
  {
    id: "stretching-safely-at-home",
    title: "Stretching Safely at Home: Tips for Beginners",
    excerpt: "Learn the fundamental rules of safe stretching. What exercises you can do at home to improve flexibility, and what should be left for the gym.",
    date: "August 28, 2026",
    author: "Bravo Rhythmic Team",
    tags: ["Guides", "Useful Info"],
    readTime: "7 min read"
  },
  {
    id: "understanding-rg-apparatus",
    title: "Understanding Rhythmic Gymnastics Apparatus",
    excerpt: "Ribbon, hoop, ball, clubs, and rope. A quick introduction to the five apparatuses used in rhythmic gymnastics and when athletes start using them.",
    date: "August 20, 2026",
    author: "Bravo Rhythmic Team",
    tags: ["Useful Info"],
    readTime: "4 min read"
  },
  {
    id: "commute-calculator",
    title: "Plan Your Visit: Commute Calculator",
    excerpt: "Use our new interactive tool to estimate your driving time to Bravo Redwood City or Santa Clara during afternoon traffic.",
    date: "August 15, 2026",
    author: "Product Team",
    tags: ["Tools", "Interactive"],
    readTime: "Tool",
    isTool: true
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans text-bravo-dark">
      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12 border-b border-bravo-purple/20 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight text-bravo-purple">
            Bravo Rhythmic <span className="text-zinc-400 font-normal">Learn</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-600">
            <Link href="/" className="hover:text-bravo-purple transition-colors">All Articles</Link>
            <Link href="/commute-calculator" className="hover:text-bravo-purple transition-colors">Commute Calculator</Link>
            <a href="https://bravorhythmic.com" className="hover:text-bravo-purple transition-colors">Main Site</a>
          </nav>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="w-full bg-bravo-light/30 py-16 px-6 md:px-12 border-b border-bravo-purple/10">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-6">
          <Badge variant="outline" className="border-bravo-purple text-bravo-purple bg-white px-3 py-1 text-sm rounded-full">
            Knowledge Base
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Everything you need to know about Rhythmic Gymnastics.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-bravo-dark/70 max-w-2xl">
            Discover guides, lifehacks, professional opinions, and useful tools for gymnastics parents and athletes.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <main className="flex-1 w-full max-w-7xl mx-auto py-16 px-6 md:px-12">
        <div className="flex justify-between items-end mb-8">
          <h3 className="text-2xl font-bold">Latest Articles</h3>
          <div className="hidden sm:flex gap-2">
            {["Guides", "Lifehacks", "Opinions", "Useful Info"].map(tag => (
              <Badge key={tag} variant="secondary" className="bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-100 cursor-pointer">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="flex flex-col overflow-hidden border-zinc-200 hover:shadow-md transition-shadow group bg-white">
              <CardHeader className="pb-4">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {article.tags.map(tag => (
                    <Badge key={tag} className="bg-bravo-purple/10 text-bravo-purple hover:bg-bravo-purple/20 border-none">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-2xl leading-tight group-hover:text-bravo-purple transition-colors">
                  <Link href={article.isTool ? `/${article.id}` : `/articles/${article.id}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {article.title}
                  </Link>
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-zinc-500 mt-2">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-zinc-600 leading-relaxed">
                  {article.excerpt}
                </p>
              </CardContent>
              <CardFooter className="pt-4 pb-6 border-t border-zinc-100 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-bravo-purple/20 flex items-center justify-center text-bravo-purple font-bold text-xs">
                    {article.author.charAt(0)}
                  </div>
                  <span className="text-sm font-medium">{article.author}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-bravo-purple hover:text-bravo-purple hover:bg-bravo-purple/10 font-semibold z-10 relative">
                  {article.isTool ? "Try Tool →" : "Read →"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-12 px-6 border-t border-zinc-200 bg-white mt-auto">
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
