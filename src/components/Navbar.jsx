import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md border-b border-purple-500/30 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:p-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-400 drop-shadow-lg">
          Thamasha.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          {["about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="hover:text-purple-400 hover:drop-shadow-lg transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900/95 backdrop-blur-md w-full absolute top-full left-0 transition-max-height duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-center text-white text-xl">
          {["about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={toggleMenu}
                className="hover:text-purple-400 transition block py-2"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
