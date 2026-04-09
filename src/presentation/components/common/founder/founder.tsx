import Image from "next/image";

import { IMAGE } from "src/presentation/assets";

import S from "./founder.module.scss";
import Highlighter from "src/presentation/components/common/highlighter/highlighter";

const Founder = () => (
  <section id="quem-somos" className={S.container}>
    <div className={S["box-section"]}>
      <div className={S["title-section"]}>
        <h3 className={S.subtitle}>Excelência que inspira confiança</h3>
        <h1 className={S.title}>
          Conheça nossa <br />{" "}
          <Highlighter action="underline" color="#eed56d">liderança</Highlighter>
        </h1>
      </div>
      <div className={S["about-section"]}>
        <div className={S["image-section"]}>
          {/* <a href="https://www.instagram.com/..." target="_blank" rel="noopener noreferrer"> */}
          <Image
            src={IMAGE.AGNALDO}
            alt="Agnaldo, CEO da Prospéritté Consult"
            className={S.img}
          />
          {/* </a> */}
        </div>
        <div className={S["text-section"]}>
          <h1 className={S.title}>Agnaldo Tomsic</h1>
          <h3 className={S.subtitle}>CEO – Primora Capital</h3>
          <p className={S.paragraph}>
            Com mais de uma década de experiência em consórcios e soluções financeiras, 
            Agnaldo Tomsic lidera a Primora Capital com foco em planejamento patrimonial, 
            segurança e decisões bem orientadas.
          </p>
          <p className={S.paragraph}>
            Sua atuação é marcada por uma abordagem consultiva, que une estratégia, 
            clareza e respeito ao perfil de cada cliente, ajudando pessoas e empresas 
            a transformarem objetivos em conquistas reais, sem improviso ou promessas vazias.
          </p>
          <p className={S.paragraph}>
            Ao longo da carreira, construiu métodos próprios para estruturar planos 
            eficientes de curto, médio e longo prazo, sempre com processos simples, 
            acompanhamento próximo e operação 100% digital.
          </p>
          <p className={S.paragraph}>
            A Primora Capital nasce dessa visão: trabalhar apenas com administradoras 
            autorizadas, atuar com total transparência e oferecer um atendimento dedicado 
            em todas as etapas, para que cada decisão seja segura, consciente e alinhada 
            à construção de patrimônio no longo prazo.
          </p>
          <p className={S.paragraph}>
            Mais do que vender consórcios, Agnaldo entrega orientação estratégica, visão 
            financeira e tranquilidade para quem busca crescer com inteligência.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Founder;
