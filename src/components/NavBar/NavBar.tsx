import React from "react";
import styles from "./NavBar.module.css";
import {Link} from "react-router-dom";

export const NavBar: React.FC = () => {
    const linkData = [{name: "Головна", path: '/'}, {name: "Обране", path: '/favorites'}];

    return (
        <nav className={styles.navbar}>
            <ul className={styles['navigation-list']}>
                {linkData.map((link) => {
                    return (
                        <li key={link.name} className={styles['navigation-list__item']}>
                            <Link className={styles['navigation-list__link']} to={link.path}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
