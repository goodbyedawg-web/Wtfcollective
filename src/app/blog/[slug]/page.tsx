import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';
import ThemeSwitcher from '../../../components/ThemeSwitcher';

interface Post {
  slug: string;
  title: string;
  contentHtml: string;
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const title = fileContents.split('\n')[0].replace('# ', '');

    const processedContent = await remark()
      .use(html)
      .process(fileContents);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title,
      contentHtml,
    };
  } catch {
    return null;
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono dark:bg-black dark:text-white light:bg-white light:text-black">
      {/* Header */}
      <header className="border-b-4 border-red-600 dark:border-red-600 light:border-blue-600 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="text-6xl text-red-500 dark:text-red-500 light:text-blue-600">💀</div>
            <div className="text-2xl font-bold text-yellow-400 dark:text-yellow-400 light:text-blue-800">WTF COLLECTIVE</div>
          </div>
          <div className="flex items-center space-4">
            <ThemeSwitcher />
            <nav className="ml-6 space-x-6 text-sm uppercase tracking-wide">
              <Link href="/" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition">Home</Link>
              <Link href="/blog" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition">Blog</Link>
              <Link href="/about" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition">About</Link>
              <Link href="/contact" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <Link href="/blog" className="text-red-400 hover:text-red-300 mb-6 inline-block uppercase tracking-wide text-sm">
          ← Back to Archives
        </Link>

        <article className="bg-gray-900 dark:bg-gray-900 light:bg-gray-100 border-2 border-yellow-400 p-8 rounded-lg shadow-lg prose prose-invert dark:prose-invert light:prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-red-400 dark:text-red-400 light:text-blue-600 mb-6 border-b border-yellow-400 dark:border-yellow-400 light:border-blue-400 pb-4">{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>

        {/* Code wisdom section */}
        <div className="mt-12 bg-red-900 dark:bg-red-900 light:bg-blue-200 border border-red-500 dark:border-red-500 light:border-blue-400 p-6 rounded-lg">
          <h3 className="text-red-300 dark:text-red-300 light:text-blue-800 font-bold mb-4 text-xl">Code Wisdom</h3>
          <blockquote className="text-lg italic text-gray-300 dark:text-gray-300 light:text-gray-700 border-l-4 border-yellow-400 dark:border-yellow-400 light:border-blue-400 pl-4">
            &ldquo;First, solve the problem. Then, write the code.&rdquo;
            <br />- John Johnson
          </blockquote>
        </div>
      </main>
    </div>
  );
}