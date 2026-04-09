import { IMAGE } from "src/presentation/assets";

import { IconHome, IconCar, IconTools, IconTruck } from "@tabler/icons-react";

import S from "./achievement.module.scss";
import Image from "next/image";
import Highlighter from "src/presentation/components/common/highlighter/highlighter";
import { SimulateButton } from "src/presentation/components";

const cards = [
  {
    image: IMAGE.CAMINHAO.src,
    icon: <IconTruck size={28} color="#EED56D" />,
    title: "Consórcio de Veículos Pesados",
    taxa: "Taxa adm: a partir de 0,14% a.m.",
    credito: "Crédito de R$ 500 mil a R$ 3 milhões",
    parcela: "Parcelas a partir de R$ 1.850 reais",
  },
  {
    image: IMAGE.CONSTRUCAO.src,
    icon: <IconTools size={28} color="#EED56D" />,
    title: "Consórcio para Reformar ou Construir",
    taxa: "Taxa adm: a partir de 0,10% a.m.",
    credito: "Crédito de R$ 100 mil a R$ 1 milhão",
    parcela: "Parcelas a partir de R$ 650 reais",
  },
  {
    image: IMAGE.CARRO.src,
    icon: <IconCar size={28} color="#EED56D" />,
    title: "Consórcio de Veículos",
    taxa: "Taxa adm: a partir de 0,14% a.m.",
    credito: "Crédito de R$ 80 mil a R$ 800 mil",
    parcela: "Parcelas a partir de R$ 550 reais",
  },
  {
    image: IMAGE.CASA.src,
    icon: <IconHome size={28} color="#EED56D" />,
    title: "Consórcio de Imóveis",
    taxa: "Taxa adm: a partir de 0,10% a.m.",
    credito: "Crédito de R$ 100 mil a R$ 2 milhões",
    parcela: "Parcelas a partir de R$ 590 reais",
  },
];

const ctaUrl =
  "https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20da%20PRIMORA%20Capital.";

const Achievement = () => {
  return (
    <section id="consorcio" className={S.achievementSection}>
      <h2 className={S.sectionTitle}>
        Encontre o consórcio{" "}
        <Highlighter action="underline" color="#eed56d">
          ideal
        </Highlighter>{" "}
        para você
      </h2>
      <p className={S.sectionSubtitle}>
        Conheça os tipos de consórcio que oferecemos e conquiste seus objetivos:
      </p>
      <div className={S.cardsContainer}>
        {cards.map((card, idx) => (
          <div className={S.card} key={idx}>
            <div className={S.cardImage}>
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 900px) 100vw, 300px"
              />
            </div>
            <div className={S.cardContent}>
              <div className={S.cardIcon}>{card.icon}</div>
              <div className={S.cardTitle}>{card.title}</div>
              <ul className={S.cardList}>
                <li>{card.taxa}</li>
                <li>{card.credito}</li>
                <li>{card.parcela}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className={S.ctaContainer}>
        <p className={S.ctaText}>
          Pronto para encontrar seu consórcio{" "}
          <Highlighter action="underline" color="#eed56d">
            ideal
          </Highlighter>
          ?
        </p>
        <SimulateButton
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </section>
  );
};

export default Achievement;
