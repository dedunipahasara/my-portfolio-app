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
    { name: "Recipe Sharing", link: "https://github.com/dedunipahasara/receipe-sharing-website.git", image: recipeImg, tag: "React UI" },
    { name: "Note Taker App", link: "https://github.com/dedunipahasara/note-taker-mobile-app.git", image: noteTakerImg, tag: "Mobile" }
  ];

  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-8 py-24 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
            <span className="text-[10px] font-bold tracking-[0.4em] text-purple-300 uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            Recent <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Creations</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((p, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 overflow-hidden hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-[0_0_40px_-15px_rgba(168,85,247,0.3)]"
            >
              {/* Image Container - Height reduced to h-40 */}
              <div className="relative h-40 overflow-hidden m-2 rounded-[1.6rem] bg-black">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover grayscale-[100%] brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />

                {/* Heavy Dark Overlay - Lightens on hover */}
                <div className="absolute inset-0 bg-[#0f172a]/80 group-hover:bg-[#0f172a]/20 transition-all duration-700"></div>
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-teal-300 z-20">
                  {p.tag}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-7 pt-4">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors leading-tight tracking-tight">
                    {p.name}
                  </h3>
                  <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:rotate-45">
                    <FiArrowUpRight size={18} />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[11px] font-semibold tracking-widest uppercase text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    Source Code 
                    <FiGithub size={16} className="text-slate-500 group-hover:text-teal-400 group-hover:rotate-[-10deg] transition-all" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-20 text-center">
           <a 
             href="https://github.com/dedunipahasara" 
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-3.5 px-10 py-4 rounded-full border border-purple-500/20 bg-purple-500/5 text-[11px] font-semibold uppercase tracking-widest text-purple-100 hover:bg-purple-500/10 hover:border-purple-500/50 hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)] transition-all duration-300"
           >
             <FiGithub size={18} className="text-purple-400" />
             See All Projects
           </a>
        </div>
      </div>
    </section>
  );
}