// "use client";

// import React, { useRef, useEffect } from "react";

// interface ParticleProps {
//   x: number;
//   y: number;
//   color: string;
//   radius: number;
//   speedX: number;
//   speedY: number;
//   life: number;
// }

// class Particle implements ParticleProps {
//   x: number;
//   y: number;
//   color: string;
//   radius: number;
//   speedX: number;
//   speedY: number;
//   life: number;

//   constructor(x: number, y: number, color: string) {
//     this.x = x;
//     this.y = y;
//     this.color = color;
//     this.radius = Math.random() * 3 + 1;
//     this.speedX = (Math.random() - 0.5) * 8;
//     this.speedY = (Math.random() - 0.5) * 8;
//     this.life = 100;
//   }

//   update() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//     this.speedY += 0.1; // gravity
//     this.life--;
//   }

//   draw(ctx: CanvasRenderingContext2D) {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   }
// }

// const FireworksCanvas: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const particles = useRef<Particle[]>([]);

//   const explode = (x: number, y: number) => {
//     for (let i = 0; i < 60; i++) {
//       particles.current.push(
//         new Particle(x, y, `hsl(${Math.random() * 360}, 100%, 60%)`)
//       );
//     }
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     // enable transparency
//     const ctx = canvas.getContext("2d", { alpha: true });
//     if (!ctx) return;

//     let animationFrameId: number;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const autoExplode = () => {
//       explode(
//         Math.random() * canvas.width,
//         Math.random() * canvas.height * 0.7
//       );
//     };
//     const interval = setInterval(autoExplode, 800);

//     const animate = () => {
//       // ✅ Transparent fading trail — no black background
//       ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; // a faint dark alpha overlay
//       ctx.globalCompositeOperation = "destination-out";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//       ctx.globalCompositeOperation = "lighter"; // make colors additively blend (glow)

//       particles.current.forEach((p, i) => {
//         p.update();
//         p.draw(ctx);
//         if (p.life <= 0) particles.current.splice(i, 1);
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resize);
//       cancelAnimationFrame(animationFrameId);
//       clearInterval(interval);
//     };
//   }, []);

//   const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     explode(x, y);
//   };

//   return (
//     <canvas
//       ref={canvasRef}
//       onClick={handleClick}
//       className="fixed z-50 top-0 left-0 w-full h-full pointer-events-auto"
//       style={{
//         backgroundColor: "transparent",
//         cursor: "crosshair",
//       }}
//     />
//   );
// };

// export default FireworksCanvas;

// "use client";

// import React, { useRef, useEffect } from "react";

// interface ParticleProps {
//   x: number;
//   y: number;
//   color: string;
//   radius: number;
//   speedX: number;
//   speedY: number;
//   alpha: number;
//   decay: number;
//   life: number;
// }

// class Particle implements ParticleProps {
//   x: number;
//   y: number;
//   color: string;
//   radius: number;
//   speedX: number;
//   speedY: number;
//   alpha: number;
//   decay: number;
//   life: number;

//   constructor(x: number, y: number, color: string) {
//     this.x = x;
//     this.y = y;
//     this.color = color;
//     this.radius = Math.random() * 3 + 0.5;
//     const angle = Math.random() * Math.PI * 2;
//     const power = Math.random() * 6 + 2; // varied speed
//     this.speedX = Math.cos(angle) * power;
//     this.speedY = Math.sin(angle) * power;
//     this.alpha = 1;
//     this.decay = Math.random() * 0.015 + 0.005; // random fade speed
//     this.life = 100;
//   }

//   update() {
//     // air resistance + gravity
//     this.speedX *= 0.98; // friction
//     this.speedY *= 0.98;
//     this.speedY += 0.05; // gentle gravity
//     this.x += this.speedX;
//     this.y += this.speedY;
//     this.alpha -= this.decay;
//     this.life--;
//   }

//   draw(ctx: CanvasRenderingContext2D) {
//     ctx.save();
//     ctx.globalAlpha = this.alpha;
//     ctx.beginPath();
//     const gradient = ctx.createRadialGradient(
//       this.x,
//       this.y,
//       0,
//       this.x,
//       this.y,
//       this.radius * 3
//     );
//     gradient.addColorStop(0, "white");
//     gradient.addColorStop(0.2, this.color);
//     gradient.addColorStop(1, "transparent");
//     ctx.fillStyle = gradient;
//     ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.restore();
//   }
// }

// const FireworksCanvas: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const particles = useRef<Particle[]>([]);

//   const explode = (x: number, y: number) => {
//     const colorBase = Math.random() * 360;
//     for (let i = 0; i < 80; i++) {
//       particles.current.push(
//         new Particle(
//           x,
//           y,
//           `hsl(${colorBase + Math.random() * 30 - 15}, 100%, 60%)`
//         )
//       );
//     }
//   };

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d", { alpha: true });
//     if (!ctx) return;

//     let animationFrameId: number;

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const autoExplode = () => {
//       explode(
//         Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
//         Math.random() * canvas.height * 0.5 + canvas.height * 0.1
//       );
//     };
//     const interval = setInterval(autoExplode, 1200);

//     const animate = () => {
//       // Add a soft fade trail (transparent, not black)
//       ctx.globalCompositeOperation = "destination-out";
//       ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       ctx.globalCompositeOperation = "lighter"; // additive blending for glow

//       particles.current.forEach((p, i) => {
//         p.update();
//         p.draw(ctx);
//         if (p.alpha <= 0 || p.life <= 0) particles.current.splice(i, 1);
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resize);
//       cancelAnimationFrame(animationFrameId);
//       clearInterval(interval);
//     };
//   }, []);

//   const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     explode(x, y);
//   };

//   return (
//     <canvas
//       ref={canvasRef}
//       onClick={handleClick}
//       className="fixed z-50 top-0 left-0 w-full h-full pointer-events-auto"
//       style={{
//         backgroundColor: "transparent",
//         cursor: "crosshair",
//       }}
//     />
//   );
// };

// export default FireworksCanvas;

"use client";

import React, { useRef, useEffect, useState } from "react";

interface ParticleProps {
  x: number;
  y: number;
  color: string;
  radius: number;
  speedX: number;
  speedY: number;
  alpha: number;
  decay: number;
  life: number;
}

class Particle implements ParticleProps {
  x: number;
  y: number;
  color: string;
  radius: number;
  speedX: number;
  speedY: number;
  alpha: number;
  decay: number;
  life: number;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = Math.random() * 3 + 0.5;
    const angle = Math.random() * Math.PI * 2;
    const power = Math.random() * 6 + 2; // varied speed
    this.speedX = Math.cos(angle) * power;
    this.speedY = Math.sin(angle) * power;
    this.alpha = 1;
    this.decay = Math.random() * 0.015 + 0.005; // random fade speed
    this.life = 100;
  }

  update() {
    // air resistance + gravity
    this.speedX *= 0.98; // friction
    this.speedY *= 0.98;
    this.speedY += 0.05; // gentle gravity
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= this.decay;
    this.life--;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.radius * 3
    );
    gradient.addColorStop(0, "white");
    gradient.addColorStop(0.2, this.color);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

const FireworksCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);
  const [showWishes, setShowWishes] = useState(true);

  const explode = (x: number, y: number) => {
    const colorBase = Math.random() * 360;
    for (let i = 0; i < 80; i++) {
      particles.current.push(
        new Particle(
          x,
          y,
          `hsl(${colorBase + Math.random() * 30 - 15}, 100%, 60%)`
        )
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWishes(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const autoExplode = () => {
      explode(
        Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
        Math.random() * canvas.height * 0.5 + canvas.height * 0.1
      );
    };
    const interval = setInterval(autoExplode, 1200);

    const animate = () => {
      // Add a soft fade trail (transparent, not black)
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter"; // additive blending for glow

      particles.current.forEach((p, i) => {
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0 || p.life <= 0) particles.current.splice(i, 1);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      clearInterval(interval);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    explode(x, y);
  };

  return (
    <div className="relative">
      {/* Fireworks Canvas - now on top */}
      <canvas
        ref={canvasRef}
        onClick={handleClick}
        className={`fixed z-40 top-0 left-0 w-full h-full pointer-events-auto ${
          !showWishes && "hidden"
        }`}
        style={{
          backgroundColor: "transparent",
          //   cursor: "crosshair",
          animation: "fadeOut 10s ease-out forwards",
        }}
      />
      {/* Close Button */}
      {showWishes && (
        <button
          onClick={() => setShowWishes(false)}
          className="fixed z-60 top-5 right-5 rounded-full bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700 transition"
        >
          Close
        </button>
      )}

      {/* Slight background dimming behind the text */}
      {showWishes && (
        <div
          className="fixed  inset-0 z-30 bg-black/40 backdrop-blur-sm animate-fadeOut"
          style={{
            animation: "fadeOut 10s ease-out forwards",
          }}
        ></div>
      )}

      {/* Text - below fireworks but still glowing */}
      {showWishes && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center z-50 text-center animate-fadeOut"
          style={{
            color: "#FFD700",
            fontSize: "4rem",
            fontWeight: "bold",
            textShadow:
              "0 0 20px #FFD700, 0 0 40px #FFA500, 0 0 60px #FF4500, 0 0 80px #FF8C00",
            fontFamily: "cursive",
            animation: "fadeOut 10s ease-out forwards",
          }}
        >
          <p>✨ Happy Diwali ✨</p>
          <p
            style={{
              fontSize: "1.5rem",
              color: "#fff",
              textShadow:
                "0 0 10px #FFA500, 0 0 20px #FF8C00, 0 0 40px #FF4500",
            }}
          >
            GoWappily Infotech
          </p>
        </div>
      )}

      {/* Keyframes */}
      <style jsx>{`
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          70% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 0;
            transform: scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};

export default FireworksCanvas;
