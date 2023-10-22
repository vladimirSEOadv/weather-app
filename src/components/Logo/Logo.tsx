import React from "react";
import styles from "./Logo.module.css";
import {Link} from "react-router-dom";

export const Logo: React.FC = () => {
    return (
        <div className={styles.logo}>
            <Link to={'/'}>
                <img className={styles.logo__img} src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="Logo"/>
            </Link>
        </div>
    )
}
