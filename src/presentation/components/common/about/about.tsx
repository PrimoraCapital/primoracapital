import { IMAGE } from "src/presentation/assets";

import S from "./about.module.scss";

const differentials = [
  {
    image: IMAGE.ATENCAO_CLIENTE,
    city: "Atenção ao cliente",
    text: "Especialistas sempre prontos para ouvir e encontrar a melhor solução.",
  },
  {
    image: IMAGE.ATENCAO_CLIENTE,
    city: "Atenção ao cliente",
    text: "Especialistas sempre prontos para ouvir e encontrar a melhor solução.",
  },
  {
    image: IMAGE.TRANSPARENCIA,
    city: "Transparência",
    text: "Canal direto e informações sempre objetivas e claras.",
  },
  {
    image: IMAGE.AGILIDADE,
    city: "Agilidade",
    text: "Processos ágeis e totalmente digitais, sem burocracia.",
  },
  {
    image: IMAGE.SEGURANCA,
    city: "Segurança",
    text: "Administradoras sólidas, regulamentadas pelo Banco Central.",
  },
];

const PlayIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="27" stroke="white" strokeWidth="2" />
    <polygon points="23,18 40,28 23,38" fill="white" />
  </svg>
);

const About = () => (
  <section id="quem-somos" className={S.aboutSection}>
    <div className={S.topRow}>
      <div className={S.left}>
        <h2 className={S.title}>Quem somos</h2>
        <p className={S.subtitle}>
          Fundada em 2018 e sediada em Piracicaba-SP, a{" "}
          <strong>Prospéritté Consult</strong> nasceu com uma missão clara:
          transformar o potencial de crescimento patrimonial em realidade
          acessível para nossos clientes. Com mais de{" "}
          <strong>10 anos de experiência</strong> dos sócios no mercado de
          consórcios e seguros, desenvolvemos uma abordagem consultiva que vai
          além da simples venda de produtos financeiros.
          <br />
          <br />
          Atuamos em todo o território nacional, oferecendo soluções
          inteligentes para aquisição e investimento em imóveis, veículos e
          outros bens. Trabalhamos com as maiores administradoras do país –
          <strong>HS Consórcios, Âncora, Embracon e Rodobens</strong> – mas
          nosso verdadeiro diferencial está na consultoria estratégica que
          antecede qualquer recomendação.
          <br />
          <br />
          Nossa especialidade é a alavancagem patrimonial inteligente. Através
          de estratégias estruturadas, ajudamos investidores a acelerar o
          crescimento do patrimônio, como no <strong>Prospéritté 7.0</strong>,
          nosso programa exclusivo de investimento imobiliário.
        </p>
      </div>
      <div className={S.right}>
        <div className={S.mainCard}>
          <img className={S.mainImage} src={IMAGE.EQUIPE.src} alt="Empresa" />
        </div>
      </div>
    </div>
    <div className={S.testimonialsRow}>
      {differentials.slice(1).map((t, idx) => (
        <div className={S.testimonialCard} key={idx}>
          <div className={S.cardImageWrapper}>
            <img src={t.image.src} alt={t.city} className={S.cardImage} />
          </div>
          <div className={S.cardInfo}>
            <span className={S.city}>{t.city}</span>
            <span className={S.text}>{t.text}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default About;
