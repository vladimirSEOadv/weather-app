import React from "react";
import styles from "./DebounceInputLoader.module.css";

export const DebounceInputLoader: React.FC = () => {
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
