import S from './rate.module.scss'

const Rate = () => {
    return (
        <section className={S.rateSection}>
            <div className={S.bgImage} />
            <div className={S.overlay} />
            <div className={S.container}>
                <div className={S.content}>
                    <h2 className={S.title}>A menor taxa com<br />parcelas que<br />cabem no bolso</h2>
                    <div className={S.subtext}>A partir de</div>
                    <div className={S.rateValue}>0,06<span className={S.percent}>%</span></div>
                    <div className={S.perMonth}>ao mês.</div>
                </div>
            </div>
        </section>
    )
}

export default Rate
