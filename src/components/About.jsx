import profileImg from "../assets/photo.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-6 py-24 overflow-hidden"
    >
      {/* HERO STYLE BACKGROUND EFFECTS */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-500/10 rounded-full blur-[120px]"></div>

      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-purple-400/10 rounded-full blur-[140px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white/60 shadow-[0_0_25px_rgba(255,255,255,0.15)]">
            <img
              src={profileImg}
              alt="Thamasha Deduni"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="space-y-7">

          <span className="text-xs tracking-[0.4em] uppercase text-pink-400">
            The Developer
          </span>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-400 text-transparent bg-clip-text">
              Thamasha Deduni
            </span>
          </h2>

          <div className="space-y-5 text-slate-300 text-lg leading-relaxed max-w-xl">
            <p>
              I am a Software Engineering student passionate about building
              modern, scalable, and user-friendly applications.
            </p>

            <p>
              I specialize in full-stack development using React, Node.js,
              Spring Boot, and MySQL.
            </p>

            <p className="text-slate-400">
              I focus on clean UI, smooth UX, and real-world problem solving.
            </p>
          </div>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3">
            {["React", "Flutter", "Spring Boot", "Node.js", "MySQL", "Zustand"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 text-xs uppercase tracking-widest rounded-full bg-white/5 border border-white/10 text-slate-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-5 pt-4">
            <a
              href="#projects"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold uppercase text-xs tracking-widest hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-10 py-4 rounded-full border border-white/10 text-white font-bold uppercase text-xs tracking-widest hover:bg-white/5 transition"
            >
              Let's Talk
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}