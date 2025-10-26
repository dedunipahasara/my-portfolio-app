import { useState } from "react";

// Import your project images from assets
import sweatyAppImg from "../assets/sweety.png";
import groovoImg from "../assets/groovo.jpeg";
import diaryImg from "../assets/web-dairy.jpeg";
import messengerImg from "../assets/messenger.jpeg";
import recipeImg from "../assets/recipe-sharing.jpeg";
import noteTakerImg from "../assets/note-taker.jpeg";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const data = [
    { name: "Sweaty App", link: "https://github.com/dedunipahasara/Blog.git", image: sweatyAppImg },
    { name: "Music Website - Groovo", link: "https://github.com/dedunipahasara/Groovo_music.git", image: groovoImg },
    { name: "Web Diary Website & Mobile App", link: "https://github.com/dedunipahasara/dairy-web-mobile.git", image: diaryImg },
    { name: "Messenger Web", link: "https://github.com/dedunipahasara/mern-chat-socketio.git", image: messengerImg },
    { name: "Recipe Sharing Website", link: "https://github.com/dedunipahasara/receipe-sharing-website.git", image: recipeImg },
    { name: "Note Taker Mobile App", link: "https://github.com/dedunipahasara/note-taker-mobile-app.git", image: noteTakerImg }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white flex items-center px-6 py-12">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-purple-400">My</span> Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((p, i) => {
            const isSelected = selected === i;
            return (
              <div
                key={i}
                onClick={() => setSelected(i)}
                className={`p-3 bg-gray-800 rounded-xl border border-purple-500/30 
                  ${isSelected 
                    ? "shadow-[0_0_25px_#A855F7]" 
                    : "shadow-[0_0_8px_#A855F7] hover:shadow-[0_0_20px_#A855F7]"} 
                  transition cursor-pointer flex flex-col justify-between
                  h-72 w-full transform hover:scale-105`}
              >
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-36 md:h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold text-lg mb-2 text-purple-400">
                  {p.name}
                </h3>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition mt-auto text-sm"
                >
                  View Code →
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
