"use client";

import useEmblaCarousel from "embla-carousel-react";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import {
  IconShieldCheck,
  IconPigMoney,
  IconTrendingUp,
  IconFileCertificate,
  IconGift,
  IconUsersGroup,
} from "@tabler/icons-react";

import styles from "./benefits.module.scss";
import Highlighter from "src/presentation/components/common/highlighter/highlighter";

const BENEFITS = [
  {
    id: 1,
    icon: <IconPigMoney size={36} stroke={1.7} />,
    title: "Sem juros no crédito",
    desc: (
      <>
        Consórcio <Highlighter action="underline">sem cobrança de juros</Highlighter>, com parcelas planejadas de acordo com o seu orçamento.
      </>
    ),
  },
  {
    id: 2,
    icon: <IconTrendingUp size={36} stroke={1.7} />,
    title: "Estratégia personalizada",
    desc: (
      <>
        Plano construído conforme seu{" "}
        <Highlighter action="underline">perfil</Highlighter>, seus objetivos e sua realidade financeira.
      </>
    ),
  },
  {
    id: 3,
    icon: <IconGift size={36} stroke={1.7} />,
    title: "Planejamento de contemplação",
    desc: (
      <>
        Orientação estratégica para{" "}
        <Highlighter action="underline">aumentar suas chances</Highlighter> de contemplação, com clareza e método.
      </>
    ),
  },
  {
    id: 4,
    icon: <IconShieldCheck size={36} stroke={1.7} />,
    title: "100% digital e ágil",
    desc: (
      <>
        Processos <Highlighter action="underline">online</Highlighter>, simples e transparentes, com contratação descomplicada e acompanhamento próximo.
      </>
    ),
  },
  {
    id: 5,
    icon: <IconUsersGroup size={36} stroke={1.7} />,
    title: "Atendimento dedicado",
    desc: (
      <>
        Acompanhamento próximo e{" "}
        <Highlighter action="underline">consultivo</Highlighter>, com foco em clareza, segurança e boas decisões em cada etapa.
      </>
    ),
  },
];

const Benefits = () => {
  const [viewportRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start", dragFree: true },
    [WheelGesturesPlugin()]
  );

  return (
    <section id="beneficios" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h2 className={styles.title}>
            Por que escolher a{" "}
            <Highlighter action="underline">Primora</Highlighter> Capital
          </h2>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => emblaApi && emblaApi.scrollPrev()}
              aria-label="Ver anterior"
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => emblaApi && emblaApi.scrollNext()}
              aria-label="Ver próximo"
            >
              ›
            </button>
          </div>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselViewport} ref={viewportRef}>
            <div className={styles.carouselTrack}>
              {BENEFITS.map((b) => (
                <article key={b.id} className={styles.card}>
                  <div className={styles.icon}>{b.icon}</div>
                  <h3 className={styles.cardTitle}>{b.title}</h3>
                  <p className={styles.cardDesc}>{b.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
