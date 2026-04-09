'use client'

import Link from 'next/link';
import { useState } from 'react';

import { IMAGE } from 'src/presentation/assets';

import { MdCalendarToday, MdAccessTime } from 'react-icons/md';

import styles from './highlights.module.scss';

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
            title: 'Golpes em consórcio: como se proteger',
            desc: 'Saiba como identificar e evitar golpes comuns no mercado de consórcios. Dicas práticas para garantir sua segurança financeira.',
            reading: '5 minutos de leitura',
        };
    }
    if (slug.includes('tendencias')) {
        return {
            title: 'Tendências do setor de consórcios em 2024',
            desc: 'Descubra as principais tendências e novidades do mercado de consórcios para este ano.',
            reading: '6 minutos de leitura',
        };
    }
    if (slug.includes('planejamento')) {
        return {
            title: 'Planejamento financeiro com consórcio',
            desc: 'Veja como o consórcio pode ser um aliado no seu planejamento financeiro de longo prazo.',
            reading: '7 minutos de leitura',
        };
    }
    if (slug.includes('imposto')) {
        return {
            title: 'Imposto na compra de carro com consórcio',
            desc: 'Entenda como funciona a tributação na compra de veículos por consórcio e evite surpresas.',
            reading: '6 minutos de leitura',
        };
    }
    if (slug.includes('quatro-veiculos')) {
        return {
            title: 'Quatro veículos Hyundai novos no consórcio',
            desc: 'Conheça as vantagens de adquirir veículos Hyundai zero km através do consórcio.',
            reading: '7 minutos de leitura',
        };
    }

    return {
        title: 'Destaque do Blog',
        desc: 'Confira as melhores dicas e novidades sobre consórcio.',
        reading: '5 minutos de leitura',
    };
}

// Normalizar categorias e contar posts
const categoryMap: Record<string, { name: string; count: number }> = {};
for (const post of posts) {
    const key = post.category.trim().toLowerCase();
    if (!categoryMap[key]) {
        categoryMap[key] = { name: post.category.trim(), count: 0 };
    }
    categoryMap[key].count++;
}
const categories = Object.values(categoryMap);

export default function Highlights() {
    const [selectedCategory, setSelectedCategory] = useState('Todas as Categorias');
    const filteredPosts = selectedCategory === 'Todas as Categorias'
        ? posts
        : posts.filter(post => post.category.trim().toLowerCase() === selectedCategory.trim().toLowerCase());

    return (
        <section className={styles.highlightsSection}>
            <div className={styles.gridContainer}>
                {/* MOBILE: categorias antes dos posts */}
                <aside className={styles.rightMobile}>
                    <h4 className={styles.categoriesTitle}>CATEGORIAS</h4>
                    <div className={styles.categoriesList}>
                        <button
                            className={styles.categoryBtn + (selectedCategory === 'Todas as Categorias' ? ' ' + styles.active : '')}
                            onClick={() => setSelectedCategory('Todas as Categorias')}
                        >
                            Todas as Categorias
                            <span className={styles.count}>{posts.length}</span>
                        </button>
                        {categories.map((cat) => (
                            <button
                                className={styles.categoryBtn + (selectedCategory.trim().toLowerCase() === cat.name.trim().toLowerCase() ? ' ' + styles.active : '')}
                                key={cat.name}
                                onClick={() => setSelectedCategory(cat.name)}
                            >
                                {cat.name}
                                <span className={styles.count}>{cat.count}</span>
                            </button>
                        ))}
                    </div>
                </aside>
                <div className={styles.left}>
                    <h2 className={styles.sectionTitle}>Conteúdo em destaque</h2>
                    <div className={styles.postsGrid}>
                        {filteredPosts.map((post, idx) => {
                            const { title, desc, reading } = generatePostData(post.slug);
                            return (
                                <Link href={`/blog/${post.slug}`} className={styles.postCard} key={idx}>
                                    <div className={styles.imageWrapper}>
                                        <img src={post.image} alt={title} className={styles.postImg} />
                                    </div>
                                    <span className={styles.tag}>{post.tag}</span>
                                    <h3 className={styles.postTitle}>{title}</h3>
                                    <div className={styles.meta}>
                                        <span><MdCalendarToday size={16} /> 12/06/2024</span>
                                        <span className={styles.dot}>•</span>
                                        <span><MdAccessTime size={16} /> {reading}</span>
                                    </div>
                                    <p className={styles.postDesc}>{desc}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                {/* DESKTOP: categorias na lateral */}
                <aside className={styles.rightDesktop}>
                    <h4 className={styles.categoriesTitle}>CATEGORIAS</h4>
                    <div className={styles.categoriesList}>
                        <button
                            className={styles.categoryBtn + (selectedCategory === 'Todas as Categorias' ? ' ' + styles.active : '')}
                            onClick={() => setSelectedCategory('Todas as Categorias')}
                        >
                            Todas as Categorias
                            <span className={styles.count}>{posts.length}</span>
                        </button>
                        {categories.map((cat) => (
                            <button
                                className={styles.categoryBtn + (selectedCategory.trim().toLowerCase() === cat.name.trim().toLowerCase() ? ' ' + styles.active : '')}
                                key={cat.name}
                                onClick={() => setSelectedCategory(cat.name)}
                            >
                                {cat.name}
                                <span className={styles.count}>{cat.count}</span>
                            </button>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
}
