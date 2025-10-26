import skillsImg from "../assets/img1.png"; // adjust path

export default function Skills() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "DaisyUI",
    "Tailwind CSS",
    "Zustand",
    "Redux"
    
  ];

  const backendSkills = ["Node.js", "Express.js", "Java", "Spring Boot", "Git"];
  const databaseSkills = ["MongoDB", "MySQL", "Firebase"];

  const getBadgeClass = (index) =>
    index % 2 === 0
      ? "border-blue-400 text-blue-300 hover:bg-blue-500/20"
      : "border-purple-400 text-purple-300 hover:bg-purple-500/20";

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white px-6 py-20 flex flex-col items-center justify-center"
    >
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
        <span className="text-blue-400">My</span>{" "}
        <span className="text-purple-400">Skills</span>
      </h2>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-14">
        {/* Skills LEFT */}
        <div className="md:w-2/3 flex flex-col md:flex-row gap-10 text-left">
          {/* Frontend */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Frontend</h3>
            <ul className="flex flex-wrap gap-3">
              {frontendSkills.map((skill, i) => (
                <li
                  key={i}
                  className={`px-4 py-2 rounded-full border ${getBadgeClass(
                    i
                  )} transition`}
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Backend</h3>
            <ul className="flex flex-wrap gap-3">
              {backendSkills.map((skill, i) => (
                <li
                  key={i}
                  className={`px-4 py-2 rounded-full border ${getBadgeClass(
                    i
                  )} transition`}
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Databases */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Databases</h3>
            <ul className="flex flex-wrap gap-3">
              {databaseSkills.map((skill, i) => (
                <li
                  key={i}
                  className={`px-4 py-2 rounded-full border ${getBadgeClass(
                    i
                  )} transition`}
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image RIGHT */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img
            src={skillsImg}
            alt="Skills Illustration"
            className="w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
