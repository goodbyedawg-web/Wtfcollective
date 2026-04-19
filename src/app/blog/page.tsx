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
    <main className="min-h-screen bg-neutral-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="border border-neutral-700 p-4 rounded">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-blue-400">
                {post.title}
              </Link>
            </h2>
            <p className="text-neutral-300">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}