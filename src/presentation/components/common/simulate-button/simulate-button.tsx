import { ICON } from "src/presentation/assets";
import styles from "./simulate-button.module.scss";

export type SimulateButtonProps = {
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  style?: React.CSSProperties;
};

const SimulateButton: React.FC<SimulateButtonProps> = ({
  onClick,
  href,
  target,
  rel,
  type = "button",
  className,
  style,
}) => {
  const content = (
    <>
      <ICON.IconBrandWhatsapp className={styles.icon} />
      <span className={styles.text}>SIMULAR AGORA</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${styles.button} ${className || ""}`}
        style={style}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={`${styles.button} ${className || ""}`}
      style={style}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default SimulateButton;

