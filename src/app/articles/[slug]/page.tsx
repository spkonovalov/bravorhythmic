import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Metadata } from 'next';

export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), 'articles');
  try {
    const files = await fs.readdir(articlesDir);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => ({
        slug: file.replace(/\.md$/, ''),
      }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'articles', `${slug}.md`);
  
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    
    // Extract title from h1 if not in frontmatter
    let title = data.title;
    if (!title) {
      const match = content.match(/^#\s+(.+)$/m);
      title = match ? match[1] : slug;
    }
    
    // Use keywords if available, otherwise fallback to our SEO knowledge base
    const keywords = data.keywords || [
      "rhythmic gymnastics near me",
      "rhythmic gymnastics redwood city",
      "rhythmic gymnastics bay area",
      "beginner rhythmic gymnastics"
    ];

    return {
      title: `${title} | Bravo Rhythmic`,
      description: data.description || "Learn more about rhythmic gymnastics in the Bay Area with Bravo Rhythmic.",
      keywords: keywords,
    };
  } catch (error) {
    return {
      title: 'Article | Bravo Rhythmic'
    };
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'articles', `${slug}.md`);
  
  let content = '';
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const parsed = matter(fileContent);
    content = parsed.content;
  } catch (error) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-bravo-dark">
      <header className="w-full py-6 px-8 border-b border-bravo-purple/20 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-bravo-purple hover:opacity-80 transition-opacity">
            Bravo Rhythmic
          </Link>
          <Link href="/articles">
            <Button variant="ghost" className="text-bravo-purple hover:bg-bravo-purple/10">
              All Articles
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-1 w-full max-w-3xl mx-auto py-12 px-6">
        <article className="prose prose-lg prose-p:text-bravo-dark/90 prose-headings:text-bravo-dark prose-a:text-bravo-purple prose-a:no-underline hover:prose-a:underline prose-li:marker:text-bravo-purple max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </article>
      </main>
      
      <footer className="w-full py-8 text-center text-sm text-bravo-dark/50 border-t border-bravo-purple/10 bg-white mt-auto">
        © {new Date().getFullYear()} Bravo Rhythmic. All rights reserved.
      </footer>
    </div>
  );
}
