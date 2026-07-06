import {
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
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
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/20">
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

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:udhaya3014@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    udhaya3014@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 XXXXX XXXXX
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Chennai, Tamil Nadu, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/udhaya-kumar-3a408b228/"
                  target="_blank"
                  className="rounded-full border border-border p-3 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/udhaya30012004"
                  target="_blank"
                  className="rounded-full border border-border p-3 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Github />
                </a>
                <a
                  href="mailto:udhaya3014@gmail.com"
                  target="_blank"
                  className="rounded-full border border-border p-3 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <Mail />
                </a>
                <a
                  href="https://drive.google.com/file/d/13Rzfxj9LQFbKf-IRgG86jdhqh2TVIGDb/view?usp=sharing"
                  target="_blank"
                  className="rounded-full border border-border p-3 hover:border-primary/50 hover:text-primary transition-colors"
                >
                  <FileText />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={140}>
          <div className="glass-panel gradient-border p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full min-h-32 px-4 py-3 rounded-md border border-input bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hi Udhaya, I'd like to discuss an opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
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
