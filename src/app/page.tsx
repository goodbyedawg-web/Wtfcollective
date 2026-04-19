import Link from 'next/link';
import ThemeSwitcher from '../components/ThemeSwitcher';
import ParticleBackground from '../components/ParticleBackground';
import TypewriterText from '../components/TypewriterText';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono dark:bg-black dark:text-white light:bg-white light:text-black relative overflow-hidden">
      <ParticleBackground />
      {/* Header */}
      <header className="border-b-4 border-red-600 p-4 dark:border-red-600 light:border-blue-600">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 animate-slide-in-left">
            <div className="text-6xl text-red-500 dark:text-red-500 light:text-blue-600 animate-float hover-glow">💀</div>
            <div className="text-2xl font-bold gradient-text">WTF COLLECTIVE</div>
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
            <h1 className="text-3xl font-bold text-red-400 dark:text-red-400 light:text-blue-600 mb-4">
              <TypewriterText text="Jeffrey Glenn Hutchinson: The Mind Behind the Shadows" delay={50} />
            </h1>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4">
              Explore the life and legacy of Jeffrey Glenn Hutchinson (1962-2025), whose work delved into the darkest corners of human psychology and biology.
            </p>
            <Link href="/blog/jeffrey-hutchinson" className="bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 light:bg-blue-600 light:hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold transition">
              Read More
            </Link>
          </div>
          <div className="bg-gray-800 dark:bg-gray-800 light:bg-gray-200 border border-gray-600 dark:border-gray-600 light:border-gray-300 p-4 rounded">
            <h3 className="text-lg font-bold text-green-400 dark:text-green-400 light:text-blue-600 mb-2">Latest Posts</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/dark-psychology" className="hover:text-green-300 dark:hover:text-green-300 light:hover:text-blue-500">The Biology of Evil</Link></li>
              <li><Link href="/blog/serial-killers" className="hover:text-green-300 dark:hover:text-green-300 light:hover:text-blue-500">Psychological Profiles</Link></li>
              <li><Link href="/blog/human-condition" className="hover:text-green-300 dark:hover:text-green-300 light:hover:text-blue-500">Causes of Deviance</Link></li>
            </ul>
          </div>
        </div>

        {/* Blog Grid - Newspaper Classified Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Small Block */}
          <div className="bg-purple-900 dark:bg-purple-900 light:bg-purple-200 border border-purple-500 dark:border-purple-500 light:border-purple-400 p-4 rounded-lg hover-lift animate-slide-in-left">
            <h3 className="text-purple-300 dark:text-purple-300 light:text-purple-800 font-bold mb-2 animate-pulse">Premium Content</h3>
            <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">Unlock exclusive insights into human darkness.</p>
          </div>

          {/* Medium Block */}
          <div className="bg-blue-900 dark:bg-blue-900 light:bg-blue-200 border border-blue-500 p-6 rounded-lg md:col-span-2 hover-lift animate-slide-in-right">
            <h3 className="text-blue-300 dark:text-blue-300 light:text-blue-800 font-bold mb-2">The Science of Psychopathy</h3>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4">Biological factors and psychological triggers that shape the human condition.</p>
            <Link href="/blog/psychopathy-science" className="text-blue-400 dark:text-blue-400 light:text-blue-600 hover:underline hover:text-blue-300 transition-colors duration-200">Explore →</Link>
          </div>

          {/* Large Block */}
          <div className="bg-red-900 dark:bg-red-900 light:bg-red-200 border border-red-500 p-8 rounded-lg lg:col-span-2 hover-glow animate-float">
            <h2 className="text-2xl font-bold text-red-300 dark:text-red-300 light:text-red-800 mb-4">Dark Humor Corner</h2>
            <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4 italic">
              &ldquo;I believe that the only way to truly understand the human condition is through the lens of its darkest aspects.&rdquo;
              <br />- Anonymous Dark Figure
            </p>
          </div>

          {/* Small Block */}
          <div className="bg-green-900 dark:bg-green-900 light:bg-green-200 border border-green-500 p-4 rounded-lg hover-lift animate-slide-in-left">
            <h3 className="text-green-300 dark:text-green-300 light:text-green-800 font-bold mb-2">Historical Cases</h3>
            <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">Lessons from infamous figures in history.</p>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-12 text-center border-t border-gray-600 dark:border-gray-600 light:border-gray-300 pt-8">
          <blockquote className="text-lg italic text-gray-400 dark:text-gray-400 light:text-gray-600">
            &ldquo;The darkest minds often illuminate the brightest truths.&rdquo; - Unknown
          </blockquote>
        </div>
      </main>
    </div>
  );
}
