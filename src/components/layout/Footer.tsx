import { Link } from "react-router-dom";

const footerLinks = {
  firm: [
    { label: "About", href: "/about" },
    { label: "Approach", href: "/approach" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Practice areas", href: "/practice-areas" },
    { label: "Industries", href: "/industries" },
  ],
  legal: [
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms of service", href: "/terms-of-service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <p className="font-serif text-2xl text-primary-foreground mb-4 tracking-tight">Dune Strategy</p>
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="text-primary-foreground/70 max-w-md leading-relaxed text-sm">
              A Dubai-based advisory firm working with corporates, family groups, sovereign-linked 
              entities, and international investors on market entry, expansion, partnerships, and 
              transactions across the GCC and connected markets.
            </p>
          </div>

          {/* Firm Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-medium mb-5 text-primary-foreground relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-6 after:bg-gold">Firm</h4>
            <ul className="space-y-3 mt-4">
              {footerLinks.firm.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-medium mb-5 text-primary-foreground relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-6 after:bg-gold">Services</h4>
            <ul className="space-y-3 mt-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-medium mb-5 mt-10 text-primary-foreground relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-6 after:bg-gold">Legal</h4>
            <ul className="space-y-3 mt-4">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-medium mb-5 text-primary-foreground relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-6 after:bg-gold">Contact</h4>
            <div className="space-y-4 mt-4 text-sm text-primary-foreground/70">
              <p>
                <a href="mailto:business@dunestrategy.com" className="hover:text-primary-foreground transition-colors">
                  business@dunestrategy.com
                </a>
              </p>
              <p>
                <a href="tel:+971528012369" className="hover:text-primary-foreground transition-colors">
                  +971 52 801 2369
                </a>
              </p>
              <div>
                <p>Techno Hub 2, Dubai Silicon Oasis</p>
                <p>Dubai, United Arab Emirates</p>
              </div>
              <p className="text-primary-foreground/50">
                Sunday – Thursday, 9:00 AM – 6:00 PM GST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/15">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Dune Strategy. All rights reserved. Registered in Dubai, UAE.
            </p>
            <p className="text-xs text-primary-foreground/40">
              Dune Strategy is a registered trade name. This website does not constitute legal or financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
