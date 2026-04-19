import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';

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
            <Link href="/blog" className="hover:text-red-400 transition">Blog</Link>
            <Link href="/about" className="hover:text-red-400 transition">About</Link>
            <Link href="/contact" className="hover:text-red-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <Link href="/blog" className="text-red-400 hover:text-red-300 mb-6 inline-block uppercase tracking-wide text-sm">
          ← Back to Archives
        </Link>

        <article className="bg-gray-900 border-2 border-yellow-400 p-8 rounded-lg shadow-lg prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-red-400 mb-6 border-b border-yellow-400 pb-4">{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>

        {/* Dark humor section */}
        <div className="mt-12 bg-red-900 border border-red-500 p-6 rounded-lg">
          <h3 className="text-red-300 font-bold mb-4 text-xl">A Touch of Dark Irony</h3>
          <blockquote className="text-lg italic text-gray-300 border-l-4 border-yellow-400 pl-4">
            &ldquo;The line between monster and man is thinner than we think—and often drawn with the same ink.&rdquo;
            <br />- Charles Manson
          </blockquote>
        </div>
      </main>
    </div>
  );
}