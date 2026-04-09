import { Footer, Meta, Navbar } from "src/presentation/components"

import styles from './terms-of-use.module.scss'

const TermsOfUse = () => {
    return (
        <div>
            <Meta
                title="Termos de Uso | Consórcio Primora Capital"
                description="Termos e Condições de Uso da Primora Capital. Conheça as regras para utilização da nossa plataforma de consórcios digitais."
                keywords="Termos de Uso, Consórcio, Contrato, Primora Capital, consórcio digital, regras de uso, plataforma de consórcio"
            />
            <Navbar />
            <div className={styles.privacyPolicyContainer}>
                <div className={styles.privacyPolicyContent}>
                    <h1 className={styles.privacyTitle}>TERMOS DE USO</h1>

                    <h2>1. ACEITAÇÃO DOS TERMOS</h2>
                    <p>
                        Ao acessar e utilizar os serviços da plataforma Primora Capital, você concorda integralmente com estes Termos de Uso. Caso não concorde, solicitamos que não utilize nossos serviços.
                        <br /><br />
                        Estes Termos regem a relação entre você usuário e a Primora Capital, sendo aplicáveis ao uso do site, plataformas, canais de atendimento e quaisquer serviços oferecidos.
                    </p>

                    <h2>2. OBJETO DOS TERMOS</h2>
                    <p>
                        Estes Termos têm por objeto regular as condições de acesso, uso e contratação dos serviços oferecidos pela Primora Capital, especialmente a intermediação na contratação de cotas de consórcio administradas por instituições parceiras autorizadas pelo Banco Central do Brasil.
                    </p>

                    <h2>3. ELEGIBILIDADE</h2>
                    <p>
                        Para utilizar nossos serviços, você deve ser maior de 18 anos, estar plenamente capaz segundo a legislação brasileira e fornecer informações verídicas, completas e atualizadas.
                    </p>

                    <h2>4. RESPONSABILIDADES DO USUÁRIO</h2>
                    <ul>
                        <li>Fornecer informações corretas e atualizadas.</li>
                        <li>Não utilizar a plataforma para fins ilícitos, fraudulentos ou que possam prejudicar terceiros.</li>
                        <li>Manter a confidencialidade de seus dados de acesso.</li>
                        <li>Responsabilizar-se pelos atos realizados através de sua conta.</li>
                    </ul>

                    <h2>5. SERVIÇOS OFERECIDOS</h2>
                    <p>
                        A Primora Capital atua como consultora e intermediadora na oferta de consórcios, conectando os interessados às administradoras devidamente autorizadas pelo Banco Central do Brasil.
                        <br /><br />
                        Não somos uma instituição financeira nem administradora de consórcios. O contrato formal do consórcio é celebrado diretamente entre o cliente e a administradora parceira.
                    </p>

                    <h2>6. LIMITAÇÃO DE RESPONSABILIDADE</h2>
                    <p>
                        A Primora Capital não se responsabiliza por:
                    </p>
                    <ul>
                        <li>Decisões financeiras tomadas pelos usuários.</li>
                        <li>Resultados futuros de contemplação, que dependem de sorteios e/ou lances.</li>
                        <li>Eventuais prejuízos decorrentes de uso indevido da plataforma.</li>
                        <li>Informações fornecidas incorretamente pelos usuários.</li>
                    </ul>

                    <h2>7. PROPRIEDADE INTELECTUAL</h2>
                    <p>
                        Todos os conteúdos presentes na plataforma — textos, imagens, marcas, logotipos, códigos e materiais — são protegidos por direitos de propriedade intelectual, sendo de titularidade da Primora Capital ou licenciados.
                        <br /><br />
                        É proibida qualquer reprodução, distribuição ou uso não autorizado desses conteúdos.
                    </p>

                    <h2>8. PRIVACIDADE E PROTEÇÃO DE DADOS</h2>
                    <p>
                        Ao utilizar nossos serviços, você concorda com a coleta e o tratamento dos seus dados pessoais, conforme estabelecido em nossa <a href="/privacy-policy" target="_blank">Política de Privacidade</a>.
                    </p>

                    <h2>9. MODIFICAÇÕES DOS TERMOS</h2>
                    <p>
                        Reservamo-nos o direito de alterar estes Termos a qualquer momento, sendo recomendável que você os revise periodicamente. Alterações relevantes serão comunicadas através dos nossos canais oficiais.
                    </p>

                    <h2>10. CANCELAMENTO E ENCERRAMENTO</h2>
                    <p>
                        Você pode, a qualquer momento, solicitar o cancelamento do uso da plataforma. A Primora Capital também poderá, sem aviso prévio, suspender ou encerrar o acesso em casos de descumprimento destes Termos ou de qualquer legislação vigente.
                    </p>

                    <h2>11. LEGISLAÇÃO APLICÁVEL E FORO</h2>
                    <p>
                        Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de [Cidade], para dirimir quaisquer dúvidas ou controvérsias, salvo outro definido pela legislação aplicável.
                    </p>

                    <p className={styles.privacyFinal}>
                        Primora Capital — Todos os direitos reservados
                    </p>
                    <p className={styles.privacyVersao}>
                        Versão 1.0 — Atualizada em 27 de maio de 2025
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TermsOfUse
