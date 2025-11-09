import { useScrollAnimation } from "../hooks/useScrollAnimation.jsx";

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    {
      number: "1",
      title: "Ask Your Question",
      description: "Speak or type your question in Hindi or English. EduMate understands both!",
      icon: "💬",
    },
    {
      number: "2",
      title: "Get AI-Powered Answers",
      description: "Receive instant explanations through voice or text, tailored to your learning style.",
      icon: "🤖",
    },
    {
      number: "3",
      title: "Watch & Learn",
      description: "Access relevant YouTube videos with automatic summaries to deepen your understanding.",
      icon: "🎬",
    },
    {
      number: "4",
      title: "Study Anytime",
      description: "Review all your answers and notes offline, even without internet connection.",
      icon: "📱",
    },
  ];

  return (
    <section id="how-it-works" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learning made simple in four easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`flex flex-col items-center text-center space-y-4 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              } stagger-${index + 1}`}>
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  {step.number}
                </div>
                <div className="text-5xl transition-transform duration-300 hover:scale-110">{step.icon}</div>
                <h3 className="text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
