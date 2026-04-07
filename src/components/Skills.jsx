import skillsImg from "../assets/img1.png";

export default function Skills() {
  const skillsData = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Zustand", "DaisyUI"],
      tint: "bg-purple-500/10 border-purple-500/20 group-hover:border-purple-500/40",
      accent: "from-purple-400 to-purple-600"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Java", "Spring Boot", "Git"],
      tint: "bg-rose-500/10 border-rose-500/20 group-hover:border-rose-500/40",
      accent: "from-rose-400 to-rose-600"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
      tint: "bg-blue-500/10 border-blue-500/20 group-hover:border-blue-500/40",
      accent: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-8 py-24 overflow-hidden"
    >
      {/* Background Ambient Glows - Pulsing for "Alive" feel */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="mb-4 inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
            <span className="text-xs font-bold tracking-[0.3em] text-purple-300 uppercase">
              Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            My <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Skills Grid - Wide layout with Tinted Glass */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            {skillsData.map((category, idx) => (
              <div 
                key={idx}
                className={`p-9 rounded-[3rem] border backdrop-blur-2xl transition-all duration-500 group shadow-2xl ${category.tint} ${idx === 2 ? 'md:col-span-2' : ''}`}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 text-white">
                  <div className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${category.accent}`}></div>
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-6 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-2xl text-slate-300 group-hover:text-white group-hover:border-white/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Illustration Side */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
            <div className="relative group lg:scale-110 transition-transform duration-700">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-rose-500 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="relative p-2 rounded-[3.5rem] bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm">
                <img
                  src={skillsImg}
                  alt="Skills Illustration"
                  className="w-full max-w-[360px] rounded-[3.2rem] shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 ease-out"
                />
              </div>

              {/* Free Moving Rocket */}
              <div className="absolute -top-6 -right-6 text-6xl animate-rocket-move pointer-events-none drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                 🚀
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes rocket-move {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, -20px) rotate(10deg); }
          50% { transform: translate(-5px, -45px) rotate(-5deg); }
          75% { transform: translate(-25px, -20px) rotate(-15deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-rocket-move {
          animation: rocket-move 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}