import { FiGithub, FiArrowUpRight } from "react-icons/fi";

// Asset Imports
import sweatyAppImg from "../assets/sweety.png";
import groovoImg from "../assets/groovo.jpeg";
import diaryImg from "../assets/web-dairy.jpeg";
import messengerImg from "../assets/messenger.jpeg";
import recipeImg from "../assets/recipe-sharing.jpeg";
import noteTakerImg from "../assets/note-taker.jpeg";

export default function Projects() {
  const data = [
    { name: "Sweaty App", link: "https://github.com/dedunipahasara/Blog.git", image: sweatyAppImg, tag: "Full Stack" },
    { name: "Groovo Music", link: "https://github.com/dedunipahasara/Groovo_music.git", image: groovoImg, tag: "Web Design" },
    { name: "Web Diary & Mobile", link: "https://github.com/dedunipahasara/dairy-web-mobile.git", image: diaryImg, tag: "Cross Platform" },
    { name: "Messenger Web", link: "https://github.com/dedunipahasara/mern-chat-socketio.git", image: messengerImg, tag: "Real-time" },
    { name: "Recipe Sharing", link: "https://github.com/dedunipahasara/recipesharingfoodiecircle.git", image: recipeImg, tag: "React UI" },
    { name: "Note Taker App", link: "https://github.com/dedunipahasara/note-taker-mobile-app.git", image: noteTakerImg, tag: "Mobile" }
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-20 overflow-hidden"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-rose-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">

          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-purple-300 uppercase">
              Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-4">
            Recent{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {data.map((p, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >

              {/* IMAGE */}
              <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden m-2 sm:m-3 rounded-2xl bg-black">

                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-[#0f172a]/70 group-hover:bg-[#0f172a]/20 transition-all duration-700"></div>

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2 sm:px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-teal-300">
                  {p.tag}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6 md:p-7">

                <div className="flex justify-between items-start mb-3 sm:mb-4 gap-3">

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight group-hover:text-purple-300 transition">
                    {p.name}
                  </h3>

                  <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <FiArrowUpRight size={16} />
                  </div>

                </div>

                {/* SOURCE CODE (FIXED HOVER ANIMATION) */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-slate-400 hover:text-teal-300 transition"
                >
                  Source Code

                  <FiGithub
                    size={14}
                    className="transform transition-all duration-300 group-hover/link:translate-x-2 group-hover/link:text-teal-300"
                  />
                </a>

              </div>
            </div>
          ))}

        </div>

        {/* FOOTER BUTTON */}
        <div className="mt-16 sm:mt-20 text-center">

          <a
            href="https://github.com/dedunipahasara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 sm:px-10 py-3 sm:py-4 rounded-full border border-purple-500/20 bg-purple-500/5 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-purple-100 hover:bg-purple-500/10 transition"
          >
            <FiGithub size={16} className="text-purple-400" />
            See All Projects
          </a>

        </div>

      </div>
    </section>
  );
}