import { Bot, BrainCircuit, DatabaseZap } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const AboutSection = () => {
  const focusAreas = [
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      description: "Predictive models, vision systems, and reliable evaluation.",
    },
    {
      icon: Bot,
      title: "Generative AI",
      description: "LLM apps, RAG pipelines, vector search, and AI agents.",
    },
    {
      icon: DatabaseZap,
      title: "AI Solutions",
      description: "Automation workflows that convert data into decisions.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="section-kicker">Profile</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal className="space-y-6 text-left">
            <h3 className="text-3xl font-bold">
              AI Engineer focused on practical intelligence.
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I build ML and GenAI systems across AI agents, RAG, LLM apps,
              SQL automation, reinforcement learning, and computer vision.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My work is practical: clean pipelines, measurable outputs, and
              products that help people make faster decisions.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                ["3+", "AI Projects"],
                ["18", "Core Skills"],
                ["MCA", "Student"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="glass-panel rounded-lg p-4 text-center"
                >
                  <div className="text-2xl font-black text-primary">
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/13Rzfxj9LQFbKf-IRgG86jdhqh2TVIGDb/view?usp=sharing"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6">
            {focusAreas.map(({ icon: Icon, title, description }, index) => (
              <ScrollReveal key={title} delay={index * 120}>
                <div className="gradient-border glass-panel p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 shadow-[0_0_28px_rgba(45,212,191,0.12)]">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-xl">{title}</h4>
                      <p className="text-muted-foreground mt-1">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
