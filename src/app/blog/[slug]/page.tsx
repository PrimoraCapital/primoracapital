import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { IMAGE } from 'src/presentation/assets';

import { MdCalendarToday, MdAccessTime } from 'react-icons/md';

import styles from './post.module.scss';
import { Contact, Footer, Navbar } from 'src/presentation/components';

const posts = [
    {
        tag: 'CLIENTE EM FOCO',
        category: 'Cliente em Foco',
        image: IMAGE.GOLPES.src,
        slug: 'golpes-em-consorcio-como-evitar',
    },
    {
        tag: 'MERCADO',
        category: 'Mercado',
        image: IMAGE.TENDENCIAS.src,
        slug: 'tendencias-do-setor-de-consorcios-em-2024',
    },
    {
        tag: 'CLIENTE EM FOCO',
        category: 'Cliente em Foco',
        image: IMAGE.PLANEJAMENTO.src,
        slug: 'planejamento-financeiro-com-consorcio',
    },
    {
        tag: 'DICAS DE INVESTIMENTO',
        category: 'Dicas de Investimento',
        image: IMAGE.IMPOSTO_COMPRA_CARRO.src,
        slug: 'imposto-na-compra-de-carro-com-consorcio',
    },
    {
        tag: 'MERCADO',
        category: 'Mercado',
        image: IMAGE.QUATRO_VEICULOS_NOVOS_HYNDAI.src,
        slug: 'quatro-veiculos-novos-hyundai-no-consorcio',
    },
];

function generatePostData(slug: string) {
    if (slug.includes('golpes')) {
        return {
            title: 'Golpes em consórcio: como se proteger de fraudes e armadilhas',
            reading: '5 minutos de leitura',
            content: (
                <div style={{ padding: '20px 0 20px 0', margin: '0 auto' }}>
                    <h2 style={{ color: '#100f30', marginBottom: '16px' }}>
                        O perigo dos golpes em consórcio
                    </h2>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        O consórcio é uma das formas mais inteligentes e seguras de conquistar bens como carros, imóveis e até serviços, sem precisar pagar juros.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        No entanto, com o crescimento desse mercado, infelizmente também aumentaram as tentativas de golpes aplicados por pessoas mal-intencionadas.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Entender como esses golpes funcionam é essencial para garantir que você realize seu sonho de forma segura e sem prejuízos.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Segundo dados do Banco Central, o número de denúncias de golpes relacionados a consórcios cresceu significativamente nos últimos anos.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Isso acontece, principalmente, pela falta de informação e pela ilusão de ofertas que parecem boas demais para serem verdade.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '24px' }}>
                        É exatamente nesse ponto que os golpistas se aproveitam: promessas de contemplação imediata, taxas muito abaixo do mercado, isenção de lances e outras mentiras que, na prática, só existem para enganar quem não conhece bem como funciona um consórcio legítimo.
                    </p>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Como funcionam os golpes mais comuns
                    </h3>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Os golpistas geralmente se passam por representantes de administradoras, muitas vezes criando sites falsos, perfis no Instagram, Facebook e até simulando conversas via WhatsApp com logotipos e documentos falsificados.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '24px' }}>
                        Eles oferecem falsas oportunidades, dizendo que você será contemplado imediatamente, sem precisar esperar os sorteios nem ofertar lances.
                        Após convencer a vítima, solicitam pagamentos antecipados sob pretexto de taxas de adesão, seguros ou até uma suposta garantia de contemplação. Depois que o dinheiro é transferido, desaparecem, bloqueando todos os canais de comunicação.
                    </p>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Sinais claros de golpe
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>Promessa de contemplação imediata sem sorteio ou lance.</li>
                        <li style={{ marginBottom: '8px' }}>Valores muito abaixo do mercado ou ofertas que parecem milagrosas.</li>
                        <li style={{ marginBottom: '8px' }}>Solicitação de pagamento antecipado via PIX, boleto ou conta de pessoa física.</li>
                        <li style={{ marginBottom: '8px' }}>Perfis em redes sociais sem CNPJ, sem endereço fixo e sem site oficial.</li>
                        <li style={{ marginBottom: '8px' }}>Dificuldade em encontrar informações da suposta empresa no Banco Central.</li>
                        <li style={{ marginBottom: '8px' }}>Pressão psicológica com frases como &quot;Últimas vagas&quot;, &quot;Só hoje&quot; ou &quot;Oferta exclusiva&quot;.</li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Como verificar se um consórcio é confiável
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            Consulte o Banco Central. Verifique se a empresa consta no cadastro oficial (bcb.gov.br).
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Cheque o CNPJ. A empresa precisa ter CNPJ ativo, consultável no site da Receita Federal.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Evite pagamentos antecipados. Taxas são pagas diretamente à administradora, com contrato.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Desconfie de promessas fora da realidade. Nenhuma empresa garante contemplação sem sorteio ou lance.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Verifique a reputação da empresa em sites como Reclame Aqui, redes sociais e Google.
                        </li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Dicas extras para sua segurança
                    </h3>

                    <ul style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            Nunca envie dados pessoais por WhatsApp sem confirmar a autenticidade da empresa.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Desconfie de intermediários que se apresentam como facilitadores da contemplação.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Procure conversar pessoalmente ou por videochamada com um consultor oficial.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Leia atentamente todas as cláusulas do contrato antes de assinar qualquer documento.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Em caso de dúvida, fale diretamente com a administradora, sem intermediários.
                        </li>
                    </ul>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        O que fazer se cair em um golpe
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            Faça um boletim de ocorrência na delegacia, seja ela física ou online.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Comunique imediatamente seu banco para tentar bloquear a transação.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Informe o golpe ao Banco Central.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Denuncie o perfil, site ou contato falso nas redes sociais.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Busque apoio jurídico para tentar recuperar os valores.
                        </li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Conclusão
                    </h3>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Informação é sua maior proteção. Compartilhe esse conteúdo com quem você conhece e ajude outras pessoas a não caírem em golpes relacionados a consórcios.
                    </p>

                    <p style={{ color: '#616161' }}>
                        O consórcio é, sim, uma excelente forma de adquirir bens, desde que seja feito de maneira segura, com empresas autorizadas e dentro da lei.
                    </p>
                </div>
            ),
        };
    }

    if (slug.includes('tendencias')) {
        return {
            title: 'Tendências do setor de consórcios em 2024',
            reading: '6 minutos de leitura',
            content: (
                <div style={{ padding: '20px 0 20px 0', margin: '0 auto' }}>
                    <h2 style={{ color: '#100f30', marginBottom: '16px' }}>
                        O cenário do consórcio no Brasil: tendências e perspectivas para 2024
                    </h2>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        O mercado de consórcios no Brasil tem apresentado crescimento consistente nos últimos anos, consolidando-se como uma alternativa sólida para aquisição de bens e serviços. Em 2024, o setor se destaca não apenas pelo volume de negócios, mas também pela inovação e adaptação às novas demandas dos consumidores.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Segundo dados da Associação Brasileira de Administradoras de Consórcios (ABAC), o número de participantes ativos ultrapassou a marca de 9 milhões, refletindo a confiança do brasileiro nesse modelo de compra planejada. A busca por alternativas ao crédito tradicional, especialmente diante das altas taxas de juros, impulsiona ainda mais o segmento.
                    </p>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Principais tendências para o ano
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Digitalização dos processos:</strong> Administradoras investem em plataformas digitais, facilitando adesão, acompanhamento de cotas e participação em assembleias online.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Personalização de planos:</strong> Novos produtos permitem que o consorciado escolha prazos, valores de crédito e até mesmo a forma de contemplação, tornando o consórcio mais flexível.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Expansão para novos segmentos:</strong> Além de imóveis e veículos, cresce a procura por consórcios de serviços, energia solar, educação e até procedimentos médicos.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Educação financeira:</strong> Administradoras promovem conteúdos e eventos para orientar o consumidor sobre planejamento e uso consciente do consórcio.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Transparência e segurança:</strong> O setor investe em tecnologia para garantir a autenticidade das operações e proteger os dados dos clientes.
                        </li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Oportunidades e desafios do setor
                    </h3>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        O consórcio se consolida como alternativa de investimento e planejamento financeiro, especialmente em tempos de instabilidade econômica. A possibilidade de adquirir bens sem juros e com parcelas acessíveis atrai diferentes perfis de consumidores, do investidor ao comprador de primeira viagem.
                    </p>

                    <ul style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Oportunidade:</strong> O aumento da procura por consórcios de imóveis e veículos, impulsionado pela dificuldade de acesso ao crédito tradicional.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Desafio:</strong> Manter a atratividade dos grupos diante da concorrência com financiamentos e outras modalidades de crédito.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Oportunidade:</strong> Crescimento dos consórcios de serviços, que permitem ao consumidor planejar viagens, reformas e até procedimentos de saúde.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Desafio:</strong> Garantir a segurança digital e a transparência nas operações online.
                        </li>
                    </ul>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Dicas para quem deseja entrar em um consórcio em 2024
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            Pesquise a reputação da administradora junto ao Banco Central e órgãos de defesa do consumidor.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Analise o regulamento do grupo, prazos, taxas e condições de contemplação.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Planeje seu orçamento para manter as parcelas em dia e aumentar suas chances de contemplação.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Fique atento às oportunidades de lances e sorteios, que podem antecipar a conquista do bem.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Utilize os canais digitais para acompanhar sua cota e participar das assembleias.
                        </li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Conclusão
                    </h3>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        O consórcio segue como uma das melhores opções para quem busca planejamento, economia e segurança na aquisição de bens e serviços. Em 2024, a inovação e a digitalização tornam o processo ainda mais acessível e transparente, beneficiando milhões de brasileiros.
                    </p>

                    <p style={{ color: '#616161' }}>
                        Antes de aderir, informe-se, compare opções e escolha uma administradora confiável. Assim, você garante uma experiência positiva e realiza seus objetivos com tranquilidade.
                    </p>
                </div>
            ),
        };
    }
    if (slug.includes('planejamento')) {
        return {
            title: 'Planejamento financeiro com consórcio',
            reading: '7 minutos de leitura',
            content: (
                <div style={{ padding: '20px 0 20px 0', margin: '0 auto' }}>
                    <h2 style={{ color: '#100f30', marginBottom: '16px' }}>
                        Como o consórcio pode transformar seu planejamento financeiro
                    </h2>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        O planejamento financeiro é fundamental para quem deseja conquistar objetivos de médio e longo prazo sem comprometer a saúde do orçamento. O consórcio surge como uma ferramenta estratégica, permitindo a aquisição de bens e serviços de forma programada, sem juros e com parcelas acessíveis.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Ao optar pelo consórcio, o consumidor foge das armadilhas do crédito caro e aprende a poupar de maneira disciplinada. O sistema é simples: um grupo de pessoas se reúne para contribuir mensalmente em um fundo comum, e, a cada mês, um ou mais participantes são contemplados por sorteio ou lance.
                    </p>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Vantagens do consórcio para o seu bolso
                    </h3>

                    <ul style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Sem juros:</strong> Ao contrário do financiamento, o consórcio não cobra juros, apenas uma taxa de administração diluída ao longo do plano.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Parcelas acessíveis:</strong> O valor das parcelas é ajustado ao orçamento do participante, facilitando o controle financeiro.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Flexibilidade:</strong> O crédito pode ser utilizado para diferentes finalidades, como compra de imóveis, veículos, reformas ou serviços.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Disciplina:</strong> O compromisso mensal incentiva o hábito de poupar e evita gastos impulsivos.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Possibilidade de antecipação:</strong> O participante pode ofertar lances para tentar ser contemplado antes do prazo final.
                        </li>
                    </ul>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Como incluir o consórcio no seu planejamento
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            Defina seu objetivo: imóvel, carro, serviço ou investimento.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Calcule o valor necessário e o prazo desejado para a conquista.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Escolha uma administradora autorizada pelo Banco Central e analise as condições do grupo.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Reserve uma parte do orçamento mensal para as parcelas, evitando comprometer outras despesas essenciais.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Acompanhe as assembleias e oportunidades de lance para antecipar a contemplação.
                        </li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Dicas para potencializar seus resultados
                    </h3>

                    <ul style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            Mantenha as parcelas em dia para não perder oportunidades de contemplação.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Utilize simuladores online para comparar planos e valores.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Fique atento às regras de reajuste do crédito e das parcelas.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Considere a possibilidade de vender a carta contemplada como estratégia de investimento.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Busque orientação de especialistas para tirar dúvidas e planejar melhor sua participação.
                        </li>
                    </ul>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Conclusão
                    </h3>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        O consórcio é uma solução inteligente para quem deseja realizar sonhos sem comprometer o orçamento. Com planejamento, disciplina e informação, é possível conquistar bens e serviços de forma segura, econômica e eficiente.
                    </p>

                    <p style={{ color: '#616161' }}>
                        Antes de aderir, avalie suas necessidades, compare opções e escolha uma administradora confiável. Assim, você garante tranquilidade e sucesso em seu planejamento financeiro.
                    </p>
                </div>
            ),
        };
    }
    if (slug.includes('imposto')) {
        return {
            title: 'Imposto na compra de carro com consórcio',
            reading: '6 minutos de leitura',
            content: (
                <div style={{ padding: '20px 0 20px 0', margin: '0 auto' }}>
                    <h2 style={{ color: '#100f30', marginBottom: '16px' }}>
                        Impostos e taxas na compra de carro por consórcio: o que você precisa saber
                    </h2>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Ao adquirir um veículo por consórcio, é fundamental entender todos os custos envolvidos, especialmente os impostos e taxas obrigatórias. Embora o consórcio seja uma alternativa sem juros, existem tributos e despesas que devem ser considerados no planejamento financeiro.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        O desconhecimento dessas obrigações pode gerar surpresas desagradáveis e comprometer o orçamento. Por isso, é importante conhecer cada etapa do processo e se preparar para os pagamentos necessários após a contemplação.
                    </p>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Principais impostos e taxas na compra de veículos
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>IPVA (Imposto sobre a Propriedade de Veículos Automotores):</strong> Tributo anual obrigatório, cujo valor varia conforme o estado e o valor do veículo.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Licenciamento:</strong> Taxa anual para regularização do veículo e emissão do documento de circulação.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Taxa de transferência:</strong> Cobrada quando o veículo é transferido para o nome do consorciado após a contemplação.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Seguro obrigatório (DPVAT):</strong> Destinado a indenizar vítimas de acidentes de trânsito, pode ser cobrado junto ao licenciamento.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Taxa de administração:</strong> Valor cobrado pela administradora do consórcio, diluído nas parcelas.
                        </li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Dicas para evitar surpresas com impostos e taxas
                    </h3>

                    <ul style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            Consulte a tabela de IPVA do seu estado antes de adquirir o veículo.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Reserve um valor extra para cobrir taxas de transferência e licenciamento.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Fique atento ao calendário de pagamento do IPVA e do licenciamento para evitar multas.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Verifique se o seguro obrigatório está incluído nas despesas iniciais.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Analise o contrato do consórcio para entender todas as taxas cobradas pela administradora.
                        </li>
                    </ul>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Como se planejar para os custos pós-contemplação
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            Inclua no seu planejamento financeiro todos os tributos e taxas obrigatórias.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Após a contemplação, solicite à administradora um detalhamento dos custos para transferência e regularização do veículo.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Guarde todos os comprovantes de pagamento para evitar problemas futuros.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Considere contratar um seguro adicional para proteger seu patrimônio.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Mantenha-se informado sobre possíveis mudanças na legislação tributária.
                        </li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Conclusão
                    </h3>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        O consórcio é uma excelente alternativa para adquirir um veículo sem juros, mas é fundamental conhecer e se preparar para os impostos e taxas obrigatórias. Com planejamento, é possível evitar surpresas e garantir uma experiência tranquila e segura.
                    </p>

                    <p style={{ color: '#616161' }}>
                        Antes de aderir, informe-se sobre todos os custos envolvidos e mantenha seu orçamento organizado. Assim, você aproveita todos os benefícios do consórcio e realiza seu sonho com tranquilidade.
                    </p>
                </div>
            ),
        };
    }
    if (slug.includes('quatro-veiculos')) {
        return {
            title: 'Quatro veículos Hyundai novos no consórcio',
            reading: '7 minutos de leitura',
            content: (
                <div style={{ padding: '20px 0 20px 0', margin: '0 auto' }}>
                    <h2 style={{ color: '#100f30', marginBottom: '16px' }}>
                        Hyundai no consórcio: conheça quatro opções de veículos zero km para 2024
                    </h2>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Adquirir um veículo Hyundai zero km por meio do consórcio é uma alternativa cada vez mais procurada por quem busca economia, flexibilidade e segurança. A marca se destaca no mercado brasileiro pela qualidade, tecnologia e baixo custo de manutenção, tornando-se uma escolha inteligente para diferentes perfis de consumidores.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        O consórcio permite planejar a compra do carro novo sem pagar juros, com parcelas acessíveis e possibilidade de antecipação da contemplação por meio de lances. Em 2024, quatro modelos Hyundai se destacam como excelentes opções para quem deseja investir em mobilidade e conforto.
                    </p>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Modelos Hyundai em destaque
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>HB20:</strong> Compacto, econômico e com design moderno, o HB20 é ideal para o dia a dia urbano. Oferece baixo consumo de combustível, tecnologia embarcada e ótimo valor de revenda.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Creta:</strong> SUV com amplo espaço interno, conforto e segurança. O Creta é perfeito para famílias e quem busca versatilidade, com versões que atendem diferentes necessidades.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>HB20S:</strong> A versão sedã do HB20 alia elegância, porta-malas espaçoso e excelente desempenho, sendo uma ótima opção para quem precisa de mais espaço sem abrir mão da economia.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Santa Fe:</strong> SUV premium, com acabamento sofisticado, tecnologia de ponta e alto padrão de segurança. Indicado para quem busca luxo e performance.
                        </li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Vantagens de comprar Hyundai pelo consórcio
                    </h3>

                    <ul style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Sem juros:</strong> O consórcio não cobra juros, apenas taxa de administração diluída.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Parcelas acessíveis:</strong> O valor das parcelas cabe no orçamento e pode ser ajustado conforme a necessidade.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Flexibilidade:</strong> Possibilidade de ofertar lances para antecipar a contemplação.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Garantia de fábrica:</strong> Todos os modelos adquiridos por consórcio contam com garantia e assistência técnica da Hyundai.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            <strong>Valorização:</strong> Veículos Hyundai têm excelente valor de revenda, tornando o investimento ainda mais seguro.
                        </li>
                    </ul>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Como participar de um consórcio Hyundai
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            Escolha o modelo Hyundai que melhor atende suas necessidades.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Procure uma administradora autorizada e simule o valor do crédito e das parcelas.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Analise o regulamento do grupo, prazos e condições de contemplação.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Reserve parte do orçamento para ofertar lances, caso deseje antecipar a contemplação.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Acompanhe as assembleias e mantenha as parcelas em dia para garantir sua participação.
                        </li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Conclusão
                    </h3>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        O consórcio Hyundai é uma alternativa inteligente para quem deseja adquirir um veículo zero km com economia, segurança e flexibilidade. Com planejamento, é possível conquistar o carro dos sonhos sem comprometer o orçamento.
                    </p>

                    <p style={{ color: '#616161' }}>
                        Antes de aderir, pesquise, compare opções e escolha uma administradora confiável. Assim, você garante uma experiência positiva e aproveita todos os benefícios que só o consórcio pode oferecer.
                    </p>
                </div>
            ),
        };
    }
    return {
        title: 'Destaque do Blog',
        reading: '5 minutos de leitura',
        content: (
            <>
                <p style={{ color: '#616161' }}>Confira as melhores dicas e novidades sobre consórcio, planejamento financeiro e mercado.</p>
            </>
        ),
    };
}

const categoryMap: Record<string, { name: string; count: number }> = {};
for (const post of posts) {
    const key = post.category.trim().toLowerCase();
    if (!categoryMap[key]) {
        categoryMap[key] = { name: post.category.trim(), count: 0 };
    }
    categoryMap[key].count++;
}
const categories = Object.values(categoryMap);

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = posts.find(p => p.slug === params.slug);
    if (!post) return notFound();
    const { title, reading, content } = generatePostData(post.slug);

    return (
        <div>
            <Navbar />
            <div className={styles.blogGrid}>
                <aside className={styles.rightMobile}>
                    <h4 className={styles.categoriesTitle}>CATEGORIAS</h4>
                    <div className={styles.categoriesList + ' ' + styles.stickyCategories}>
                        <Link
                            href="/blog"
                            className={styles.categoryBtn}
                        >
                            Todas as Categorias
                            <span className={styles.count}>{posts.length}</span>
                        </Link>
                        {categories.map((cat) => (
                            <Link
                                href={`/blog?categoria=${encodeURIComponent(cat.name)}`}
                                className={styles.categoryBtn}
                                key={cat.name}
                            >
                                {cat.name}
                                <span className={styles.count}>{cat.count}</span>
                            </Link>
                        ))}
                    </div>
                </aside>
                <div className={styles.left}>
                    <div className={styles.imageWrapper}>
                        <Image src={post.image} alt={title} width={800} height={400} className={styles.image} />
                    </div>
                    <span className={styles.tag}>{post.tag}</span>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.meta}>
                        <span><MdCalendarToday size={16} /> 12/06/2024</span>
                        <span className={styles.dot}>•</span>
                        <span><MdAccessTime size={16} /> {reading}</span>
                    </div>
                    <div className={styles.content}>{content}</div>
                </div>
                <aside className={styles.rightDesktop}>
                    <h4 className={styles.categoriesTitle}>CATEGORIAS</h4>
                    <div className={styles.categoriesList + ' ' + styles.stickyCategories}>
                        <Link
                            href="/blog"
                            className={styles.categoryBtn}
                        >
                            Todas as Categorias
                            <span className={styles.count}>{posts.length}</span>
                        </Link>
                        {categories.map((cat) => (
                            <Link
                                href={`/blog?categoria=${encodeURIComponent(cat.name)}`}
                                className={styles.categoryBtn}
                                key={cat.name}
                            >
                                {cat.name}
                                <span className={styles.count}>{cat.count}</span>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
            <Contact />
            <Footer />
        </div>
    );
} 