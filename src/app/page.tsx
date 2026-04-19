'use client';

import Link from 'next/link';
import MobileNavigation from '../components/MobileNavigation';
import ParticleBackground from '../components/ParticleBackground';
import TypewriterText from '../components/TypewriterText';

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-primary text-theme-primary font-mono relative overflow-hidden">
      <ParticleBackground />
      {/* Header */}
      <header className="border-b-4 border-theme-primary p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 animate-slide-in-left">
            <div className="text-6xl text-theme-accent animate-float hover-glow">💀</div>
            <div className="text-2xl font-bold gradient-text">WTF COLLECTIVE</div>
          </div>
          <MobileNavigation />
        </div>
      </header>

      {/* Main Content - Newspaper Style Grid */}
      <main className="max-w-7xl mx-auto p-4">
        {/* Featured Article */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-theme-tertiary border-2 border-theme-primary p-6 rounded-lg shadow-lg">
            <div className="text-theme-accent text-sm uppercase tracking-wider mb-2">Featured</div>
            <h1 className="text-3xl font-bold text-theme-accent mb-4">
              <TypewriterText text="Jeffrey Glenn Hutchinson: The Mind Behind the Shadows" delay={50} />
            </h1>
            <p className="text-theme-secondary mb-4">
              Explore the life and legacy of Jeffrey Glenn Hutchinson (1962-2025), whose work delved into the darkest corners of human psychology and biology.
            </p>
            <Link href="/blog/jeffrey-hutchinson" className="bg-theme-accent hover:opacity-80 px-6 py-2 rounded text-theme-primary font-semibold transition">
              Read More
            </Link>
          </div>
          <div className="bg-theme-secondary border border-theme-secondary p-4 rounded">
            <h3 className="text-lg font-bold text-theme-accent mb-2">Latest Posts</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/dark-psychology" className="hover:text-theme-accent">The Biology of Evil</Link></li>
              <li><Link href="/blog/serial-killers" className="hover:text-theme-accent">Psychological Profiles</Link></li>
              <li><Link href="/blog/human-condition" className="hover:text-theme-accent">Causes of Deviance</Link></li>
            </ul>
          </div>
        </div>

        {/* Blog Grid - Newspaper Classified Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Small Block */}
          <div className="bg-theme-secondary border border-theme-primary p-4 rounded-lg hover-lift animate-slide-in-left">
            <h3 className="text-theme-accent font-bold mb-2 animate-pulse">Kentucky Crimes</h3>
            <p className="text-sm text-theme-secondary">Dark cases from Louisville and across the Bluegrass State.</p>
            <Link href="/louisville-ky" className="text-theme-accent text-xs uppercase tracking-wide hover:underline">Explore →</Link>
          </div>

          {/* Medium Block */}
          <div className="bg-theme-secondary border border-theme-primary p-6 rounded-lg md:col-span-2 hover-lift animate-slide-in-right">
            <h3 className="text-theme-accent font-bold mb-2">The Science of Psychopathy</h3>
            <p className="text-theme-secondary mb-4">Biological factors and psychological triggers that shape the human condition.</p>
            <Link href="/blog/psychopathy-science" className="text-theme-accent hover:underline transition-colors duration-200">Explore →</Link>
          </div>

          {/* Large Block */}
          <div className="bg-theme-secondary border border-theme-primary p-8 rounded-lg lg:col-span-2 hover-glow animate-float">
            <h2 className="text-2xl font-bold text-theme-accent mb-4">Dark Humor Corner</h2>
            <p className="text-theme-secondary mb-4 italic">
              &ldquo;I believe that the only way to truly understand the human condition is through the lens of its darkest aspects.&rdquo;
              <br />- Anonymous Dark Figure
            </p>
          </div>

          {/* Small Block */}
          <div className="bg-theme-secondary border border-theme-primary p-4 rounded-lg hover-lift animate-slide-in-left">
            <h3 className="text-theme-accent font-bold mb-2">Historical Cases</h3>
            <p className="text-sm text-theme-secondary">Lessons from infamous figures in history.</p>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-12 text-center border-t border-theme-secondary pt-8">
          <blockquote className="text-lg italic text-theme-secondary">
            &ldquo;The darkest minds often illuminate the brightest truths.&rdquo; - Unknown
          </blockquote>
        </div>
      </main>
    </div>
  );
}
