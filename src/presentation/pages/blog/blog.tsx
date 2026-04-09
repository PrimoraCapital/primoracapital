import { Meta, Navbar, HeaderBlog, HighlightsBlog, Footer, Contact } from "src/presentation/components"


const Blog = () => {

    return (
        <div>
            <Meta
                title="Blog - Prospéritté Consult"
                description="Blog da Prospéritté Consult: dicas de consórcio, planejamento financeiro, tendências do mercado, educação financeira e depoimentos de clientes. Tudo sobre consórcio imobiliário, de veículos e muito mais."
                keywords="blog, consórcio, dicas, mercado, planejamento financeiro, educação financeira, depoimentos, consórcio imobiliário, consórcio de veículos, Prospéritté Consult, simulação, carta de crédito, notícias, tendências" />
            <Navbar />
            <HeaderBlog />
            <HighlightsBlog />
            <Contact />
            <Footer />
        </div>
    )
}

export default Blog
