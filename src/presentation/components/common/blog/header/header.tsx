import { IMAGE } from 'src/presentation/assets';

import styles from './header.module.scss';

const post = {
    image: IMAGE.QUATRO_VEICULOS_NOVOS_HYNDAI.src,
    tag: 'Veículos',
    title: 'Quatro veículos Hyundai novos no consórcios',
    date: '12/06/2024',
    readingTime: '7 minutos de leitura',
    link: '/blog/quatro-veiculos-novos-hyundai-no-consorcio',
};

export default function HeaderBlog() {
    return (
        <div className={styles.headerBlog} style={{ backgroundImage: `url(${post.image})` }}>
            <div className={styles.overlay} />
            <div className={styles.centerCard}>
                <span className={styles.tag}>{post.tag}</span>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.meta}>
                    <span>{post.date}</span>
                    <span className={styles.dot}>•</span>
                    <span>{post.readingTime}</span>
                </div>
                <a href={post.link} className={styles.readMoreBtn}>
                    LEIA MAIS
                </a>
            </div>
        </div>
    );
}
