import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const projects = [
  {
    id: 1,
    title: "AI-Powered SQL Agent",
    description:
      "Natural language to optimized SQL using LangChain, LangGraph, PostgreSQL, Pinecone, and Gemini.",
    impact: ["Hybrid schema retrieval", "Graph-aware table selection", "Precision/Recall/F1 evaluation"],
    image: "/projects/sql-agent-new.png",
    tags: ["Python", "LangChain", "LangGraph", "PostgreSQL", "Pinecone", "Gemini API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Snake Game with Deep Reinforcement Learning",
    description:
      "DQN-powered Snake agent with human/AI modes, reward optimization, and real-time learning feedback.",
    impact: ["Custom RL environment", "State-action learning", "Live performance tracking"],
    image: "/projects/ai-snake-game.png",
    tags: ["Python", "Deep Q Network", "Reinforcement Learning", "Pygame", "NumPy", "OpenCV"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Dog Breed Classification System",
    description:
      "Computer Vision app that classifies 120+ dog breeds with CNNs and a Streamlit prediction interface.",
    impact: ["Image augmentation", "TensorFlow/Keras model", "Real-time prediction UI"],
    image: "/projects/dog-breed-new.png",
    tags: ["Python", "TensorFlow", "CNN", "OpenCV", "Streamlit", "Keras"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="section-kicker">Selected Work</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              AI systems across agents, retrieval, reinforcement learning, and
              computer vision.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <ScrollReveal key={project.id} delay={key * 120}>
              <div className="group glass-panel gradient-border rounded-xl overflow-hidden card-hover h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />
                </div>

                <div className="p-6 text-left flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-semibold border border-primary/20 rounded-full bg-primary/10 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-5 flex-1">
                    {project.impact.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="glow-dot" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="rounded-full border border-border p-2.5 text-foreground/80 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="rounded-full border border-border p-2.5 text-foreground/80 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <a
            className="cosmic-button w-fit inline-flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/udhaya30012004"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
