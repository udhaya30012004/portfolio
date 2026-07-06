import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ScrollReveal";

const skills = [
  // AI/ML
  { name: "Python", level: 95, category: "ai/ml" },
  { name: "SQL", level: 90, category: "ai/ml" },
  { name: "TensorFlow", level: 85, category: "ai/ml" },
  { name: "Scikit-learn", level: 90, category: "ai/ml" },
  { name: "OpenCV", level: 85, category: "ai/ml" },

  // Generative AI
  { name: "LangChain", level: 90, category: "genai" },
  { name: "LangGraph", level: 85, category: "genai" },
  { name: "Transformers", level: 85, category: "genai" },
  { name: "RAG", level: 90, category: "genai" },
  { name: "AI Agents", level: 85, category: "genai" },

  // Tools
  { name: "FastAPI", level: 80, category: "tools" },
  { name: "PostgreSQL", level: 85, category: "tools" },
  { name: "MySQL", level: 90, category: "tools" },
  { name: "Pinecone", level: 80, category: "tools" },
  { name: "ChromaDB", level: 80, category: "tools" },
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Linux", level: 80, category: "tools" },
];

const categories = ["all", "ai/ml", "genai", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="section-kicker">Toolkit</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              My <span className="text-gradient">Skills</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_24px_rgba(45,212,191,0.18)]"
                  : "bg-card/50 border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              )}
            >
              {category}
            </button>
          ))}
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <ScrollReveal key={skill.name} delay={(key % 6) * 70}>
              <div className="glass-panel gradient-border p-5 card-hover">
                <div className="flex items-center justify-between text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-xs font-bold text-primary">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-secondary/70 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-linear-to-r from-[var(--gradient-from)] via-primary to-[var(--gradient-to)] origin-left"
                    style={{ width: skill.level + "%" }}
                  />
                </div>

                <div className="mt-3 text-left text-xs uppercase font-bold tracking-wider text-muted-foreground">
                  {skill.category}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
