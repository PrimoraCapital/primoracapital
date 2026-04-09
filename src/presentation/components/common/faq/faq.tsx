"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Highlighter from "src/presentation/components/common/highlighter/highlighter";

import S from "./faq.module.scss";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  items?: FAQItem[];
  className?: string;
  themeColor?: string;
}

const DEFAULT_QUESTIONS: FAQItem[] = [
  {
    id: "1",
    question: "Consórcio demora muito para ser contemplado?",
    answer:
      "O consórcio é uma ferramenta de planejamento, e a contemplação não depende apenas da sorte. Além dos sorteios mensais, existem diferentes formas de antecipar o acesso ao crédito, como lances livres, fixos ou embutidos.<br/><br/>Na Primora Capital, o consórcio é tratado de forma estratégica. Analisamos seu perfil, objetivo e capacidade financeira para estruturar um plano personalizado, aumentando as chances de contemplação de maneira consciente, organizada e no menor prazo possível — sempre com transparência e sem promessas irreais.",
  },
  {
    id: "2",
    question: "É seguro? E se a administradora falir?",
    answer:
      "O sistema de consórcios é extremamente seguro e fiscalizado pelo Banco Central do Brasil. Os recursos dos grupos são totalmente segregados do patrimônio da administradora. Isso significa que seu dinheiro está protegido por lei e garantido para a aquisição do seu bem, independentemente da saúde financeira da empresa que administra o grupo.",
  },
  {
    id: "3",
    question: "O que é lance embutido e quando vale a pena?",
    answer:
      "O lance embutido permite que você utilize parte da própria carta de crédito para ofertar um lance, sem precisar desembolsar dinheiro do próprio bolso. É uma estratégia inteligente para quem deseja acelerar a contemplação e não dispõe de recursos imediatos. Nossos consultores avaliam se essa é a melhor opção para o seu perfil.",
  },
  {
    id: "4",
    question: "Consórcio tem juros?",
    answer:
      "Não. Diferente dos financiamentos bancários, o consórcio não cobra juros. Existe apenas uma taxa de administração fixa, diluída ao longo do prazo do plano, o que torna o custo final da aquisição do bem ou serviço infinitamente menor do que as opções tradicionais de crédito.",
  },
  {
    id: "5",
    question: "Posso usar meu FGTS no consórcio?",
    answer:
      "Sim! Para consórcios de imóveis residenciais, você pode utilizar seu saldo do FGTS para ofertar lances, amortizar parcelas ou quitar o saldo devedor, seguindo as regras estabelecidas pelo Conselho Curador do FGTS e pela Caixa Econômica Federal.",
  },
  {
    id: "6",
    question: "Como funciona a análise de crédito?",
    answer:
      "A análise de crédito no consórcio é mais flexível do que em financiamentos e ocorre, geralmente, apenas no momento da contemplação (para liberação do crédito). Isso permite que você inicie seu planejamento hoje e se organize financeiramente até o momento de utilizar a carta.",
  },
  {
    id: "7",
    question: "Se eu desistir ou não conseguir pagar, perco meu dinheiro?",
    answer:
      'Se precisar interromper o pagamento, você não perde tudo. Sua cota participará dos sorteios mensais na categoria de "cancelados" e, ao ser sorteada, você receberá os valores pagos deduzidas as taxas contratuais. Também é possível transferir sua cota para terceiros, recuperando o investimento de forma imediata.',
  },
];

const FAQ: React.FC<FAQProps> = ({
  title = "Perguntas Frequentes",
  items = DEFAULT_QUESTIONS,
  className,
  themeColor,
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section
      id="perguntas-frequentes"
      className={`${S.section} ${className || ""}`}
    >
      <div className={S.container}>
        <motion.div
          className={S.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className={S.title}
            style={themeColor ? { color: themeColor } : undefined}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {(() => {
              const t = title || "";
              const target = "frequentes";
              const idx = t.toLowerCase().indexOf(target);
              if (idx >= 0) {
                const prefix = t.slice(0, idx);
                const highlighted = t.slice(idx, idx + target.length);
                const suffix = t.slice(idx + target.length);
                return (
                  <>
                    {prefix}
                    <Highlighter action="underline" color="#eed56d">
                      {highlighted}
                    </Highlighter>
                    {suffix}
                  </>
                );
              }
              return t;
            })()}
          </motion.h2>

          <motion.div
            className={S.faqList}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {items.map((item, index) => {
              const isOpen = openItems.has(item.id);

              return (
                <motion.div
                  key={item.id}
                  id={`faq-item-${item.id}`}
                  className={`${S.faqItem} ${isOpen ? S.faqItemOpen : ""}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  <button
                    className={S.faqQuestion}
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span
                      className={S.questionText}
                      style={themeColor ? { color: themeColor } : undefined}
                    >
                      {item.question}
                    </span>
                    <motion.div
                      className={`${S.icon} ${isOpen ? S.iconOpen : ""}`}
                      animate={{
                        rotate: isOpen ? 45 : 0,
                        color: themeColor ? themeColor : "#D4BC5B",
                        scale: isOpen ? 1.1 : 1,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      +
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        className={S.faqAnswer}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: {
                              duration: 0.3,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            },
                            opacity: { duration: 0.25, delay: 0.1 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: {
                              duration: 0.25,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            },
                            opacity: { duration: 0.2 },
                          },
                        }}
                        style={{ overflow: "hidden" }}
                        aria-hidden={false}
                      >
                        <motion.div
                          className={S.answerContent}
                          initial={{ y: -8, opacity: 0 }}
                          animate={{
                            y: 0,
                            opacity: 1,
                            transition: {
                              delay: 0.15,
                              duration: 0.25,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            },
                          }}
                          exit={{
                            y: -8,
                            opacity: 0,
                            transition: {
                              duration: 0.15,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            },
                          }}
                        >
                          <p
                            dangerouslySetInnerHTML={{ __html: item.answer }}
                          />
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
