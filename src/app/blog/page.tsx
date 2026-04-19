import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { remark } from 'remark';
import html from 'remark-html';
import ThemeSwitcher from '../../components/ThemeSwitcher';

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
    <div className="min-h-screen bg-black text-white font-mono dark:bg-black dark:text-white light:bg-white light:text-black">
      {/* Header */}
      <header className="border-b-4 border-red-600 dark:border-red-600 light:border-blue-600 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="text-6xl text-red-500 dark:text-red-500 light:text-blue-600">💀</div>
            <div className="text-2xl font-bold text-yellow-400 dark:text-yellow-400 light:text-blue-800">CODE MASTERY</div>
          </div>
          <div className="flex items-center space-4">
            <ThemeSwitcher />
            <nav className="ml-6 space-x-6 text-sm uppercase tracking-wide">
              <Link href="/" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition">About</Link>
              <Link href="/contact" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-red-400 mb-8 border-b-2 border-yellow-400 pb-2">BLOG ARCHIVES</h1>

        {/* Newspaper-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => {
            const colors = [
              'bg-red-900 dark:bg-red-900 light:bg-red-200 border-red-500 dark:border-red-500 light:border-red-400',
              'bg-blue-900 dark:bg-blue-900 light:bg-blue-200 border-blue-500 dark:border-blue-500 light:border-blue-400',
              'bg-purple-900 dark:bg-purple-900 light:bg-purple-200 border-purple-500 dark:border-purple-500 light:border-purple-400',
              'bg-green-900 dark:bg-green-900 light:bg-green-200 border-green-500 dark:border-green-500 light:border-green-400'
            ];
            const colorClass = colors[index % colors.length];
            const sizes = ['col-span-1', 'col-span-1 md:col-span-2', 'col-span-1 lg:col-span-2'];
            const sizeClass = sizes[index % sizes.length];

            return (
              <article key={post.slug} className={`${colorClass} ${sizeClass} border-2 p-6 rounded-lg shadow-lg hover:shadow-xl transition`}>
                <div className="text-yellow-400 dark:text-yellow-400 light:text-blue-600 text-xs uppercase tracking-wider mb-2">Article</div>
                <h2 className="text-xl font-bold mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-yellow-300 dark:hover:text-yellow-300 light:hover:text-blue-500 transition">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-sm mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-yellow-400 dark:text-yellow-400 light:text-blue-600 hover:text-yellow-300 dark:hover:text-yellow-300 light:hover:text-blue-500 font-semibold uppercase text-sm tracking-wide">
                  Read More →
                </Link>
              </article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center border-t border-gray-600 dark:border-gray-600 light:border-gray-300 pt-8">
          <blockquote className="text-lg italic text-gray-400 dark:text-gray-400 light:text-gray-600">
            &ldquo;Code is the universal language. Mastery comes from speaking it fluently.&rdquo; - Code Mastery Collective
          </blockquote>
        </div>
      </main>
    </div>
  );
}