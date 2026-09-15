import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export const metadata = {
  title: 'Knowledge Base | Bravo Rhythmic',
  description: 'Articles and useful materials from Bravo Rhythmic club.',
};

export default async function ArticlesIndexPage() {
  const articlesDir = path.join(process.cwd(), 'articles');
  let articles: Array<{ slug: string; title: string; date?: string; excerpt?: string }> = [];

  try {
    const files = await fs.readdir(articlesDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));
    
    for (const file of mdFiles) {
      const slug = file.replace(/\.md$/, '');
      const filePath = path.join(articlesDir, file);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      let title = data.title;
      if (!title) {
        const match = content.match(/^#\s+(.+)$/m);
        title = match ? match[1] : slug;
      }
      
      articles.push({
        slug,
        title,
        date: data.date,
        excerpt: data.description || (content.slice(0, 150) + '...')
      });
    }
  } catch (error) {
    console.error("Failed to read articles directory", error);
  }

  return (
    <div className="flex flex-col min-h-screen bg-bravo-light/20 font-sans text-bravo-dark">
      <header className="w-full py-6 px-8 border-b border-bravo-purple/20 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-bravo-purple hover:opacity-80 transition-opacity">
            Bravo Rhythmic
          </Link>
        </div>
      </header>
      
      <main className="flex-1 w-full max-w-4xl mx-auto py-16 px-6">
        <div className="flex flex-col items-start gap-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Knowledge Base
          </h1>
          <p className="text-lg leading-relaxed text-bravo-dark/70 max-w-2xl">
            Useful materials, tips, and guides for parents and gymnasts.
          </p>
        </div>
        
        <div className="flex flex-col gap-8">
          {articles.length === 0 ? (
            <p className="text-bravo-dark/60">No articles published yet.</p>
          ) : (
            articles.map(article => (
              <Link href={`/articles/${article.slug}`} key={article.slug} className="block group">
                <div className="p-6 rounded-2xl bg-white border border-bravo-purple/10 hover:border-bravo-purple/30 hover:shadow-lg transition-all duration-300">
                  <h2 className="text-2xl font-bold text-bravo-dark group-hover:text-bravo-purple transition-colors mb-3">
                    {article.title}
                  </h2>
                  <p className="text-bravo-dark/70 mb-4 line-clamp-2">
                    {article.excerpt?.replace(/[#*`]/g, '')}
                  </p>
                  <span className="text-bravo-purple font-medium text-sm flex items-center gap-2">
                    Read more →
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>
      
      <footer className="w-full py-8 text-center text-sm text-bravo-dark/50 border-t border-bravo-purple/10 bg-white mt-auto">
        © {new Date().getFullYear()} Bravo Rhythmic. All rights reserved.
      </footer>
    </div>
  );
}
