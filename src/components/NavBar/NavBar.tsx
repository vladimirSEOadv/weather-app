import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { translations } from "../../translations/translations.ts";
import { LangContext } from "../../contex/LangContextWrapper/LangContextWrapper.tsx";

export const NavBar: React.FC = () => {
  const { currentLang } = useContext(LangContext);
  const linkData = [
    { name: translations.navLinks.main[currentLang], path: "/" },
    { name: translations.navLinks.favorite[currentLang], path: "/favorites" },
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles["navigation-list"]}>
        {linkData.map((link) => {
          return (
            <li key={link.name} className={styles["navigation-list__item"]}>
              <Link className={styles["navigation-list__link"]} to={link.path}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
