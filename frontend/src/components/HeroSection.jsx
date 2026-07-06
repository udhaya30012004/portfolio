import { ArrowDown, Bot, BrainCircuit, DatabaseZap, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-[8%] top-[18%] h-64 w-64 rounded-full blur-3xl animate-float-slow"
          style={{ background: "var(--hero-orb-1)" }}
        />
        <div
          className="absolute right-[12%] top-[30%] h-72 w-72 rounded-full blur-3xl animate-float-reverse"
          style={{ background: "var(--hero-orb-2)" }}
        />
        <div
          className="absolute left-[40%] bottom-[15%] h-56 w-56 rounded-full blur-3xl animate-float"
          style={{ background: "var(--hero-orb-3)" }}
        />
      </div>

      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-8">
          <div className="opacity-0 animate-fade-in">
            <span className="section-kicker">
              <Sparkles size={14} className="text-primary" />
              AI/ML Engineer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Udhaya Kumar</span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2"></span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I build AI agents, RAG systems, and ML products that turn data into
            decisions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-in-delay-4">
            {[
              { icon: Bot, label: "Agentic AI" },
              { icon: DatabaseZap, label: "RAG + SQL" },
              { icon: BrainCircuit, label: "ML Systems" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 glass-panel px-4 py-2.5 text-sm font-semibold text-muted-foreground magnetic-hover cursor-default"
              >
                <Icon size={16} className="text-primary" />
                {label}
              </span>
            ))}
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button inline-flex items-center gap-2">
              <Sparkles size={16} />
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
