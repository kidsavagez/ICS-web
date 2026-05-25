import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-teal text-cream/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              {/* Logo sits on a cream chip since the real PNG has teal-on-transparent text
                 that would disappear on the dark footer. Swap to /logos/iago-logo-cream.png
                 once a cream/reversed variant is exported. */}
              <span className="inline-flex bg-cream rounded-md px-4 py-3">
                <img
                  src="/logos/iago-logo.png"
                  alt="Iago Creative Space"
                  className="h-10 w-auto"
                />
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-body-sm">
              A creative studio crafting brand films, ads, and documentary work
              for teams who refuse to be skipped.
            </p>
          </div>

          <div>
            <h4 className="text-eyebrow uppercase text-cream mb-4">Work</h4>
            <ul className="space-y-2 text-body-sm">
              <li><Link href="#work" className="hover:text-cream transition-colors">Brand Films</Link></li>
              <li><Link href="#work" className="hover:text-cream transition-colors">Advertising</Link></li>
              <li><Link href="#work" className="hover:text-cream transition-colors">Documentation</Link></li>
              <li><Link href="#work" className="hover:text-cream transition-colors">All projects</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-eyebrow uppercase text-cream mb-4">Studio</h4>
            <ul className="space-y-2 text-body-sm">
              <li><Link href="#about" className="hover:text-cream transition-colors">About</Link></li>
              <li><Link href="#about" className="hover:text-cream transition-colors">Team</Link></li>
              <li><Link href="#about" className="hover:text-cream transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-eyebrow uppercase text-cream mb-4">Contact</h4>
            <ul className="space-y-2 text-body-sm">
              <li><a href="mailto:hi@iago.studio" className="hover:text-cream transition-colors">hi@iago.studio</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Instagram</a></li>
              <li><a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Vimeo</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between text-body-sm gap-2">
          <p>© {new Date().getFullYear()} Iago Creative Space · Jakarta · Made with care</p>
          <p className="text-cream/40">Made it watchable.</p>
        </div>
      </div>
    </footer>
  );
}
