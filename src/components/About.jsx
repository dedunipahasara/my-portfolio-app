import profileImg from "../assets/photo.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-20 overflow-hidden"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-rose-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-purple-400/10 rounded-full blur-[140px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-start lg:-ml-10">

          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">

            {/* OUTER GLOW RING */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-white/10 to-white/20 blur-xl animate-pulse"></div>

            {/* WHITE BORDER RING */}
            <div className="absolute inset-2 rounded-full border-2 border-white/40"></div>

            {/* IMAGE */}
            <div className="absolute inset-4 rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              <img
                src={profileImg}
                alt="Thamasha Deduni"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

        {/* TEXT */}
        <div className="space-y-5 sm:space-y-6 md:space-y-7 text-center lg:text-left">

          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-pink-400">
            The Developer
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text">
              Thamasha Deduni
            </span>
          </h2>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            <p>
              I am a Software Engineering student passionate about building modern, scalable, and user-friendly applications.
            </p>

            <p>
              I specialize in full-stack development using React, Node.js, Spring Boot, and MySQL.
            </p>

            <p className="text-slate-400">
              I focus on clean UI, smooth UX, and real-world problem solving.
            </p>
          </div>

          {/* SKILLS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
            {["React", "Flutter", "Spring Boot", "Node.js", "MySQL", "Zustand"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-1 text-[10px] sm:text-xs uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-slate-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold uppercase text-[10px] sm:text-xs tracking-widest hover:scale-105 transition text-center"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 sm:px-10 py-3 sm:py-4 rounded-full border border-white/10 text-white font-bold uppercase text-[10px] sm:text-xs tracking-widest hover:bg-white/5 transition text-center"
            >
              Let's Talk
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}