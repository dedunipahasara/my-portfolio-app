import profileImg from "../assets/mine.png"; // adjust path if needed

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gray-900 text-white px-6 py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">

        {/* Image */}
        <div className="flex justify-center md:justify-start md:w-1/2">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_30px_#A855F7]">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-purple-400">About</span> Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
            Hi! I'm <span className="text-purple-400 font-semibold">Thamasha Deduni</span>, a passionate 
            <span className="text-purple-400 font-semibold"> Full-Stack Developer</span> who loves creating 
            clean, modern, and meaningful digital experiences. I enjoy building responsive web and 
            mobile applications that solve real problems.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
            I mainly work with 
            <span className="text-purple-400 font-semibold"> React, React Native, Node.js, Java, Spring Boot, MongoDB, and MySQL</span>, 
            and I’m always eager to learn new tools and technologies to improve my craft.
          </p>

          <a
            href="#projects"
            className="inline-block bg-purple-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-purple-500 shadow-md hover:bg-purple-700 transition text-sm sm:text-base"
          >
            View My Work →
          </a>
        </div>

      </div>
    </section>
  );
}
