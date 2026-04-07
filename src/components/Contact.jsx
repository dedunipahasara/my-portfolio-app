import { FiMail, FiSend } from "react-icons/fi"; 
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"; 
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const whatsappNumber = "94771234567"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const sendEmail = (e) => {
    e.preventDefault();
    toast.loading("Sending message...", { id: "sending" });

    emailjs.sendForm("service_cvxz2bo", "template_qdatzxa", e.target, "fU0OXxRknIIaXZ5QS")
      .then(() => {
        toast.success("Message sent successfully!", { id: "sending" });
        e.target.reset();
      }, (error) => {
        toast.error("Failed to send message.", { id: "sending" });
      });
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-8 py-24 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-500/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div className="mb-4 inline-block px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md">
              <span className="text-xs font-bold tracking-[0.4em] text-purple-300 uppercase">Connect</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tight leading-none">
              Let's <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Talk.</span>
            </h2>

            {/* Added Description */}
            <p className="text-slate-400 text-lg md:text-xl max-w-md leading-relaxed">
              Have a project in mind or just want to say hi? I’m always open to discussing new opportunities, 
              creative ideas, or original visions.
            </p>
            
            {/* Contact List */}
            <div className="space-y-6 pt-4">
              
              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-500">
                  <FiMail className="text-purple-400 text-2xl" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Email Me</p>
                  <a href="mailto:thamashadeduni1030@gmail.com" className="text-xl font-medium hover:text-purple-300 transition-colors">thamashadeduni1030@gmail.com</a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-all duration-500">
                  <FaWhatsapp className="text-green-400 text-2xl" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">WhatsApp</p>
                  <a href={whatsappLink} target="_blank" rel="noreferrer" className="text-xl font-medium hover:text-green-300 transition-colors italic">Chat on WhatsApp</a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-500">
                  <FaLinkedin className="text-blue-400 text-2xl" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Professional</p>
                  <a href="https://www.linkedin.com/in/thamashadeduni" target="_blank" rel="noreferrer" className="text-xl font-medium hover:text-blue-300 transition-colors">Thamasha Deduni</a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-slate-500/20 group-hover:border-slate-500/50 transition-all duration-500">
                  <FaGithub className="text-slate-300 text-2xl" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1">Development</p>
                  <a href="https://github.com/dedunipahasara" target="_blank" rel="noreferrer" className="text-xl font-medium hover:text-white transition-colors">dedunipahasara</a>
                </div>
              </div>

            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-rose-500/20 rounded-[3.8rem] blur-2xl"></div>
            
            <form onSubmit={sendEmail} className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-12 rounded-[3.5rem] space-y-8 shadow-2xl shadow-black/50">
              <div className="space-y-6">
                <input type="text" name="name" placeholder="Your Name" className="w-full p-5 rounded-[2rem] bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none transition-all placeholder:text-slate-500" required />
                <input type="email" name="email" placeholder="Email Address" className="w-full p-5 rounded-[2rem] bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none transition-all placeholder:text-slate-500" required />
                <textarea name="message" placeholder="Tell me about your project..." rows="4" className="w-full p-6 rounded-[2.5rem] bg-white/5 border border-white/10 focus:border-purple-500/50 outline-none transition-all resize-none placeholder:text-slate-500" required></textarea>
              </div>

              <button type="submit" className="w-full py-5 rounded-[2rem] bg-gradient-to-r from-purple-600 to-rose-500 text-white font-black uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-xl shadow-purple-500/20">
                Send Message <FiSend className="text-xl" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}