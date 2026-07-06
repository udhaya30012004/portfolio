import {
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description:
          "Thank you for your message. I'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactItems = [
    { icon: Mail, title: "Email", value: "udhaya3014@gmail.com", href: "mailto:udhaya3014@gmail.com" },
    { icon: Phone, title: "Phone", value: "+91 XXXXX XXXXX", href: "#" },
    { icon: MapPin, title: "Location", value: "Chennai, Tamil Nadu, India", href: null },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/udhaya-kumar-3a408b228/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/udhaya30012004", label: "GitHub" },
    { icon: Mail, href: "mailto:udhaya3014@gmail.com", label: "Email" },
    { icon: FileText, href: "https://drive.google.com/file/d/13Rzfxj9LQFbKf-IRgG86jdhqh2TVIGDb/view?usp=sharing", label: "Resume" },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="section-kicker">Contact</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Open to AI/ML roles, GenAI projects, and intelligent automation
              collaborations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal className="space-y-8 text-left">
            <h3 className="text-2xl font-bold">Contact Information</h3>

            <div className="space-y-5">
              {contactItems.map(({ icon: Icon, title, value, href }) => (
                <div key={title} className="flex items-start space-x-4 group">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{title}</h4>
                    {href ? (
                      <a
                        href={href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-4"> Connect With Me</h4>
              <div className="flex space-x-3 justify-center">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className="rounded-full border border-border p-3 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 magnetic-hover"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={140}>
          <div className="glass-panel gradient-border p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sparkles size={20} className="text-primary" />
              Send a Message
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full min-h-32 px-4 py-3 rounded-xl border border-input bg-background/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 transition-all duration-300 resize-none"
                  placeholder="Hi Udhaya, I'd like to discuss an opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
