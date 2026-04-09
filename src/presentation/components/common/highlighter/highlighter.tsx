"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import S from "./highlighter.module.scss";

interface HighlighterProps {
  children: React.ReactNode;
  action?: "highlight" | "underline";
  color?: string;
  className?: string;
  animationDuration?: number;
}

const Highlighter = ({
  children,
  action = "highlight",
  color = "#FFD700",
  className = "",
  animationDuration = 1000,
}: HighlighterProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  if (action === "underline") {
    return (
      <span ref={ref} className={`${S.relative} ${className}`}>
        {children}
        <motion.span
          className={S.underline}
          style={{
            backgroundColor: color,
          }}
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{
            duration: animationDuration / 1000,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </span>
    );
  }

  return (
    <span ref={ref} className={`${S.highlighter} ${className}`}>
      {children}
      <motion.span
        className={S.bg}
        style={{
          backgroundColor: color,
          opacity: 0.3,
        }}
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{
          duration: animationDuration / 1000,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      />
    </span>
  );
};

export default Highlighter;
