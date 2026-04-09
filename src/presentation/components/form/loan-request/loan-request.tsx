"use client";

import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { useState } from "react";

import { SimulateButton } from "src/presentation/components";
import Highlighter from "src/presentation/components/common/highlighter/highlighter";

import S from "./loan-request.module.scss";

type LoanRequestProps = {
  nome: string;
  email: string;
  whatsapp: string;
  cpf: string;
  tipoSolicitacao: string;
  termos: boolean;
  valor: string;
};

const formatCurrency = (value: string) => {
  const numericValue = value.replace(/\D/g, "");
  const floatValue = (parseInt(numericValue || "0", 10) / 100).toFixed(2);
  const formatted = floatValue
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `R$ ${formatted}`;
};

const LoanRequest = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoanRequestProps>({
    defaultValues: {
      nome: "",
      email: "",
      whatsapp: "",
      cpf: "",
      valor: "",
    },
  });

  const [valorFormatado, setValorFormatado] = useState("");

  const onSubmit = async (data: LoanRequestProps) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        let message = "Erro ao enviar email";
        try {
          const body = (await response.json()) as { error?: string };
          if (body?.error) message = body.error;
        } catch {
          try {
            const text = await response.text();
            if (text) message = text;
          } catch {}
        }
        throw new Error(message);
      }

      // Abrir WhatsApp após envio do email
      const phone = "5519982435337";
      const msg = encodeURIComponent(
        "Olá! Tenho interesse em simular um consórcio e gostaria de receber mais informações. Pode me ajudar a conquistar meu objetivo?"
      );
      window.open(`https://wa.me/${phone}?text=${msg}`);
      
      reset();
      setValorFormatado("");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erro ao enviar dados.";
      console.error("Erro ao processar formulário:", error);
      alert(message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={S.form}>
        <fieldset>
          <legend className={S.title}>
            Planeje sua conquista com{" "}
            <Highlighter action="underline">inteligência financeira</Highlighter>.
          </legend>

          <p className={S.paragraphSubtitle}>
            Simule seu consórcio e descubra o caminho mais estratégico para
            alcançar seu objetivo. O consórcio pode ser uma alternativa mais
            econômica e planejada ao financiamento tradicional. Aqui, você
            simula, compara cenários e entende qual estratégia faz sentido para
            o seu momento.
          </p>

          <select
            defaultValue=""
            className={`${S["input-text"]} ${
              errors.tipoSolicitacao ? S["input-text-error"] : ""
            }`}
            {...register("tipoSolicitacao", {
              required: "Tipo de solicitação é obrigatório",
            })}
          >
            <option value="" disabled hidden>
              Que tipo de produto você busca?
            </option>
            <option className={S["option"]} value="Imóvel">
              Imóvel
            </option>
            <option className={S["option"]} value="Terreno">
              Terreno
            </option>
            <option className={S["option"]} value="Terreno e Construção">
              Terreno e Construção
            </option>
            <option className={S["option"]} value="Reforma">
              Reforma
            </option>
            <option className={S["option"]} value="Quitação de Financiamento">
              Quitação de Financiamento
            </option>
            <option className={S["option"]} value="Investimento">
              Investimento
            </option>
            <option className={S["option"]} value="Carro Novo">
              Carro
            </option>
            <option className={S["option"]} value="Caminhão">
              Caminhão
            </option>
            <option className={S["option"]} value="Moto">
              Moto
            </option>
          </select>

          <Controller
            name="valor"
            control={control}
            rules={{
              required: "Valor é obrigatório",
              validate: (value) => {
                const numValue = Number(value);
                return numValue >= 5000000 || "O valor mínimo é R$ 50.000,00";
              },
            }}
            render={({ field: { onChange } }) => (
              <input
                inputMode="numeric"
                placeholder="Digite o valor"
                value={valorFormatado}
                className={`${S["input-text"]} ${
                  errors.valor ? S["input-text-error"] : ""
                }`}
                onChange={(e) => {
                  const raw = e.target.value;
                  const formatted = formatCurrency(raw);
                  setValorFormatado(formatted);
                  const numericOnly = raw.replace(/\D/g, "");
                  onChange(numericOnly);
                }}
              />
            )}
          />
          <span className={S.valueMin}>Valor mínimo: R$ 50.000,00</span>

          <input
            {...register("nome", {
              required: "Nome é obrigatório",
              minLength: {
                value: 4,
                message: "Nome deve ter no mínimo 4 caracteres",
              },
            })}
            className={`${S["input-text"]} ${
              errors.nome ? S["input-text-error"] : ""
            }`}
            type="text"
            placeholder="Nome"
          />

          <input
            {...register("email", {
              required: "E-mail é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "E-mail inválido",
              },
            })}
            className={`${S["input-text"]} ${
              errors.email ? S["input-text-error"] : ""
            }`}
            type="email"
            placeholder="E-mail"
          />

          <Controller
            name="whatsapp"
            control={control}
            rules={{
              required: "Whatsapp é obrigatório",
              pattern: {
                value: /^\(\d{2}\) \d{5}-\d{4}$/,
                message: "Whatsapp inválido",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <IMaskInput
                mask="(00) 00000-0000"
                value={value}
                onAccept={(value: string) => onChange(value)}
                className={`${S["input-text"]} ${S["margin-btn"]} ${
                  errors.whatsapp ? S["input-text-error"] : ""
                }`}
                type="tel"
                inputMode="tel"
                placeholder="Telefone (com DDD)"
              />
            )}
          />

          <SimulateButton type="submit" style={{ width: "100%" }} />
        </fieldset>
      </form>
    </div>
  );
};

export default LoanRequest;
