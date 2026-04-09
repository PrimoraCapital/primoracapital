import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error:
            "RESEND_API_KEY não configurada. Defina em variáveis de ambiente (ex: .env.local).",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { nome, email, whatsapp, tipoSolicitacao, valor } = body;

    // Formatar valor para exibição
    const valorNumerico = parseInt(valor || "0", 10);
    const valorFormatado = (valorNumerico / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "victorh.pedr@gmail.com",
      subject: "Nova Simulação de Consórcio",
      html: [
        "<p>Nova simulação de consórcio recebida:</p>",
        "<ul>",
        `<li><strong>Nome:</strong> ${nome}</li>`,
        `<li><strong>E-mail:</strong> ${email}</li>`,
        `<li><strong>WhatsApp:</strong> ${whatsapp}</li>`,
        `<li><strong>Tipo de Solicitação:</strong> ${tipoSolicitacao}</li>`,
        `<li><strong>Valor:</strong> ${valorFormatado}</li>`,
        "</ul>",
      ].join(""),
    });

    if (error) {
      console.error("Erro ao enviar email com Resend:", error);
      return NextResponse.json(
        {
          success: false,
          error:
            typeof error === "object" && error && "message" in error
              ? String((error as { message?: unknown }).message)
              : "Erro ao enviar email",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Erro ao enviar email",
      },
      { status: 500 },
    );
  }
}
