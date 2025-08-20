import React, { useEffect, useRef } from "react";
import "./Preloader.css"; // Move the CSS there

export default function TerminalPreloader() {
  const screenRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const pctRef = useRef<HTMLDivElement | null>(null);

  const preloaderRef = useRef(null);
  const pageRef = useRef(null);
  const enterRef = useRef(null);
  const matrixRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const conf = {
      welcomeText: "Welcome to GoWappily Technologies",
      minShowMs: 1400,
      holdAfterCompleteMs: 420,
      useGate: true,
      oncePerSession: false,
      ambientAudio: false,
      extraMessages: [
        "mounting /sys/GoWappily",
        "verifying integrity",
        "seeding rng",
        "warming up cache",
        "optimizing shaders",
        "loading ai kernels",
        "validating signatures",
        "syncing time",
        "checking sensors",
        "handshake complete",
        "ready",
      ],
    };

    const scr = screenRef.current;
    const bar = barRef.current;

    const pct = pctRef?.current;
    const enter = document.querySelector<HTMLElement>(".enter");
    const preloader = document.querySelector<HTMLElement>(".preloader");
    const page = document.querySelector<HTMLElement>(".page");

    // const rand = (a, b) => Math.random() * (b - a) + a;
    const rand = (a: number, b: number): number => Math.random() * (b - a) + a;

    const wait = (ms: number): Promise<void> =>
      new Promise((r) => setTimeout(r, ms));

    const el = (tag: string, cls?: string): HTMLElement => {
      const n = document.createElement(tag);
      if (cls) n.className = cls;
      return n;
    };

    const fakeIP = () =>
      `${Math.floor(rand(5, 240))}.${Math.floor(rand(1, 254))}.${Math.floor(
        rand(1, 254)
      )}.${Math.floor(rand(2, 254))}`;
    const fakeMAC = () =>
      Array.from({ length: 6 })
        .map(() => Math.floor(rand(0, 255)).toString(16).padStart(2, "0"))
        .join(":");
    const fakeHash = (len = 32) => {
      let s = "";
      while (s.length < len) s += Math.floor(rand(0, 16)).toString(16);
      return s;
    };
    const fakeLatency = () =>
      (Math.random() * 300 + Math.random() * 40).toFixed(1) + "ms";
    const timestamp = () => new Date().toLocaleString();

    async function typeLine(
      content: string | (() => string),
      cls: string = "",
      min: number = 6,
      max: number = 20
    ): Promise<void> {
      const scr = screenRef.current;

      if (!scr) return; // Prevents runtime crash if scr is null
      const line = el("div", `line ${cls}`.trim());
      // scr.appendChild(line);
      scr.appendChild(line); // ✅ now scr is HTMLDivElement

      const text = typeof content === "function" ? content() : String(content);
      let i = 0;

      while (i < text.length) {
        const d = Math.floor(rand(min, max));
        i++;
        line.innerHTML = text.slice(0, i) + '<span class="cursor"></span>';
        scr.scrollTop = scr.scrollHeight;
        await wait(d);
      }

      line.innerHTML = text;
      scr.scrollTop = scr.scrollHeight;
    }

    function setProgress(p: number) {
      p = Math.max(0, Math.min(100, p));

      if (barRef.current) {
        barRef.current.style.width = p + "%";
      }

      if (pctRef.current) {
        pctRef.current.textContent = Math.round(p) + "%";
      }
    }

    function realisticProgress(
      totalMs: number,
      onStep: (progress: number) => void
    ): Promise<void> {
      return new Promise((resolve) => {
        const start = performance.now();

        function step() {
          const t = performance.now() - start;
          const frac = Math.min(1, t / totalMs);
          const eased = Math.pow(frac, 0.6);
          onStep(eased * 100);

          if (frac < 1) {
            requestAnimationFrame(step);
          } else {
            resolve();
          }
        }

        step();
      });
    }

    async function simulateBoot() {
      const W = conf.welcomeText;
      const lines = [
        {
          t: () => `> bootloader /init [${timestamp()}]`,
          cls: "muted",
          d: 160,
        },
        { t: "> hardware probe: ok", cls: "muted", d: 120 },
        {
          t: () =>
            `> cpu: ${Math.floor(rand(1200, 4200))}MHz, cores: ${
              [2, 4, 6, 8][Math.floor(rand(0, 4))]
            }`,
          cls: "muted",
          d: 180,
        },
        {
          t: () =>
            `> memory check: ${Math.floor(rand(2048, 65536))}MB detected`,
          cls: "muted",
          d: 140,
        },
        { t: () => `> auth token: ${fakeHash(10)}`, cls: "accent", d: 200 },
        { t: () => `\n${W}`, cls: "accent", d: 260 },
        {
          t: () => `\n> system fingerprint: ${fakeHash(16)}`,
          cls: "muted",
          d: 160,
        },
      ];
      for (const l of lines) {
        await typeLine(l.t, l.cls);
        await wait(l.d);
      }

      const msgs = conf.extraMessages || [];
      realisticProgress(1600 + Math.random() * 1100, (p) =>
        setProgress(5 + p * 0.9)
      );
      for (let i = 0; i < msgs.length; i++) {
        await wait(120 + Math.random() * 220);
        const m = msgs[i];
        const line = el("div", "line muted");
        line.textContent = `> ${m} ${i === 0 ? "..." : " "}`;
        if (scr) {
          scr.appendChild(line);
          scr.scrollTop = scr.scrollHeight;
        }

        if (i % 2 === 0) await wait(60 + Math.random() * 160);
      }
      await realisticProgress(900 + Math.random() * 800, (p) =>
        setProgress(40 + p * 0.6)
      );
      setProgress(100);

      await typeLine(
        () => `\n> remote host: ${fakeIP()} (${fakeLatency()})`,
        "muted"
      );
      await typeLine(
        () => `> mac: ${fakeMAC()} | cipher: chacha20-poly1305`,
        "muted"
      );
      await typeLine(
        () =>
          `> entropy: ${(Math.random() * 900) | 0}k | uptime: ${Math.floor(
            performance.now() / 1000
          )}s`,
        "muted"
      );
    }

    function showEnter() {
      enter?.classList.add("show"); // Optional chaining = safe
    }

    function hidePreloader() {
      preloader?.classList.add("hide");
      setTimeout(() => {
        try {
          preloader?.remove();
        } catch {}
        page?.classList.add("ready");
      }, 620);
    }

    function armEnter() {
      const handler = () => {
        hidePreloader();
        window.removeEventListener("keydown", handler);
        window.removeEventListener("click", handler);
        window.removeEventListener("touchstart", handler);
      };
      window.addEventListener("keydown", handler);
      window.addEventListener("click", handler);
      window.addEventListener("touchstart", handler, { passive: true });
    }

    async function run() {
      await wait(80 + Math.random() * 140);
      await simulateBoot();
      await wait(
        Math.max(0, (conf.minShowMs || 1200) - 0) +
          (conf.holdAfterCompleteMs || 420)
      );
      if (conf.useGate) {
        showEnter();
        armEnter();
      } else {
        hidePreloader();
      }
    }

    run();

    // Matrix rain
    (function matrix() {
      const canvas = matrixRef.current;
      if (!canvas) return; // Exit if canvas not found

      const ctx = canvas.getContext("2d");
      if (!ctx) return; // Exit if context couldn't be created

      const chars =
        "アカサタナハマヤラワガザダバパイキシチニヒミリヰギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレヱゲゼデベペオコソトノホモヨロヲゴゾドボポ" +
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const glyphs = chars.split("");
      let W: number, H: number, cols: number, drops: number[];

      function resize() {
        if (!canvas) return; // Re-check here
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
        cols = Math.floor(W / 14);
        drops = Array(cols).fill(1);
      }

      window.addEventListener("resize", resize);
      resize();

      ctx.font = '14px "Share Tech Mono"';

      function draw() {
        if (!ctx) return; // ✅ Safeguard against null context

        ctx.fillStyle = "rgba(3,15,7,0.09)";
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = "#1bff6f";

        for (let i = 0; i < drops.length; i++) {
          const ch = glyphs[Math.floor(Math.random() * glyphs.length)];
          ctx.fillText(ch, i * 14, drops[i] * 14);

          if (drops[i] * 14 > H && Math.random() > 0.985) {
            drops[i] = 0;
          }
          drops[i]++;
        }

        requestAnimationFrame(draw);
      }

      draw();
    })();
  }, []);

  return (
    <>
      <div className="preloader" ref={preloaderRef}>
        <canvas id="matrix" ref={matrixRef}></canvas>
        <div className="scanlines"></div>
        <div className="noise" aria-hidden="true"></div>
        <div className="crt">
          <div className="reflection" aria-hidden="true"></div>
          <div className="chrome">
            <div className="led on" title="power"></div>
            <div className="led on" title="link"></div>
            <div className="led on" title="auth"></div>
            <span className="title">GoWappily®️ Secure Console</span>
          </div>
          <div className="mark">
            <svg viewBox="0 0 120 24">
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="120" y2="0">
                  <stop stopColor="#1bff6f" />
                  <stop offset="1" stopColor="#adff2f" />
                </linearGradient>
              </defs>
              <path
                d="M8.4 19c-4.7 0-8.4-3.7-8.4-8.5C0 5.7 3.7 2 8.4 2c2.8 0 5 .9 6.7 2.7l-2.8 2.8C11.6 6.3 10.2 5.8 8.4 5.8 5.7 5.8 3.7 8 3.7 10.5c0 2.6 2 4.7 4.7 4.7 1.8 0 3.1-.6 3.9-1.7l2.8 2.8C13.5 18 11.3 19 8.4 19z"
                fill="url(#g)"
              />
            </svg>
            <strong>GoWappily TECHNOLOGIES</strong>
          </div>
          <div className="screen" ref={screenRef}></div>
          <div className="progressWrap">
            <div className="progress">
              <div className="bar" ref={barRef}></div>
            </div>
            <div className="pct" ref={pctRef}>
              0%
            </div>
          </div>
          <div className="enter hidden" ref={enterRef}>
            Press <span className="key">Any Key</span> to enter
          </div>
          <div className="badges">
            <span className="badge">secure link: GoWappily://core</span>
            <span className="badge">protocol: VX-13</span>
            <span className="badge">cipher: chacha20-poly1305</span>
          </div>
        </div>
      </div>
      <main className="page" ref={pageRef}>
        <section
          style={{
            minHeight: "100vh",
            display: "grid",
            placeItems: "center",
            padding: "32px",
          }}
        >
          <div
            style={{
              maxWidth: "760px",
              textAlign: "center",
              padding: "28px",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              background: "#061e0c",
            }}
          >
            <h1 style={{ margin: "0 0 10px", color: "#baffbf" }}>
              Welcome to GoWappily Technologies
            </h1>
            <p style={{ margin: 0, color: "#d5ffdc", opacity: 0.9 }}>
              This is your main site content. The terminal preloader runs once
              per visit and then politely gets out of the way.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
