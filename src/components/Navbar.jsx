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

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b 
      ${scrolled ? "bg-[#0f172a]/90 backdrop-blur-xl border-purple-500/20 py-4 shadow-2xl" : "bg-transparent border-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 md:px-12">
        
        {/* Logo - Increased Size */}
        <h1 className="text-3xl font-black tracking-tighter cursor-pointer group">
          <span className="bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent group-hover:from-rose-400 group-hover:to-purple-400 transition-all duration-500">
            Thamasha
          </span>
          <span className="text-white">.dev</span>
        </h1>

        {/* Desktop Menu - Increased Font Size */}
        <ul className="hidden md:flex items-center gap-10 text-slate-300 font-bold">
          {["about", "skills", "projects"].map((section) => (
            <li key={section}>
              <a href={`#${section}`} className="relative text-sm uppercase tracking-[0.2em] hover:text-white transition-colors group">
                {section}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-rose-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          
          <li>
            <a href="#contact" className="ml-4 px-8 py-3 rounded-full border border-purple-500/40 bg-purple-500/5 text-purple-300 text-sm uppercase tracking-widest font-bold hover:bg-purple-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">
              Let's Talk
            </a>
          </li>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden text-white text-3xl cursor-pointer p-2 rounded-xl bg-white/5 border border-white/10" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
}