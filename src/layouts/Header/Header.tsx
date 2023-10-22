import React from "react";
import styles from "./Header.module.css";
import {NavBar} from "../../components/NavBar/NavBar";
import {Logo} from "../../components/Logo/Logo";

export const Header: React.FC = () => {
    return (
      <div className='container'>
        <header className={styles.header}>
          <NavBar/>
          <Logo/>
        </header>
      </div>
)
}
