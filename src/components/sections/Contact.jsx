import { useState } from "react";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 w-full bg-[var(--background)] text-[var(--text-primary)]"
    >
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-full p-8 max-w-lg bg-[var(--card-bg)] rounded-lg shadow-lg border-[var(--border-color)] hover:-translate-y-1 hover:border-[var(--accent-primary)] transition-all">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-tr from-[var(--accent-gradient-from)] to-[var(--accent-gradient-to)] text-transparent bg-clip-text text-center">
          Get In Touch
        </h2>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://www.github.com/chirang56" target="_blank" rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/chirang56/" target="_blank" rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-400 transition text-2xl">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/cheerungb.gtm" target="_blank" rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition text-2xl">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/chirang560/" target="_blank" rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-500 transition text-2xl">
            <FaInstagram />
          </a>
          <a href="https://wa.me/9867878405" target="_blank" rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 transition text-2xl">
            <FaWhatsapp />
          </a>
        </div>

        {/* Form Section */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition"
              placeholder="Your Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition"
              placeholder="example@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              className="w-full bg-[var(--input-bg)] border border-[var(--input-border)] rounded px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] transition"
              placeholder="Your Message..."
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--accent-primary)] text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:bg-[var(--accent-gradient-to)] hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
