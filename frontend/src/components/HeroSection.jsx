import { ArrowDown, Bot, BrainCircuit, DatabaseZap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-[22%] h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl animate-pulse-subtle" />
        <div className="absolute right-[14%] bottom-[24%] h-56 w-56 rounded-full bg-violet-500/10 blur-3xl animate-float" />
      </div>

      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-7">
          <div className="opacity-0 animate-fade-in">
            <span className="section-kicker">
              <BrainCircuit size={15} />
              AI/ML Engineer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Udhaya
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Kumar
            </span>
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
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/50 px-4 py-2 text-sm font-semibold text-muted-foreground backdrop-blur"
              >
                <Icon size={16} className="text-primary" />
                {label}
              </span>
            ))}
          </div>

          <div className="pt-3 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
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
