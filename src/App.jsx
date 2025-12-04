import { useState, useEffect } from "react";
import "./App.css"

export default function BirthdayFireworks() {
  const [rocketLaunched, setRocketLaunched] = useState(false);
  const [explode, setExplode] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (rocketLaunched) {
      setTimeout(() => setExplode(true), 1800);
      setTimeout(() => setShowText(true), 3200);
    }
  }, [rocketLaunched]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center text-white">
      {!rocketLaunched && (
        <button
          className="absolute top-5 px-6 py-3 bg-pink-600 rounded-xl text-xl font-bold z-50 hover:bg-pink-700"
          onClick={() => setRocketLaunched(true)}
        >
          Launch Rocket 🚀
        </button>
      )}

      {/* Background Fireworks */}
      <BackgroundFireworks />

      {/* Rocket */}
      {rocketLaunched && !explode && <Rocket />}
          

      {/* Explosion */}
      {explode && <BigExplosion />}    

      {/* Text */}
      {showText && (
        <div className="absolute text-center fade-in">
          <h1 className="text-6xl font-extrabold text-pink-400 drop-shadow-2xl">HAPPY BIRTHDAY ZOYA🎉</h1>
        </div>
      )}

      <style>{`
        .rocket {
          position: absolute;
          bottom: -80px;
          animation: launch 2s linear forwards;
        }
        @keyframes launch {
          0% { transform: translateY(0); }
          100% { transform: translateY(-120vh); }
        }

        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
          animation: explode 1.2s ease-out forwards;
        }
        @keyframes explode {
          0% { transform: translate(0,0) scale(1); opacity: 1; }
          100% { transform: translate(var(--x), var(--y)) scale(0.2); opacity: 0; }
        }

        .fade-in { animation: fadein 2s forwards; }
        @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }

        /* Background fireworks */
        .bg-firework {
          position: absolute;
          width: 5px;
          height: 5px;
          background: white;
          border-radius: 50%;
          animation: bg-burst 2s infinite;
        }
        @keyframes bg-burst {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(20); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

// Rocket Component
function Rocket() {
  return (
    <div className="rocket">
      <div className="w-6 h-10 bg-red-600 mx-auto rounded-t-lg"></div>
      <div className="w-4 h-4 bg-yellow-300 mx-auto animate-ping"></div>
    </div>
  );
}

// Explosion Component
function BigExplosion() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="absolute w-1 h-1">
      {particles.map((_, i) => {
        const angle = (i / particles.length) * Math.PI * 2;
        const distance = 150;
        return (
          <div
            key={i}
            className="particle"
            style={{
              "--x": `${Math.cos(angle) * distance}px`,
              "--y": `${Math.sin(angle) * distance}px`,
              background: randomColor(),
            }}
          ></div>
        );
      })}
    </div>
  );
}

function randomColor() {
  const colors = ["#ff4d4d", "#4dd2ff", "#ffff66", "#ff66ff", "#66ff66"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Background fireworks
function BackgroundFireworks() {
  const sparks = Array.from({ length: 12 });

  return (
    <>
      {sparks.map((_, i) => (
        <div
          key={i}
          className="bg-firework"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            background: randomColor(),
          }}
        ></div>
      ))}
    </>
  );
}
