"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  IconMenu2,
  IconChevronDown,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

import { NavMobile } from "src/presentation/components";
import { IMAGE } from "src/presentation/assets";
import { MENU } from "src/data/ui";
import SimulateButton from "../simulate-button/simulate-button";

import S from "./navbar.module.scss";

interface MenuItem {
  label: string;
  link: string;
  new?: string;
}

const Navbar = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : ""
    );
    const target = params.get("scrollTo");
    if (pathname === "/" && target) {
      const el = document.getElementById(target);
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  }, [pathname]);

  const handleSmoothScroll = (href: string) => (e: React.MouseEvent) => {
    const isHome = pathname === "/";
    if (isHome && href.includes("#")) {
      e.preventDefault();
      const id = href.split("#")[1];
      const el = document.getElementById(id);
      if (el) {
        const offset = 80; // height of the navbar (5rem approx)
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
  };

  return (
    <nav className={`${S.navbar} ${S["fixed-blue"]}`}>
      <div className={S.container}>
        <section className={S["left-section"]}>
          <Link href="/">
            <Image
              src={IMAGE.LOGO_BRANCO}
              alt="Logo PRIMORA Capital"
              className={S.logo}
            />
          </Link>
          {isSideMenuOpen && <NavMobile closeMenu={() => setSideMenu(false)} />}
        </section>

        <div className={S["nav-items"]}>
          {MENU.map((item, key) => (
            <div key={key} className={S["nav-link"]}>
              {item.link &&
              (item.link.startsWith("#") || item.link.startsWith("/#")) ? (
                <a
                  href={item.link}
                  className={S["link-text"]}
                  onClick={handleSmoothScroll(item.link)}
                >
                  <span>{item.label}</span>
                  {item.children && (
                    <IconChevronDown
                      className={`${S["arrow-icon"]} ${S["rotate-180"]}`}
                    />
                  )}
                </a>
              ) : (
                <Link href={item.link ?? "#"} className={S["link-text"]}>
                  <span>{item.label}</span>
                  {item.children && (
                    <IconChevronDown
                      className={`${S["arrow-icon"]} ${S["rotate-180"]}`}
                    />
                  )}
                </Link>
              )}
              {item.children && (
                <div className={S.dropdown}>
                  {item.children.map((item: MenuItem, key: number) => (
                    <Link
                      key={key}
                      href={item.link}
                      className={S["dropdown-link"]}
                    >
                      <span className={S["link-label"]}>{item.label}</span>
                      {item.new && <p className={S.new}>{item.new}</p>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className={S["cta-link"]}>
            <SimulateButton
              href="https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Vim%20do%20site%20da%20PRIMORA%20Capital%20e%20tenho%20interesse%20em%20simular%20meu%20cons%C3%B3rcio.%20Poderiam%20me%20ajudar%20a%20encontrar%20a%20melhor%20op%C3%A7%C3%A3o?"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>

        <IconMenu2
          onClick={() => setSideMenu(true)}
          className={S["menu-icon"]}
        />
      </div>
    </nav>
  );
};

export default Navbar;
