import React, { useState, useEffect } from "react";
import "./App.css"
export default function BirthdayFireworks() {
  const [rocketLaunched, setRocketLaunched] = useState(false);
  const [explode, setExplode] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (rocketLaunched) {
      const t1 = setTimeout(() => setExplode(true), 1800);
      const t2 = setTimeout(() => setShowText(true), 3200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
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

      {/* Rocket (visible while launched but before explode) */}
      {rocketLaunched && !explode && <Rocket />}

      {/* Explosion */}
      {explode && <BigExplosion />}

      {/* Text */}
      {showText && (
        <div className="absolute text-center fade-in z-40">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-pink-400 drop-shadow-2xl">
            HAPPY BIRTHDAY ZOYA🎉
          </h1>
        </div>
      )}

      <style>{`
        /* Rocket launch */
        .rocket {
          position: absolute;
          bottom: -120px;
          left: 50%;
          transform: translateX(-50%);
          animation: launch 1.9s ease-out forwards;
          z-index: 30;
        }
        @keyframes launch {
          0% { transform: translateX(-50%) translateY(0); }
          100% { transform: translateX(-50%) translateY(-120vh); }
        }

        /* Explosion particle */
        .particle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: white;
          animation: explode 1.6s ease-out forwards;
        }
        @keyframes explode {
          0% { transform: translate(0,0) scale(1); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translate(var(--x), var(--y)) scale(0.2); opacity: 0; }
        }

        /* Fade-in text */
        @keyframes fadein {
          0% { opacity: 0; transform: scale(0.6); }
          100% { opacity: 1; transform: scale(1); }
        }
        .fade-in { animation: fadein 1s ease-out forwards; }

        /* Background fireworks */
        .bg-firework {
          position: absolute;
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          animation: bg-burst 2.4s infinite;
          opacity: 0.95;
        }
        @keyframes bg-burst {
          0% { transform: scale(1); opacity: 1; }
          60% { opacity: 0.9; }
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
      <div className="w-6 h-12 bg-red-600 mx-auto rounded-t-lg relative">
        {/* flame */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-6 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #fff0, #ffec99)" }}></div>
      </div>
      <div className="w-4 h-4 bg-yellow-300 mx-auto mt-2 animate-ping"></div>
    </div>
  );
}

// Explosion Component
function BigExplosion() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="absolute left-1/2 top-20 transform -translate-x-1/2 z-40" style={{ width: 0, height: 0 }}>
      {particles.map((_, i) => {
        const angle = (i / particles.length) * Math.PI * 2;
        const distance = 160 + Math.random() * 80;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance * (0.9 + Math.random() * 0.3);
        return (
          <div
            key={i}
            className="particle"
            style={{
              ['--x']: `${x}px`,
              ['--y']: `${y}px`,
              background: randomColor(),
            }}
          ></div>
        );
      })}
    </div>
  );
}

function randomColor() {
  const colors = ["#ff4d4d", "#ffb84d", "#fff66b", "#66ff66", "#66d9ff", "#c966ff", "#ff66d9"];
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
            top: `${Math.random() * 80}%`,
            animationDelay: `${Math.random() * 3}s`,
            background: randomColor(),
          }}
        ></div>
      ))}
    </>
  );
}
