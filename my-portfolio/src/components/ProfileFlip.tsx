"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  frontSrc: string; // shown initially
  backSrc: string;  // shown after flip
  altFront?: string;
  altBack?: string;
  size?: number; // square size in px
  frontFallbackSrc?: string;
  backFallbackSrc?: string;
}

export default function ProfileFlip({
  frontSrc,
  backSrc,
  altFront = "Profile photo",
  altBack = "Alternate profile photo",
  size = 128,
  frontFallbackSrc = "/profile-photo.jpg",
  backFallbackSrc = "/profile-photo.svg",
}: Props) {
  const [flipped, setFlipped] = useState(false);
  const [frontSrcState, setFrontSrcState] = useState(frontSrc);
  const [backSrcState, setBackSrcState] = useState(backSrc);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const tiltTarget = useRef({ x: 0, y: 0 });
  const tilt = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const pressTimer = useRef<number | null>(null);

  useEffect(() => {
    // restore last state if any
    const saved = localStorage.getItem("profileFlip");
    if (saved) setFlipped(saved === "back");
  }, []);

  useEffect(() => {
    localStorage.setItem("profileFlip", flipped ? "back" : "front");
  }, [flipped]);

  // RAF loop to lerp tilt smoothly
  useEffect(() => {
    const step = () => {
      const el = innerRef.current;
      if (el) {
        // ease towards target
        tilt.current.x += (tiltTarget.current.x - tilt.current.x) * 0.15;
        tilt.current.y += (tiltTarget.current.y - tilt.current.y) * 0.15;
        const flip = flipped ? " rotateY(180deg)" : " rotateY(0deg)";
        el.style.transform = `rotateX(${tilt.current.y}deg) rotateY(${tilt.current.x}deg)` + flip;
      }
      raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [flipped]);

  const onMove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const max = 12; // deg
    tiltTarget.current = { x: dx * max, y: -dy * max };
  };

  const onLeave = () => {
    tiltTarget.current = { x: 0, y: 0 };
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((f) => !f);
    }
  };

  const onPointerDown: React.PointerEventHandler<HTMLButtonElement> = () => {
    // long-press to flip on touch
    pressTimer.current = window.setTimeout(() => setFlipped((f) => !f), 350);
  };
  const clearPress = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  return (
    <button
      type="button"
      aria-label="Flip profile image"
      onClick={() => setFlipped((f) => !f)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerUp={clearPress}
      onPointerCancel={clearPress}
      className="relative group focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white rounded-full"
      style={{ width: size, height: size, perspective: 1000 }}
    >
      {/* Animated halo */}
      <div className="absolute -inset-[3px] rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-indigo-400 via-fuchsia-400 to-sky-400 opacity-40 blur-[2px] animate-spin-slower" aria-hidden />

      <div
        ref={innerRef}
        className="relative w-full h-full rounded-full will-change-transform [transform-style:preserve-3d] group-hover:scale-105 transition-transform duration-300"
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-full overflow-hidden border border-white/60 dark:border-white/10 shadow-md [backface-visibility:hidden]">
          <Image
            src={frontSrcState}
            alt={altFront}
            width={size}
            height={size}
            className="w-full h-full object-cover"
            unoptimized
            onError={() => setFrontSrcState(frontFallbackSrc)}
            priority
          />
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-full overflow-hidden border border-white/60 dark:border-white/10 shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Image
            src={backSrcState}
            alt={altBack}
            width={size}
            height={size}
            className="w-full h-full object-cover"
            unoptimized
            onError={() => setBackSrcState(backFallbackSrc)}
            priority
          />
        </div>
      </div>
    </button>
  );
}
