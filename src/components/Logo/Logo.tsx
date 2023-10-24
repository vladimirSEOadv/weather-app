import React from "react";
import styles from "./Logo.module.css";
import {Link} from "react-router-dom";
import logo from '../../assets/logo.png'

export const Logo: React.FC = () => {
    return (
        <div className={styles.logo}>
            <Link to={'/'}>
                <img className={styles.logo__img} src={logo} alt="Logo"/>
            </Link>
        </div>
    )
}
