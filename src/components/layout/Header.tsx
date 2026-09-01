import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-gold.png";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Practice areas", href: "/practice-areas" },
  { label: "Industries", href: "/industries" },
  { label: "Approach", href: "/approach" },
  { label: "Insights", href: "/insights" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Dune Strategy" className="h-9 lg:h-10 w-9 lg:w-10 object-contain shrink-0" />
            <span className="font-serif text-lg lg:text-xl tracking-tight text-foreground font-medium">
              Dune Strategy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-9">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative text-[13px] tracking-wide transition-colors hover:text-gold ${
                  location.pathname === item.href
                    ? "text-foreground after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-px after:bg-gold"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button variant="outline" size="sm" className="ml-4">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation — solid, opaque full-height drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 h-[calc(100dvh-64px)] bg-background border-t border-border overflow-y-auto">
            <div className="container mx-auto px-6 flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center justify-between text-base py-4 border-b border-border/70 transition-colors ${
                    location.pathname === item.href
                      ? "text-gold"
                      : "text-foreground hover:text-gold"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  <span className="eyebrow text-muted-foreground">
                    {String(navItems.indexOf(item) + 1).padStart(2, "0")}
                  </span>
                </Link>
              ))}
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-8">
                <Button variant="outline" size="lg" className="w-full">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
