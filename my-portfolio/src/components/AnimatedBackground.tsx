"use client";

import { useEffect, useRef, useState } from "react";

type ShapeName = "square" | "circle" | "triangle" | "diamond" | "hexagon" | "star";

interface Shape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  vr: number;
  color: string;
  shape: ShapeName;
}

export default function AnimatedBackground() {
  const shapes = useRef<Shape[]>([]);
  const els = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const followerEl = useRef<HTMLDivElement | null>(null);
  const mouseTarget = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  // trigger initial render once shapes are created
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const palette = [
      "#dbeafe", // blue-100
      "#e0e7ff", // indigo-100
      "#ede9fe", // violet-100
      "#fae8ff", // fuchsia-100
      "#ffe4e6", // rose-100
    ];
    const shapeNames: ShapeName[] = ["square", "circle", "triangle", "diamond", "hexagon", "star"];
    const count = 28; // a bit denser
    const arr: Shape[] = Array.from({ length: count }, () => {
      const s = shapeNames[Math.floor(Math.random() * shapeNames.length)];
      const baseSize = 14 + Math.random() * 34; // 14-48
      const size = s === "star" ? baseSize * 1.15 : baseSize;
      const speed = 0.3 + Math.random() * 0.9; // faster drift
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size,
        opacity: Math.random() * 0.35 + 0.25, // more visible
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 0.5,
        color: palette[Math.floor(Math.random() * palette.length)],
        shape: s,
      };
    });
    shapes.current = arr;
    // ensure elements are created on first render
    setReady(true);

    // Initialize follower in center
    followerPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    mouseTarget.current = followerPos.current;

    const onMove = (e: MouseEvent) => {
      mouseTarget.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const step = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const arr = shapes.current;
      const n = arr.length;
      const maxSpeed = 1.2;
      const minSpeed = 0.08;

      // integrate
      for (let i = 0; i < n; i++) {
        const s = arr[i];
        let x = s.x + s.vx;
        let y = s.y + s.vy;
        const rotation = (s.rotation + s.vr) % 360;
        if (x > w + s.size) x = -s.size; else if (x < -s.size) x = w + s.size;
        if (y > h + s.size) y = -s.size; else if (y < -s.size) y = h + s.size;
        arr[i] = { ...s, x, y, rotation };
      }

      // collisions
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const a = arr[i];
          const b = arr[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const ra = a.size * 0.5;
          const rb = b.size * 0.5;
          const minDist = ra + rb;
          const dist2 = dx * dx + dy * dy;
          if (dist2 <= minDist * minDist) {
            const dist = Math.sqrt(dist2) || 0.001;
            const nx = dx / dist;
            const ny = dy / dist;
            const rvx = b.vx - a.vx;
            const rvy = b.vy - a.vy;
            const along = rvx * nx + rvy * ny;

            const overlap = (minDist - dist) + 0.5;
            if (overlap > 0) {
              const sx = nx * overlap * 0.5;
              const sy = ny * overlap * 0.5;
              a.x -= sx; a.y -= sy; b.x += sx; b.y += sy;
            }
            if (along < 0) {
              const imp = -along;
              const ix = imp * nx;
              const iy = imp * ny;
              a.vx -= ix; a.vy -= iy; b.vx += ix; b.vy += iy;
              a.vx *= 1.05; a.vy *= 1.05; b.vx *= 1.05; b.vy *= 1.05;
              const clamp = (s: Shape) => {
                const sp = Math.hypot(s.vx, s.vy);
                if (sp > maxSpeed) { const f = maxSpeed / sp; s.vx *= f; s.vy *= f; }
                else if (sp < minSpeed) {
                  const ang = Math.random() * Math.PI * 2;
                  s.vx = Math.cos(ang) * minSpeed; s.vy = Math.sin(ang) * minSpeed;
                }
              };
              clamp(a); clamp(b);
            }
          }
        }
      }

      // apply to DOM
      for (let i = 0; i < n; i++) {
        const s = arr[i];
        const el = els.current[i];
        if (!el) continue;
        el.style.left = `${s.x}px`;
        el.style.top = `${s.y}px`;
        el.style.transform = `translate(-50%, -50%) rotate(${s.rotation}deg)`;
      }

      // Update mouse follower with fast smoothing
      const fEl = followerEl.current;
      if (fEl) {
        const target = mouseTarget.current;
        const pos = followerPos.current;
        const alpha = 0.5; // responsiveness (closer to 1 = snappier)
        pos.x += (target.x - pos.x) * alpha;
        pos.y += (target.y - pos.y) * alpha;
        fEl.style.left = `${pos.x - 128}px`;
        fEl.style.top = `${pos.y - 128}px`;
      }

      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0" style={{ transform: "translateZ(0)" }}>
      {ready && shapes.current.map((s, i) => (
        <div
          key={i}
          ref={(el) => (els.current[i] = el)}
          className="absolute"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            color: s.color,
            backgroundColor: "transparent",
            transform: `translate(-50%, -50%) rotate(${s.rotation}deg)`,
            borderRadius: 0,
            willChange: "transform, left, top",
          }}
          aria-hidden
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor" style={{ display: "block" }}>
            {s.shape === "square" && <rect x="8" y="8" width="84" height="84" rx="6" ry="6" />}
            {s.shape === "circle" && <circle cx="50" cy="50" r="45" />}
            {s.shape === "triangle" && <polygon points="50,5 95,95 5,95" />}
            {s.shape === "diamond" && <polygon points="50,2 98,50 50,98 2,50" />}
            {s.shape === "hexagon" && <polygon points="50,3 93,28 93,72 50,97 7,72 7,28" />}
            {s.shape === "star" && (
              <polygon points="50,5 61,38 96,38 68,58 79,91 50,72 21,91 32,58 4,38 39,38" />
            )}
          </svg>
        </div>
      ))}

      {/* Mouse follower (fast, no lag) */}
      <div
        ref={followerEl}
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-20 blur-3xl pointer-events-none"
        style={{ left: 0, top: 0, willChange: "left, top" }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl opacity-30 animate-pulse-glow animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full blur-3xl opacity-30 animate-pulse-glow animate-drift" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-full blur-3xl opacity-20 animate-pulse-glow animate-float" style={{ animationDelay: "2s" }} />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  );
}
