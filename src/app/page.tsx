import Link from 'next/link';

export default function Home() {
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
            <Link href="/blog" className="hover:text-red-400 transition">Blog</Link>
            <Link href="/about" className="hover:text-red-400 transition">About</Link>
            <Link href="/contact" className="hover:text-red-400 transition">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content - Newspaper Style Grid */}
      <main className="max-w-7xl mx-auto p-4">
        {/* Featured Article */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-gray-900 border-2 border-yellow-400 p-6 rounded-lg shadow-lg">
            <div className="text-yellow-400 text-sm uppercase tracking-wider mb-2">Featured</div>
            <h1 className="text-3xl font-bold text-red-400 mb-4">Jeffrey Glenn Hutchinson: The Mind Behind the Shadows</h1>
            <p className="text-gray-300 mb-4">
              Explore the life and legacy of Jeffrey Glenn Hutchinson (1962-2025), whose work delved into the darkest corners of human psychology and biology.
            </p>
            <Link href="/blog/jeffrey-hutchinson" className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold transition">
              Read More
            </Link>
          </div>
          <div className="bg-gray-800 border border-gray-600 p-4 rounded">
            <h3 className="text-lg font-bold text-green-400 mb-2">Latest Posts</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/dark-psychology" className="hover:text-green-300">The Biology of Evil</Link></li>
              <li><Link href="/blog/serial-killers" className="hover:text-green-300">Psychological Profiles</Link></li>
              <li><Link href="/blog/human-condition" className="hover:text-green-300">Causes of Deviance</Link></li>
            </ul>
          </div>
        </div>

        {/* Blog Grid - Newspaper Classified Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Small Block */}
          <div className="bg-purple-900 border border-purple-500 p-4 rounded-lg">
            <h3 className="text-purple-300 font-bold mb-2">Premium Content</h3>
            <p className="text-sm text-gray-300">Unlock exclusive insights into human darkness.</p>
          </div>

          {/* Medium Block */}
          <div className="bg-blue-900 border border-blue-500 p-6 rounded-lg md:col-span-2">
            <h3 className="text-blue-300 font-bold mb-2">The Science of Psychopathy</h3>
            <p className="text-gray-300 mb-4">Biological factors and psychological triggers that shape the human condition.</p>
            <Link href="/blog/psychopathy-science" className="text-blue-400 hover:underline">Explore →</Link>
          </div>

          {/* Large Block */}
          <div className="bg-red-900 border border-red-500 p-8 rounded-lg lg:col-span-2">
            <h2 className="text-2xl font-bold text-red-300 mb-4">Dark Humor Corner</h2>
            <p className="text-gray-300 mb-4">
              &ldquo;I believe that the only way to truly understand the human condition is through the lens of its darkest aspects.&rdquo;
              <br />- Anonymous Dark Figure
            </p>
          </div>

          {/* Small Block */}
          <div className="bg-green-900 border border-green-500 p-4 rounded-lg">
            <h3 className="text-green-300 font-bold mb-2">Historical Cases</h3>
            <p className="text-sm text-gray-300">Lessons from infamous figures in history.</p>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-12 text-center border-t border-gray-600 pt-8">
          <blockquote className="text-lg italic text-gray-400">
            &ldquo;The darkest minds often illuminate the brightest truths.&rdquo; - Unknown
          </blockquote>
        </div>
      </main>
    </div>
  );
}
