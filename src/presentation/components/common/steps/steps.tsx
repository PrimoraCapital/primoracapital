"use client";

import {
  IconSun,
  IconFileText,
  IconCalendarEvent,
  IconTrophy,
} from "@tabler/icons-react";
import styles from "./steps.module.scss";
import Highlighter from "src/presentation/components/common/highlighter/highlighter";

const STEPS = [
  {
    id: 1,
    icon: <IconSun size={40} />,
    title: "1 - Simulação",
    description:
      "Defina o valor da carta de crédito e o prazo ideal para o seu bolso. Simule online e encontre o plano perfeito para você.",
    large: true,
  },
  {
    id: 2,
    icon: <IconFileText size={40} />,
    title: "2 - Contratação",
    description:
      "Assine o contrato digitalmente de forma 100% segura, rápida e sem burocracia desnecessária.",
    large: false,
  },
  {
    id: 3,
    icon: <IconCalendarEvent size={40} />,
    title: "3 - Lances",
    description:
      "Participe das assembleias mensais, acompanhe os sorteios e oferte lances para antecipar sua conquista.",
    large: false,
  },
  {
    id: 4,
    icon: <IconTrophy size={40} />,
    title: "4 - Conquista",
    description:
      "Ao ser contemplado, use sua carta de crédito para adquirir seu bem, quitar financiamentos ou investir no seu futuro.",
    large: true,
  },
];

export default function Steps() {
  return (
    <section id="como-funciona" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Passo a Passo</span>
          <h2 className={styles.sectionTitle}>
            Como funciona para você{" "}
            <Highlighter action="underline" color="#eed56d">
              conquistar
            </Highlighter>{" "}
            seus objetivos
          </h2>
          <p className={styles.sectionSubtitle}>
            Um caminho simples e estratégico para acessar crédito sem juros. Em
            poucos passos, você planeja, participa do grupo e pode acelerar sua
            contemplação de forma inteligente. Simule agora e descubra parcelas
            que cabem no seu bolso.
          </p>
        </div>

        <div className={styles.grid}>
          {STEPS.map((step) => (
            <div
              key={step.id}
              className={`${styles.card} ${step.large ? styles.large : ""}`}
            >
              <div className={styles.icon}>{step.icon}</div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
