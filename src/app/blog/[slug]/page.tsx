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
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <Link href="/blog" className="text-blue-400 hover:underline mb-4 inline-block">
        ← Back to Blog
      </Link>
      <article className="prose prose-invert max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </main>
  );
}