import { ReactNode } from "react";
import { StaticImageData } from "next/image";

import { LoanRequest } from "src/presentation/components/form";

import S from "./header.module.scss";

type HeaderProps = {
  title: string;
  subtitle: string | ReactNode;
  paragraph: string;
  image: string | StaticImageData;
  showLoanRequest?: boolean;
};

const Header = ({
  title,
  subtitle,
  image,
  paragraph,
  showLoanRequest = true,
}: HeaderProps) => {
  const bgImage = typeof image === "string" ? image : image.src;

  return (
    <header
      id="faca-uma-simulacao"
      className={S.container}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${bgImage})`,
      }}
    >
      <div className={S["box-section"]}>
        <div className={S["text-section"]}>
          <h6 className={S.subtitle}>{title}</h6>
          <h1 className={S.title}>{subtitle}</h1>
          {paragraph && <p className={S.paragraph}>{paragraph}</p>}
        </div>

        {showLoanRequest && (
          <div className={S["form-section"]}>
            <LoanRequest />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
