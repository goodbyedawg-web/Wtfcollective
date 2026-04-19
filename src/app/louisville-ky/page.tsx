import Link from 'next/link';

export default function LouisvilleKY() {
  return (
    <div className="min-h-screen bg-theme-primary text-theme-primary font-mono">
      {/* Header */}
      <header className="border-b-4 border-theme-primary p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition">
            <div className="text-6xl text-theme-accent">💀</div>
            <div className="text-2xl font-bold gradient-text">WTF COLLECTIVE</div>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
            <Link href="/blog" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition">Blog</Link>
            <Link href="/louisville-ky" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition text-yellow-400">Louisville KY</Link>
            <Link href="/about" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition">About</Link>
            <Link href="/contact" className="hover:text-red-400 dark:hover:text-red-400 light:hover:text-blue-600 transition">Contact</Link>
          </nav>
          <button className="md:hidden text-yellow-400 dark:text-yellow-400 light:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-red-400 dark:text-red-400 light:text-blue-600 mb-8 border-b-2 border-yellow-400 dark:border-yellow-400 light:border-blue-400 pb-4">
          Dark Crimes of Louisville, Kentucky
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Louisville Cases */}
          <div className="bg-gray-900 dark:bg-gray-900 light:bg-gray-100 border-2 border-yellow-400 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Louisville Metro Area</h2>
            <div className="space-y-3">
              <div className="border-l-2 border-red-500 pl-3">
                <h3 className="text-red-400 font-semibold">The I-64 Killer</h3>
                <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">Multiple victims found along I-64 corridor, still unsolved.</p>
              </div>
              <div className="border-l-2 border-red-500 pl-3">
                <h3 className="text-red-400 font-semibold">Brewery Murders</h3>
                <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">1984 case involving dismembered bodies found in barrels.</p>
              </div>
              <div className="border-l-2 border-red-500 pl-3">
                <h3 className="text-red-400 font-semibold">The Dollmaker</h3>
                <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">1980s killer who posed victims as dolls.</p>
              </div>
            </div>
          </div>

          {/* Hardin County */}
          <div className="bg-gray-800 dark:bg-gray-800 light:bg-gray-200 border border-gray-600 dark:border-gray-600 light:border-gray-400 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-green-400 dark:text-green-400 light:text-blue-600 mb-4">Hardin County</h2>
            <div className="space-y-3">
              <div className="border-l-2 border-green-500 pl-3">
                <h3 className="text-green-400 font-semibold">Fort Knox Murders</h3>
                <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">Military base crimes and surrounding area cases.</p>
              </div>
              <div className="border-l-2 border-green-500 pl-3">
                <h3 className="text-green-400 font-semibold">Rural Kentucky Killings</h3>
                <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">Isolated farm and woodland crime scenes.</p>
              </div>
            </div>
          </div>

          {/* Other Kentucky Cases */}
          <div className="bg-gray-900 dark:bg-gray-900 light:bg-gray-100 border-2 border-blue-400 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-blue-400 dark:text-blue-400 light:text-blue-600 mb-4">Across Kentucky</h2>
            <div className="space-y-3">
              <div className="border-l-2 border-blue-500 pl-3">
                <h3 className="text-blue-400 font-semibold">Lexington Strangler</h3>
                <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">1980s serial killings in Fayette County.</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-3">
                <h3 className="text-blue-400 font-semibold">Bowling Green Cases</h3>
                <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">University town crimes and disappearances.</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-3">
                <h3 className="text-blue-400 font-semibold">Eastern Kentucky</h3>
                <p className="text-sm text-gray-300 dark:text-gray-300 light:text-gray-700">Appalachian region cold cases and mining town mysteries.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Case Study */}
        <div className="bg-red-900 dark:bg-red-900 light:bg-red-200 border-2 border-red-500 p-8 rounded-lg mb-8">
          <h2 className="text-3xl font-bold text-red-300 dark:text-red-300 light:text-red-800 mb-6">Featured: The Louisville Lipstick Killer</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-4">Case Details</h3>
              <ul className="space-y-2 text-gray-300 dark:text-gray-300 light:text-gray-700">
                <li><strong>Years Active:</strong> 1985-1986</li>
                <li><strong>Victims:</strong> 3 confirmed, possibly more</li>
                <li><strong>Modus Operandi:</strong> Strangulation, posed with lipstick</li>
                <li><strong>Status:</strong> Unsolved</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-4">Investigation Notes</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 mb-4">
                The killer would write messages on walls with lipstick, leaving taunting notes for investigators.
                Victims were found posed in suggestive positions, leading to media sensationalism.
              </p>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                Despite extensive investigation and multiple suspects, the case remains open, haunting Louisville&apos;s criminal history.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 dark:bg-gray-800 light:bg-gray-200 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-400">47</div>
            <div className="text-sm text-gray-400">Unsolved Murders</div>
          </div>
          <div className="bg-gray-800 dark:bg-gray-800 light:bg-gray-200 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-red-400">12</div>
            <div className="text-sm text-gray-400">Serial Cases</div>
          </div>
          <div className="bg-gray-800 dark:bg-gray-800 light:bg-gray-200 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-400">156</div>
            <div className="text-sm text-gray-400">Total Homicides (2020-2025)</div>
          </div>
          <div className="bg-gray-800 dark:bg-gray-800 light:bg-gray-200 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-400">3.2</div>
            <div className="text-sm text-gray-400">Homicides per 100k</div>
          </div>
        </div>

        <div className="text-center border-t border-gray-600 dark:border-gray-600 light:border-gray-300 pt-8">
          <blockquote className="text-lg italic text-gray-400 dark:text-gray-400 light:text-gray-600">
            &ldquo;The darkest secrets hide in plain sight, waiting for the light of truth to expose them.&rdquo;
          </blockquote>
          <p className="text-sm text-gray-500 mt-2">- Kentucky Cold Case Files</p>
        </div>
      </main>
    </div>
  );
}