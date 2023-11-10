import React from "react";
import styles from "./Loader.module.css";

export const Loader: React.FC = () => {
  return (
    <div className={styles["loader"]}>
      <div className={styles["lds-default"]}>
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className={styles["lds-default__children"]}></div>
        ))}
      </div>
    </div>
  );
};
