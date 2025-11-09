import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "../hooks/useScrollAnimation.jsx";

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    {
      icon: "🎤",
      title: "Voice-Powered Learning",
      description: "Ask in Hindi by voice → AI answers with text",
      detail: "Natural conversation in your language. Just speak your question and get instant explanations.",
    },
    {
      icon: "📺",
      title: "YouTube Integration",
      description: "Fetch YouTube videos + show auto summary",
      detail: "Find the best educational videos instantly and get quick summaries so you learn faster.",
    },
    {
      icon: "📡",
      title: "Works Offline",
      description: "Turn off Wi-Fi → still open previous answers and notes",
      detail: "Access your learning history anytime, anywhere. No internet? No problem.",
    },
  ];

  return (
    <section id="features" className="py-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need to learn
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed specifically for students in Chhattisgarh
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-8 bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-border group ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              } stagger-${index + 1}`}
            >
              <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-primary font-semibold mb-3">
                {feature.description}
              </p>
              <p className="text-muted-foreground">
                {feature.detail}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
