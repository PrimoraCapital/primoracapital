"use client";

import { useRef, useEffect, useState } from "react";
import { IconCheck } from "@tabler/icons-react";
import S from "./path.module.scss";
import Highlighter from "src/presentation/components/common/highlighter/highlighter";

const steps = [
  {
    number: 1,
    text: "Simule o consórcio desejado",
  },
  {
    number: 2,
    text: "Escolha a parcela que cabe no seu bolso",
  },
  {
    number: 3,
    text: "Contrate o plano de consórcio ideal",
  },
];

const Path = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const start = windowHeight - 100;
      const end = -sectionHeight + 100;

      let percent = 0;
      if (rect.top < start && rect.bottom > end) {
        const total = start - end;
        const current = start - rect.top;
        percent = Math.max(0, Math.min(1, current / total));
      }
      setProgress(percent);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className={S.pathSection}>
      <h2 className={S.title}>
        Avance rumo às suas{" "}
        <Highlighter action="underline" color="#eed56d">
          metas
        </Highlighter>{" "}
        em <span className={S.bold}>3 etapas</span>
      </h2>
      <div className={S.stepsWrapper} ref={containerRef}>
        <div className={S.line} />
        <div
          className={S.lineProgress}
          style={{ width: `${progress * 100}%` }}
        />
        <div className={S.steps}>
          {steps.map((step, idx) => (
            <div
              className={S.step}
              key={idx}
              ref={(el) => {
                stepRefs.current[idx] = el;
              }}
            >
              <div className={S.circle}>{step.number}</div>
              <div className={S.stepText}>{step.text}</div>
            </div>
          ))}
          <div
            className={S.step}
            ref={(el) => {
              stepRefs.current[steps.length] = el;
            }}
          >
            <div className={S.circle}>
              <IconCheck size={24} color="#1c1c1c" stroke={3} />
            </div>
            <div className={S.stepTextFinal}>
              <p>Descomplicado e fácil, dê um impulso aos seus planos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Path;
