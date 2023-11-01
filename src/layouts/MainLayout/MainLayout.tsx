import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import styles from "./MainLayout.module.css";
import { Footer } from "../Footer/Footer";
import { LangContextWrapper } from "../../contex/LangContextWrapper/LangContextWrapper";

export const MainLayout = () => {
  return (
    <LangContextWrapper>
      <div className="root__layout">
        <Header />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LangContextWrapper>
  );
};
