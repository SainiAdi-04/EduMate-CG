const FloatingIcons = () => {
  const icons = [
    { emoji: "📖", delay: "0s", duration: "20s", x: "10%", y: "20%" },
    { emoji: "🎓", delay: "2s", duration: "25s", x: "85%", y: "15%" },
    { emoji: "✏️", delay: "4s", duration: "22s", x: "15%", y: "70%" },
    { emoji: "💡", delay: "1s", duration: "24s", x: "80%", y: "65%" },
    { emoji: "🎯", delay: "3s", duration: "23s", x: "20%", y: "45%" },
    { emoji: "📝", delay: "5s", duration: "21s", x: "75%", y: "40%" },
    { emoji: "🌟", delay: "2.5s", duration: "26s", x: "50%", y: "10%" },
    { emoji: "💬", delay: "1.5s", duration: "19s", x: "90%", y: "50%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute text-4xl md:text-6xl opacity-20 animate-float"
          style={{
            left: icon.x,
            top: icon.y,
            animationDelay: icon.delay,
            animationDuration: icon.duration,
          }}
        >
          {icon.emoji}
        </div>
      ))}
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingIcons;
