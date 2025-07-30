import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
const Navbar = () => {
  const [isScrolloed, setIsScrolled] = useState(false);
  const [isMenuOpen, setISMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolloed
          ? "py-3 bg=bsckground/80 bsckdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between ">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">OmBhambre</span>{" "}
            Portfolio{" "}
          </span>
        </a>

        {/* Desktop version */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transistion-colors duaration-300 font-semibold"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Version */}

        <button
          onClick={() => setISMenuOpen((prev) => !prev)}
          className=" md:hidden p-2 text-foreground z-50 "
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duaration-300 md-hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transistion-colors duaration-300"
                onClick={() => setISMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
