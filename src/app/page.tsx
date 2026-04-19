import Link from 'next/link';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono dark:bg-black dark:text-white light:bg-white light:text-black">
      {/* Header */}
      <header className="border-b-4 border-red-600 p-4 dark:border-red-600 light:border-blue-600">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="text-6xl text-red-500 dark:text-red-500 light:text-blue-600">💀</div>
            <div className="text-2xl font-bold text-yellow-400 dark:text-yellow-400 light:text-blue-800">CODE MASTERY</div>
          </div>
          <div className="flex items-center space-4">
            <ThemeSwitcher />
            <nav className="ml-6 space-x-6 text-sm uppercase tracking-wide">
              <Link href="/blog" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition">Blog</Link>
              <Link href="/about" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition">About</Link>
              <Link href="/contact" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content - Newspaper Style Grid */}
      <main className="max-w-7xl mx-auto p-4">
        {/* Featured Article */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-gray-900 dark:bg-gray-900 light:bg-gray-100 border-2 border-yellow-400 p-6 rounded-lg shadow-lg">
            <div className="text-yellow-400 text-sm uppercase tracking-wider mb-2">Featured</div>
            <h1 className="text-3xl font-bold text-red-400 dark:text-red-400 light:text-blue-600 mb-4">Advanced Algorithms: Mastering the Art of Code</h1>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4">
              Dive deep into complex algorithms, optimization techniques, and the mathematical beauty behind efficient code. From sorting to graph theory, explore the pinnacle of programming mastery.
            </p>
            <Link href="/blog/advanced-algorithms" className="bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 light:bg-blue-600 light:hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold transition">
              Read More
            </Link>
          </div>
          <div className="bg-gray-800 dark:bg-gray-800 light:bg-gray-200 border border-gray-600 dark:border-gray-600 light:border-gray-300 p-4 rounded">
            <h3 className="text-lg font-bold text-green-400 dark:text-green-400 light:text-blue-600 mb-2">Latest Posts</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/react-mastery" className="hover:text-green-300 dark:hover:text-green-300 light:hover:text-blue-500">React Performance Hacks</Link></li>
              <li><Link href="/blog/system-design" className="hover:text-green-300 dark:hover:text-green-300 light:hover:text-blue-500">Scalable Architecture</Link></li>
              <li><Link href="/blog/low-level" className="hover:text-green-300 dark:hover:text-green-300 light:hover:text-blue-500">Assembly & C Mastery</Link></li>
            </ul>
          </div>
        </div>

        {/* Blog Grid - Newspaper Classified Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Small Block */}
          <div className="bg-purple-900 dark:bg-purple-900 light:bg-purple-200 border border-purple-500 dark:border-purple-500 light:border-purple-400 p-4 rounded-lg">
            <h3 className="text-purple-300 dark:text-purple-300 light:text-purple-800 font-bold mb-2">Code Snippets</h3>
            <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">Premium algorithms and patterns.</p>
          </div>

          {/* Medium Block */}
          <div className="bg-blue-900 dark:bg-blue-900 light:bg-blue-200 border border-blue-500 p-6 rounded-lg md:col-span-2">
            <h3 className="text-blue-300 dark:text-blue-300 light:text-blue-800 font-bold mb-2">Machine Learning Mastery</h3>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4">Neural networks, deep learning, and AI implementation from scratch.</p>
            <Link href="/blog/machine-learning" className="text-blue-400 dark:text-blue-400 light:text-blue-600 hover:underline">Explore →</Link>
          </div>

          {/* Large Block */}
          <div className="bg-red-900 dark:bg-red-900 light:bg-red-200 border border-red-500 p-8 rounded-lg lg:col-span-2">
            <h2 className="text-2xl font-bold text-red-300 dark:text-red-300 light:text-red-800 mb-4">Code Mastery Tips</h2>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4">
              &ldquo;Code is poetry written in logic. Master the syntax, but transcend the semantics.&rdquo;
              <br />- Anonymous Code Wizard
            </p>
            <pre className="bg-black dark:bg-black light:bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}`}
            </pre>
          </div>

          {/* Small Block */}
          <div className="bg-green-900 dark:bg-green-900 light:bg-green-200 border border-green-500 p-4 rounded-lg">
            <h3 className="text-green-300 dark:text-green-300 light:text-green-800 font-bold mb-2">Performance Optimization</h3>
            <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">Big O mastery and optimization techniques.</p>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-12 text-center border-t border-gray-600 dark:border-gray-600 light:border-gray-300 pt-8">
          <blockquote className="text-lg italic text-gray-400 dark:text-gray-400 light:text-gray-600">
            &ldquo;In code we trust. In algorithms we find eternity.&rdquo; - The Programmer&apos;s Manifesto
          </blockquote>
        </div>
      </main>
    </div>
  );
}
