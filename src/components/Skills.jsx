import skillsImg from "../assets/img1.png";

export default function Skills() {
  const skillsData = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Zustand", "DaisyUI"],
      tint: "bg-purple-500/10 border-purple-500/20",
      accent: "from-purple-400 to-purple-600"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Java", "Spring Boot", "Git"],
      tint: "bg-rose-500/10 border-rose-500/20",
      accent: "from-rose-400 to-rose-600"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
      tint: "bg-blue-500/10 border-blue-500/20",
      accent: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-20 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-rose-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl w-full mx-auto relative z-10">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">

          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-purple-300 uppercase">
              Expertise
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* SKILLS CARDS */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

            {skillsData.map((category, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 md:p-9 rounded-3xl border backdrop-blur-xl transition-all group shadow-xl ${category.tint} ${
                  idx === 2 ? "md:col-span-2" : ""
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 flex items-center gap-3">
                  <div
                    className={`w-1.5 h-5 sm:h-6 rounded-full bg-gradient-to-b ${category.accent}`}
                  />
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-sm font-medium bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

          </div>

          {/* IMAGE SIDE */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end mt-6 lg:mt-0">

            <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] group">

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-rose-500 rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition" />

              <div className="relative p-2 rounded-3xl bg-white/5 backdrop-blur-sm">
                <img
                  src={skillsImg}
                  alt="Skills Illustration"
                  className="w-full rounded-3xl grayscale-[15%] group-hover:grayscale-0 transition duration-700"
                />
              </div>

              {/* Rocket (hidden on small screens) */}
              <div className="hidden sm:block absolute -top-5 -right-5 text-4xl sm:text-5xl animate-rocket-move">
                🚀
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes rocket-move {
          0% { transform: translate(0, 0); }
          25% { transform: translate(10px, -15px); }
          50% { transform: translate(-5px, -30px); }
          75% { transform: translate(-15px, -15px); }
          100% { transform: translate(0, 0); }
        }
        .animate-rocket-move {
          animation: rocket-move 7s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
}