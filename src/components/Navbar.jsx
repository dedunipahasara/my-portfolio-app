import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ❌ removed "contact"
  const links = ["about", "skills", "projects"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b
      ${
        scrolled
          ? "bg-[#0f172a]/90 backdrop-blur-xl border-purple-500/20 py-4 shadow-2xl"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 md:px-12">

        {/* LOGO */}
        <h1 className="text-3xl font-black tracking-tighter cursor-pointer">
          <span className="bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
            Thamasha
          </span>
          <span className="text-white">.dev</span>
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-slate-300 font-bold">
          {links.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="text-sm uppercase tracking-[0.2em] hover:text-white transition"
              >
                {section}
              </a>
            </li>
          ))}

          {/* ONLY CTA */}
          <li>
            <a
              href="#contact"
              className="ml-4 px-8 py-3 rounded-full border border-purple-500/40 bg-purple-500/5 text-purple-300 text-sm uppercase tracking-widest font-bold hover:bg-purple-500 hover:text-white transition"
            >
              Let's Talk
            </a>
          </li>
        </ul>

        {/* MOBILE MENU ICON */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-8 text-slate-300 font-bold">
            {links.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm uppercase tracking-widest hover:text-white"
                >
                  {section}
                </a>
              </li>
            ))}

            {/* MOBILE CTA */}
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 rounded-full border border-purple-500/40 text-purple-300 hover:bg-purple-500 hover:text-white transition"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}