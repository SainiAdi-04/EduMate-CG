import { Button } from "@/components/ui/button";
import FloatingIcons from "./FloatingIcons";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <FloatingIcons />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight animate-fade-in-up">
            Your personal AI tutor{" "}
            <span className="inline-flex items-center gap-2">
              <span className="text-primary">📚✨</span>
            </span>{" "}
            that works even offline
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Talk to it, listen to explanations, watch YouTube lessons, and get instant summaries — all in Hindi or English.
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-2">
            Designed for the students of Chhattisgarh — accessible, intelligent, and always there to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up stagger-3">
            <Button size="lg" className="text-lg px-8 py-6 bg-foreground text-background hover:bg-foreground/90 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Start Learning Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
