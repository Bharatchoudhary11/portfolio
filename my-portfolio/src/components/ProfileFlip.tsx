"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    // restore last state if any
    const saved = localStorage.getItem("profileFlip");
    if (saved) setFlipped(saved === "back");
  }, []);

  useEffect(() => {
    localStorage.setItem("profileFlip", flipped ? "back" : "front");
  }, [flipped]);

  return (
    <button
      type="button"
      aria-label="Flip profile image"
      onClick={() => setFlipped((f) => !f)}
      className="relative group focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white rounded-full"
      style={{ width: size, height: size, perspective: 1000 }}
    >
      <div
        className="relative w-full h-full rounded-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:scale-105"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
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
