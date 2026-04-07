import { FiMail, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const whatsappNumber = "94725842331";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const sendEmail = (e) => {
    e.preventDefault();
    toast.loading("Sending message...", { id: "sending" });

    emailjs
      .sendForm(
        "service_cvxz2bo",
        "template_qdatzxa",
        e.target,
        "fU0OXxRknIIaXZ5QS"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", { id: "sending" });
          e.target.reset();
        },
        () => {
          toast.error("Failed to send message.", { id: "sending" });
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center bg-[#0f172a] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-20 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-rose-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">

            <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-purple-300 uppercase">
                Connect
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              Let's{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Talk.
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Have a project in mind or just want to say hi? I’m always open to new ideas and opportunities.
            </p>

            {/* DESKTOP ICONS ONLY */}
            <div className="hidden lg:block space-y-6 pt-4">

              <div className="flex items-center gap-6">
                <FiMail className="text-purple-400 text-2xl" />
                <a href="mailto:thamashadeduni1030@gmail.com" className="text-lg hover:text-purple-300">
                  Email Me
                </a>
              </div>

              <div className="flex items-center gap-6">
                <FaWhatsapp className="text-green-400 text-2xl" />
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-lg hover:text-green-300">
                  WhatsApp Chat
                </a>
              </div>

              <div className="flex items-center gap-6">
                <FaLinkedin className="text-blue-400 text-2xl" />
                <a href="https://www.linkedin.com/in/thamashadeduni" className="text-lg hover:text-blue-300">
                  LinkedIn Profile
                </a>
              </div>

              <div className="flex items-center gap-6">
                <FaGithub className="text-slate-300 text-2xl" />
                <a href="https://github.com/dedunipahasara" target="_blank" rel="noreferrer" className="text-lg hover:text-slate-200">
                  GitHub Profile
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative w-full">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-rose-500/20 rounded-[2rem] blur-2xl" />

            <form
              onSubmit={sendEmail}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-10 md:p-12 rounded-[2rem] space-y-6 sm:space-y-8"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 outline-none"
                required
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message..."
                className="w-full p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 outline-none resize-none"
                required
              />

              <button
                type="submit"
                className="w-full py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-rose-500 font-bold uppercase tracking-widest flex items-center justify-center gap-3"
              >
                Send Message <FiSend />
              </button>
            </form>
          </div>

        </div>

        {/* 🔥 CLEAN BOTTOM SOCIAL ICONS (NO BOX) */}
        <div className="mt-14 flex justify-center">
          <div className="flex items-center gap-10">

            <a
              href="mailto:thamashadeduni1030@gmail.com"
              className="text-slate-300 hover:text-purple-400 transition-transform hover:scale-110"
            >
              <FiMail className="text-3xl" />
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-green-400 transition-transform hover:scale-110"
            >
              <FaWhatsapp className="text-3xl" />
            </a>

                        <a
                href="https://www.linkedin.com/in/thamashadeduni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-transform hover:scale-110 inline-block"
              >
                <FaLinkedin className="text-3xl" />
              </a>

            <a
              href="https://github.com/dedunipahasara"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-slate-100 transition-transform hover:scale-110"
            >
              <FaGithub className="text-3xl" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}