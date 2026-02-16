import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", label: "🏠 HQ", title: "Home" },
  { path: "/rules", label: "📜 Rules", title: "Rules" },
  { path: "/hall-of-shame", label: "🏆 Shame", title: "Hall of Shame" },
  { path: "/incidents", label: "📋 Reports", title: "Incidents" },
  { path: "/quiz", label: "🧠 Quiz", title: "Quiz" },
  { path: "/survival", label: "💀 Survive", title: "Survival Guide" },
  { path: "/glossary", label: "📖 Slang", title: "Glossary" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card pixel-border-orange border-t-0 border-x-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="font-pixel text-[0.55rem] sm:text-[0.65rem] text-primary hover:text-foreground transition-colors">
            ⚔️ GUARD FAIL ACADEMY
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-pixel text-[0.5rem] px-3 py-2 transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`font-pixel text-[0.6rem] px-3 py-3 transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {item.label} — {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
