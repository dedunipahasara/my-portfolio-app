import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { Toaster } from "react-hot-toast"; // ✅ import this

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* ✅ Toast Notification Container */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
