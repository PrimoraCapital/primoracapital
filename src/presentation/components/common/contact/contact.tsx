import styles from "./contact.module.scss";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const CONTACTS = [
  {
    icon: <MdLocationOn size={34} color="#1c1c1c" />,
    title: "NOSSO ENDEREÇO",
    desc: (
      <>
        R. Antônio Maniero, 25 - São Dimas
        <br />
        Piracicaba - SP, 13416-045
      </>
    ),
    button: "Ver localização",
    action:
      "https://www.google.com/maps/place/R.+Antônio+Maniero,+25+-+São+Dimas,+Piracicaba+-+SP,+13416-045/@-23.712219,-47.650315,17z/data=!3m1!4b1!4m5!3m4!1s0x94c584122701065f:0x1821f168adf77e0!8m2!3d-23.712224!4d-47.6481262",
    type: "primary",
  },
  {
    icon: <MdEmail size={34} color="#1c1c1c" />,
    title: "ENVIE UM E-MAIL",
    desc: "Nosso time especializado irá te enviar as melhores oportunidades.",
    button: "Mandar E-mail",
    action: "mailto:suporte@prosperitteconsult.com.br",
    type: "primary",
  },
  {
    icon: <FaWhatsapp size={34} color="#1c1c1c" />,
    title: "CONVERSE NO WHATSAPP",
    desc: "Prefere agilidade? Fale com nossos especialistas direto pelo WhatsApp.",
    button: "Falar no WhatsApp",
    action:
      "https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20da%20PRIMORA%20Capital.",
    type: "primary",
  },
];

export default function Contact() {
  return (
    <section id="contato" className={styles.contactSection}>
      <div className={styles.contactBox}>
        <h2 className={styles.title}>Entre com contato conosco.</h2>
        <p className={styles.subtitle}>
          Escolha o canal de sua preferência e tire suas dúvidas com nossa
          equipe de especialistas.
        </p>
        <div className={styles.cardsGrid}>
          {CONTACTS.map((item, idx) => (
            <div className={styles.card} key={idx}>
              <div className={styles.iconCircle}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
              {item.button && item.action && (
                <a
                  href={item.action}
                  className={styles.cardBtn}
                  target={item.action.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.action.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.button}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
