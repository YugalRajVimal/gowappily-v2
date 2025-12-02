"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const useAnimation = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from("#welcome-heading .letter", {
        y: 100,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.3,
        duration: 1,
      });
      
    },
    { scope: containerRef }
  );

  return containerRef;
};

export default useAnimation;
