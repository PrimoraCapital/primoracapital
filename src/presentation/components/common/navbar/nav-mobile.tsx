"use client";

import { usePathname, useRouter } from "next/navigation";
import { NavItem } from "src/presentation/components";
import { NavMobileProps } from "src/data/models";
import { MENU } from "src/data/ui";
import { IconX, IconBrandWhatsapp } from "@tabler/icons-react";

import S from "./nav-mobile.module.scss";
import buttonStyles from "../../form/button/button.module.scss";

const NavMobile = ({ closeMenu }: NavMobileProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (link: string) => {
    closeMenu();
    if (link.startsWith("#") || link.startsWith("/#")) {
      const id = link.includes("#")
        ? link.split("#")[1]
        : link.replace("#", "");
      if (pathname !== "/") {
        router.push(`/?scrollTo=${id}`);
      } else {
        const el = document.getElementById(id);
        if (el) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    } else {
      router.push(link);
    }
  };

  return (
    <div className={S["mobile-nav-container"]}>
      <nav className={S["mobile-nav"]}>
        <section className={S["close-section"]}>
          <IconX onClick={closeMenu} className={S["close-icon"]} />
        </section>
        <div className={S["nav-items"]}>
          {MENU.map((item, key) => (
            <NavItem
              key={key}
              label={item.label}
              new={item.new}
              link={item.link}
              onClick={() => handleClick(item.link ?? "#")}
              blank="none"
              closeMenu={closeMenu}
            >
              {item.children}
            </NavItem>
          ))}
        </div>
        <aside className={S["right-section"]}>
          <a
            href="https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Vim%20do%20site%20da%20PRIMORA%20Capital%20e%20tenho%20interesse%20em%20simular%20meu%20cons%C3%B3rcio.%20Poderiam%20me%20ajudar%20a%20encontrar%20a%20melhor%20op%C3%A7%C3%A3o?"
            target="_blank"
            rel="noopener noreferrer"
            className={S.link}
          >
            <button
              className={`${buttonStyles.btn} ${buttonStyles.btn2}`}
              style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <IconBrandWhatsapp size={18} />
              <span>Simular Agora</span>
            </button>
          </a>
        </aside>
      </nav>
    </div>
  );
};

export default NavMobile;
