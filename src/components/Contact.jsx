import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
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
        (response) => {
          toast.success("Message sent successfully!", { id: "sending" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          toast.error("Failed to send message. Try again later.", { id: "sending" });
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="h-screen flex items-center bg-gray-900 text-white px-6">
  <div className="max-w-4xl mx-auto text-center w-full">

    <h2 className="text-4xl font-bold mb-6">
      <span className="text-purple-400">Get in</span> Touch
    </h2>
    <p className="text-gray-300 mb-10">
      Let's connect! Send me a message or reach out through social links below.
    </p>

    <form className="max-w-2xl mx-auto space-y-4" onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-3 border border-purple-500/30 rounded-lg bg-gray-800 text-white 
        focus:ring-2 focus:ring-purple-400 outline-none"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="w-full p-3 border border-purple-500/30 rounded-lg bg-gray-800 text-white 
        focus:ring-2 focus:ring-purple-400 outline-none"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        rows="5"
        className="w-full p-3 border border-purple-500/30 rounded-lg bg-gray-800 text-white 
        focus:ring-2 focus:ring-purple-400 outline-none"
        required
      ></textarea>

      <button
        type="submit"
        className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-[0_0_15px_#A855F7] 
        hover:bg-purple-700 transition"
      >
        Send Message
      </button>
    </form>

    <div className="mt-12 flex justify-center gap-8 text-3xl">
      <a
        href="https://github.com/dedunipahasara"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-purple-400 transition shadow-[0_0_10px_#A855F7] 
        hover:shadow-[0_0_18px_#A855F7] rounded-full p-2"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/thamashadeduni"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-purple-400 transition shadow-[0_0_10px_#A855F7] 
        hover:shadow-[0_0_18px_#A855F7] rounded-full p-2"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:thamashadeduni1030@gmail.com"
        className="text-gray-300 hover:text-purple-400 transition shadow-[0_0_10px_#A855F7] 
        hover:shadow-[0_0_18px_#A855F7] rounded-full p-2"
      >
        <FaEnvelope />
      </a>
    </div>

  </div>
</section>


  );
}
