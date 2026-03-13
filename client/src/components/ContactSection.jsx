import React, { useRef, useState } from "react";
import { Mail, Linkedin, Instagram, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const ContactSection = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [isSending, setIsSending] = useState(false);

  const headingRef = useScrollReveal();
  const leftRef    = useScrollReveal(0.1);
  const rightRef   = useScrollReveal(0.1);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    if (formData.get("company")) return;

    try {
      setIsSending(true);
      setStatus({ type: "", msg: "" });

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      setStatus({ type: "success", msg: "Thanks! Your message has been sent." });
      formRef.current.reset();
    } catch (err) {
      setStatus({
        type: "error",
        msg: "Something went wrong sending your message. Please try again or email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-lg">
        <h2
          ref={headingRef}
          className="scroll-reveal text-3xl md:text-5xl font-bold mb-4 text-center"
        >
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-xl text-muted-foreground mb-12">
          Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div ref={leftRef} className="scroll-reveal space-y-10">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <h3 className="text-2xl font-semibold">Email</h3>
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <a
                href="mailto:luciovillena7@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                luciovillena7@gmail.com
              </a>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-2xl font-semibold mb-4">Connect with Me</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="https://www.linkedin.com/in/lucio-ruben-villena-97b6b6289"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.instagram.com/lucio_vil"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div ref={rightRef} className="scroll-reveal reveal-delay-2 bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label htmlFor="name" className="block text-base font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Lucio Ruben Villena..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to chat about..."
                />
              </div>

              <button
                type="submit"
                className="cosmic-button w-full flex items-center justify-center gap-2"
                disabled={isSending}
              >
                Send Message <Send size={16} />
              </button>

              {status.msg && (
                <p className={status.type === "success" ? "text-green-600 text-center" : "text-red-600 text-center"}>
                  {status.msg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};