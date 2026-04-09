import { Footer, Meta, Navbar } from "src/presentation/components"

import styles from './privacy-policy.module.scss'

const PrivacyPolicy = () => {
    return (
        <div>
            <Meta
                title="Política de Privacidade | Consórcio Primora Capital"
                description="Saiba como a Primora Capital protege seus dados pessoais e garante a sua privacidade na contratação de consórcios digitais."
                keywords="Política de Privacidade, Consórcio, privacidade, dados pessoais, proteção de dados, consórcio digital, financiamento, aquisição de bens"
            />
            <Navbar />
            <div className={styles.privacyPolicyContainer}>
                <div className={styles.privacyPolicyContent}>
                    <h1 className={styles.privacyTitle}>POLÍTICA DE PRIVACIDADE</h1>

                    <h2>1. APRESENTAÇÃO</h2>
                    <p>
                        Esta Política de Privacidade tem como objetivo esclarecer como a Primora Capital coleta, utiliza, compartilha e protege os dados pessoais dos seus usuários, em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD) e demais legislações aplicáveis.
                        <br /><br />
                        Ao utilizar nosso site, plataforma ou contratar nossos serviços de consórcio, você declara estar ciente e de acordo com os termos aqui descritos.
                        <br /><br />
                        Nosso compromisso é garantir segurança, transparência e privacidade durante toda sua experiência conosco.
                    </p>

                    <h2>2. DEFINIÇÕES IMPORTANTES</h2>
                    <ul>
                        <li><b>Dados Pessoais:</b> Qualquer informação que permita sua identificação direta ou indireta.</li>
                        <li><b>Titular:</b> Pessoa física a quem os dados pessoais se referem.</li>
                        <li><b>Controladora:</b> Primora Capital, responsável por tomar as decisões sobre o tratamento dos dados.</li>
                        <li><b>Operadora:</b> Empresas parceiras que tratam dados em nosso nome.</li>
                        <li><b>Encarregado DPO:</b> Profissional que atua como canal de comunicação entre você e a Primora Capital em relação aos seus dados.</li>
                    </ul>

                    <h2>3. QUAIS DADOS COLETAMOS</h2>
                    <h3>3.1 Dados Informados por Você</h3>
                    <ul>
                        <li>Nome completo</li>
                        <li>CPF e documentos de identidade</li>
                        <li>Endereço completo</li>
                        <li>Telefone, WhatsApp e e-mail</li>
                        <li>Data de nascimento e profissão</li>
                        <li>Informações financeiras para análise de crédito</li>
                        <li>Selfie e foto de documentos para validação de identidade</li>
                    </ul>

                    <h3>3.2 Dados Coletados Automaticamente</h3>
                    <ul>
                        <li>Endereço IP</li>
                        <li>Geolocalização</li>
                        <li>Informações de navegação cookies, logs e dispositivo</li>
                    </ul>

                    <h2>4. FINALIDADE DO USO DOS DADOS</h2>
                    <ul>
                        <li>Realizar sua simulação de consórcio</li>
                        <li>Formalizar sua adesão ao grupo de consórcio</li>
                        <li>Analisar seu perfil para crédito e risco</li>
                        <li>Cumprir obrigações legais e regulatórias</li>
                        <li>Enviar comunicações e atualizações sobre sua cota</li>
                        <li>Realizar atendimento, suporte e relacionamento</li>
                        <li>Prevenir fraudes e garantir sua segurança</li>
                        <li>Melhorar nossos serviços, site e plataforma</li>
                    </ul>

                    <h2>5. COMPARTILHAMENTO DOS DADOS</h2>
                    <p>Seus dados poderão ser compartilhados com:</p>
                    <ul>
                        <li>Instituições financeiras parceiras</li>
                        <li>Administradoras de consórcios</li>
                        <li>Empresas de tecnologia que fornecem infraestrutura e segurança</li>
                        <li>Órgãos regulatórios e autoridades públicas, quando exigido</li>
                        <li>Empresas de prevenção a fraudes e bureaus de crédito</li>
                    </ul>
                    <p>Todos os parceiros seguem padrões rigorosos de segurança e confidencialidade.</p>

                    <h2>6. SEGURANÇA DOS DADOS</h2>
                    <ul>
                        <li>Criptografia de informações</li>
                        <li>Ambientes seguros de armazenamento</li>
                        <li>Controle de acessos internos</li>
                        <li>Auditorias e monitoramento constante</li>
                        <li>Políticas de segurança e privacidade aplicadas a todos os colaboradores</li>
                    </ul>

                    <h2>7. RETENÇÃO E EXCLUSÃO DOS DADOS</h2>
                    <p>Seus dados serão armazenados:</p>
                    <ul>
                        <li>Pelo tempo necessário para cumprir as finalidades desta política</li>
                        <li>Enquanto durar sua relação conosco</li>
                        <li>Para cumprimento de obrigações legais, contratuais ou regulatórias</li>
                    </ul>
                    <p>Após esse período, os dados serão devidamente eliminados ou anonimizados.</p>

                    <h2>8. DIREITOS DO TITULAR</h2>
                    <p>Você possui os seguintes direitos garantidos pela LGPD:</p>
                    <ul>
                        <li>Acesso aos seus dados</li>
                        <li>Confirmação da existência de tratamento</li>
                        <li>Correção de dados incorretos</li>
                        <li>Eliminação de dados desnecessários</li>
                        <li>Portabilidade dos dados</li>
                        <li>Informação sobre compartilhamento</li>
                        <li>Revogação de consentimento</li>
                    </ul>
                    <p>Para exercer seus direitos, entre em contato:</p>
                    <ul>
                        <li>Assunto: &quot;Direitos do Titular - Dados&quot;</li>
                    </ul>

                    <h2>9. ATENDIMENTO</h2>
                    <ul>
                        <li>WhatsApp: 19 99963-2067</li>
                    </ul>

                    <h2>10. ALTERAÇÕES NA POLÍTICA</h2>
                    <p>Podemos atualizar esta política periodicamente. Alterações relevantes serão comunicadas em nossos canais oficiais.</p>

                    <h2>11. LEGISLAÇÃO APLICÁVEL E FORO</h2>
                    <p>Esta política é regida pelas leis brasileiras, especialmente a Lei nº 13.709/2018 (LGPD). Fica eleito o foro da comarca de [cidade], salvo outro definido por lei aplicável.</p>

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

export default PrivacyPolicy
