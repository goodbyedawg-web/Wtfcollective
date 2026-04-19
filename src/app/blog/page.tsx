import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { remark } from 'remark';
import html from 'remark-html';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
}

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const slug = filename.replace('.md', '');

      // Extract title from first line
      const title = fileContents.split('\n')[0].replace('# ', '');

      // Create excerpt from first few lines
      const lines = fileContents.split('\n').slice(1);
      const excerpt = lines.join(' ').replace(/^#+ /gm, '').substring(0, 150) + '...';

      // Process markdown
      const processedContent = await remark()
        .use(html)
        .process(fileContents);
      const contentHtml = processedContent.toString();

      return {
        slug,
        title,
        excerpt,
        contentHtml,
      };
    })
  );

  return posts;
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header */}
      <header className="border-b-4 border-red-600 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-bold text-red-500 tracking-wider">WTF</div>
            <div className="text-2xl font-bold text-yellow-400">COLLECTIVE</div>
          </div>
          <nav className="space-x-6 text-sm uppercase tracking-wide">
            <Link href="/" className="hover:text-red-400 transition">Home</Link>
            <Link href="/about" className="hover:text-red-400 transition">About</Link>
            <Link href="/contact" className="hover:text-red-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-red-400 mb-8 border-b-2 border-yellow-400 pb-2">BLOG ARCHIVES</h1>

        {/* Newspaper-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => {
            const colors = ['bg-red-900 border-red-500', 'bg-blue-900 border-blue-500', 'bg-purple-900 border-purple-500', 'bg-green-900 border-green-500'];
            const colorClass = colors[index % colors.length];
            const sizes = ['col-span-1', 'col-span-1 md:col-span-2', 'col-span-1 lg:col-span-2'];
            const sizeClass = sizes[index % sizes.length];

            return (
              <article key={post.slug} className={`${colorClass} ${sizeClass} border-2 p-6 rounded-lg shadow-lg hover:shadow-xl transition`}>
                <div className="text-yellow-400 text-xs uppercase tracking-wider mb-2">Article</div>
                <h2 className="text-xl font-bold mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-yellow-300 transition">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-yellow-400 hover:text-yellow-300 font-semibold uppercase text-sm tracking-wide">
                  Read More →
                </Link>
              </article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center border-t border-gray-600 pt-8">
          <blockquote className="text-lg italic text-gray-400">
            &ldquo;In the darkness of the human soul lies the seed of both destruction and enlightenment.&rdquo; - WTF Collective
          </blockquote>
        </div>
      </main>
    </div>
  );
}