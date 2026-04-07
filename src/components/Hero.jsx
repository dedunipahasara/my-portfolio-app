import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0f172a] px-4 sm:px-6 md:px-10 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-rose-500/10 rounded-full blur-[120px]"></div>

      <div className="relative text-center z-10 max-w-4xl w-full">

        {/* TAG */}
        <div className="mb-6 inline-block px-3 sm:px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
          <span className="text-[10px] sm:text-sm font-medium tracking-widest text-purple-300 uppercase">
            Available for Projects
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            <Typewriter
              words={["Thamasha"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1500}
            />
          </span>

          <span className="inline-block animate-wave ml-2 sm:ml-4 text-2xl sm:text-4xl">
            👋
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-light max-w-xl mx-auto leading-relaxed px-2">
          Crafting{" "}
          <span className="text-white font-medium">
            modern web & mobile
          </span>{" "}
          experiences through full-stack excellence.
        </p>

        {/* TECH STACK */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
          {["React", "Node.js", "Java", "Spring Boot", "MySQL"].map((tech) => (
            <span
              key={tech}
              className="px-3 sm:px-4 py-1 text-[10px] sm:text-sm font-medium text-purple-200 bg-white/5 border border-white/10 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 px-2">

          <a
            href="/Thamasha-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-rose-500 text-white font-bold rounded-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            Show My CV
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              />
            </svg>
          </a>

          <button className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/5 transition">
            Get In Touch
          </button>
        </div>

        {/* ANIMATION */}
        <style jsx>{`
          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            20% { transform: rotate(14deg); }
            40% { transform: rotate(-8deg); }
            60% { transform: rotate(14deg); }
            80% { transform: rotate(-4deg); }
          }
          .animate-wave {
            animation: wave 2s infinite;
          }
        `}</style>

      </div>
    </section>
  );
}