// Blog home page
import Link from 'next/link';

export default function Home() {
  return <main className="min-h-screen bg-neutral-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">Welcome to WTF Collective</h1>
    <p className="text-xl mb-8">A community for interesting discussions and content.</p>
    <Link href="/blog" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
      Read the Blog
    </Link>
  </main>;
}
