"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const articles = [
  {
    id: "bravo-rhythmic-gymnastics-bay-area-guide",
    title: "How to Choose a Rhythmic Gymnastics Club in the Bay Area",
    excerpt: "Finding the right rhythmic gymnastics class means finding a place where your child wants to learn—and a routine your family can maintain.",
    date: "September 14, 2026",
    author: "Bravo Rhythmic Team",
    tags: ["Guides", "Local"],
    readTime: "8 min read",
    isPublished: true
  },
  {
    id: "how-to-choose-first-leotard",
    title: "How to Choose Your First Rhythmic Gymnastics Leotard",
    excerpt: "A practical guide for parents on selecting the right fabric, fit, and style for training and competitions without overspending.",
    date: "September 10, 2026",
    author: "Elena K.",
    tags: ["Lifehacks", "Equipment"],
    readTime: "5 min read",
    isPublished: false
  },
  {
    id: "balancing-school-and-competitive-sports",
    title: "Balancing School and Competitive Sports",
    excerpt: "Insights and opinions from our senior coaches on how elite gymnasts manage their time, homework, and rigorous training schedules effectively.",
    date: "September 5, 2026",
    author: "Maria I.",
    tags: ["Opinions", "Useful Info"],
    readTime: "6 min read",
    isPublished: false
  },
  {
    id: "stretching-safely-at-home",
    title: "Stretching Safely at Home: Tips for Beginners",
    excerpt: "Learn the fundamental rules of safe stretching. What exercises you can do at home to improve flexibility, and what should be left for the gym.",
    date: "August 28, 2026",
    author: "Bravo Rhythmic Team",
    tags: ["Guides", "Useful Info"],
    readTime: "7 min read",
    isPublished: false
  },
  {
    id: "understanding-rg-apparatus",
    title: "Understanding Rhythmic Gymnastics Apparatus",
    excerpt: "Ribbon, hoop, ball, clubs, and rope. A quick introduction to the five apparatuses used in rhythmic gymnastics and when athletes start using them.",
    date: "August 20, 2026",
    author: "Bravo Rhythmic Team",
    tags: ["Useful Info"],
    readTime: "4 min read",
    isPublished: false
  }
];

const availableTags = ["Guides", "Lifehacks", "Opinions", "Useful Info"];

export default function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredArticles = selectedTag 
    ? articles.filter(article => article.tags.includes(selectedTag))
    : articles;

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans text-bravo-dark">
      
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
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-8 gap-4">
          <h3 className="text-2xl font-bold">Latest Articles</h3>
          <div className="flex flex-wrap gap-2">
            {availableTags.map(tag => (
              <Badge 
                key={tag} 
                variant="secondary" 
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={cn(
                  "cursor-pointer transition-colors border",
                  selectedTag === tag 
                    ? "bg-bravo-purple text-white border-bravo-purple hover:bg-bravo-purple/90" 
                    : "bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-100"
                )}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="relative flex flex-col overflow-hidden border-zinc-200 hover:shadow-md transition-shadow group bg-white">
              <CardHeader className="pb-4">
                <div className="flex gap-2 mb-3 flex-wrap">
                  {article.tags.map(tag => (
                    <Badge key={tag} className="bg-bravo-purple/10 text-bravo-purple hover:bg-bravo-purple/20 border-none relative z-10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className={cn("text-2xl leading-tight transition-colors", article.isPublished ? "group-hover:text-bravo-purple" : "text-zinc-400")}>
                  {article.isPublished ? (
                    <Link href={`/articles/${article.id}`} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {article.title}
                    </Link>
                  ) : (
                    <span>{article.title}</span>
                  )}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-zinc-500 mt-2 h-5">
                  {article.isPublished && (
                    <>
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-zinc-600 leading-relaxed">
                  {article.excerpt}
                </p>
              </CardContent>
              <CardFooter className="pt-4 pb-6 border-t border-zinc-100 flex justify-between items-center min-h-[72px]">
                {article.isPublished ? (
                  <>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-bravo-purple/20 flex items-center justify-center text-bravo-purple font-bold text-xs">
                        {article.author.charAt(0)}
                      </div>
                      <span className="text-sm font-medium">{article.author}</span>
                    </div>
                    <Link 
                      href={`/articles/${article.id}`} 
                      className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-bravo-purple hover:text-bravo-purple hover:bg-bravo-purple/10 font-semibold z-10 relative")}
                    >
                      Read →
                    </Link>
                  </>
                ) : (
                  <>
                    <div />
                    <span className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-zinc-400 cursor-not-allowed opacity-50")}>
                      Coming soon
                    </span>
                  </>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-12 px-6 border-t border-zinc-200 bg-white mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="text-bravo-dark font-bold text-lg mb-4">Bravo Rhythmic</div>
            <div className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Bravo Rhythmic. All rights reserved.
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-zinc-600">
            <Link href="/" className="hover:text-bravo-purple transition-colors">Home</Link>
            <Link href="/articles/bravo-rhythmic-gymnastics-bay-area-guide" className="hover:text-bravo-purple transition-colors">Rhythmic Gymnastics Club Guide</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
