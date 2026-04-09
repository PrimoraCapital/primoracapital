"use client";

import { useEffect, useState } from "react";

import styles from "./letters.module.scss";
import Highlighter from "src/presentation/components/common/highlighter/highlighter";
import { SimulateButton } from "src/presentation/components";

const LETTERS = [
  { credito: "R$ 150.000,00", pagas: 2, parcela: "R$ 940,00" },
  { credito: "R$ 165.000,00", pagas: 3, parcela: "R$ 1.020,00" },
  { credito: "R$ 185.000,00", pagas: 4, parcela: "R$ 1.145,00" },
  { credito: "R$ 205.000,00", pagas: 3, parcela: "R$ 1.225,00" },
  { credito: "R$ 225.000,00", pagas: 4, parcela: "R$ 1.335,00" },
  { credito: "R$ 260.000,00", pagas: 2, parcela: "R$ 1.540,00" },
  { credito: "R$ 310.000,00", pagas: 5, parcela: "R$ 1.860,00" },
  { credito: "R$ 760.000,00", pagas: 6, parcela: "R$ 4.920,00" },
];

const whatsappUrl =
  "https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Vim%20do%20site%20da%20PRIMORA%20Capital%20e%20tenho%20interesse%20em%20fazer%20um%20cons%C3%B3rcio!";
const ctaUrl =
  "https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20da%20PRIMORA%20Capital.";

export default function Letters() {
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="cartas-contempladas" className={styles.lettersSection}>
      <h2 className={styles.title}>
        Cartas{" "}
        <Highlighter action="underline" color="#eed56d">
          Contempladas
        </Highlighter>
      </h2>
      <p className={styles.subtitle}>
        Confira créditos já contemplados por lance ou sorteio, disponíveis para
        utilização imediata com segurança e agilidade.
      </p>
      <div className={styles.tableWrapper}>
        <table className={styles.lettersTable}>
          <thead>
            <tr>
              <th>Valor do Crédito</th>
              <th>Pagas</th>
              <th>Parcela Mensal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {LETTERS.map((item, idx) => (
              <tr key={idx}>
                <td>{item.credito}</td>
                <td>{item.pagas}</td>
                <td>{item.parcela}</td>
                <td>
                  <SimulateButton
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.mobileCards}>
        {LETTERS.map((item, idx) => (
          <div className={styles.mobileCard} key={idx}>
            <div className={styles.mobileCardInfo}>
              <div>
                <strong>Crédito:</strong> {item.credito}
              </div>
              <div>
                <strong>Parcela:</strong> {item.parcela}
              </div>
              <div>
                <strong>Pagas:</strong> {item.pagas} parcela
                {item.pagas > 1 ? "s" : ""}
              </div>
            </div>
            <SimulateButton
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        ))}
      </div>
      <div className={styles.ctaContainer}>
        <p className={styles.ctaText}>
          Não encontrou o crédito{" "}
          <Highlighter action="underline" color="#eed56d">
            ideal
          </Highlighter>
          ?<br />
          Temos opções de créditos contemplados, para quem precisa avançar sem
          esperar.
          <br />
          Fale com um consultor e encontre a melhor alternativa para o seu
          momento.
        </p>
        <SimulateButton
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButtonSmall}
        />
      </div>
    </section>
  );
}
