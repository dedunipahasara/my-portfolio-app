import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-900 px-6">
      <div className="text-center">

        {/* Greeting */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white flex items-center justify-center gap-3">
          Hi, I'm{" "}
          <span className="text-purple-400">
            <Typewriter
              words={["Thamasha"]}
              loop={0}
              cursor
              cursorStyle=""
              typeSpeed={120}
            />
          </span>
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
        </h1>

        {/* Subtitle */}
        <p className="text-md sm:text-lg md:text-xl mt-4 text-gray-300 max-w-xl mx-auto">
          Full-Stack Developer | React | React Native | Node.js | Java | Spring Boot | MongoDB | MySQL
        </p>

        {/* Button */}
          <a
              href="/Thamasha-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 rounded-lg text-white border border-purple-400 
                        hover:bg-purple-600 transition shadow-purple-400 shadow-md inline-block"
          >
                   Show My CV →
         </a>

        {/* Waving Hand CSS */}
        <style jsx>{`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            15% { transform: rotate(14deg); }
            30% { transform: rotate(-8deg); }
            40% { transform: rotate(14deg); }
            50% { transform: rotate(-4deg); }
            60% { transform: rotate(10deg); }
            70% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }
          .animate-wave {
            animation: wave 2s infinite;
            display: inline-block;
          }
        `}</style>
      </div>
    </section>
  );
}
