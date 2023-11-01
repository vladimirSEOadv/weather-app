import React from "react";
import styles from "./LoadingBlock.module.css";

export const LoadingBlock: React.FC = () => {
  return (
    <div className={`${styles["loading-block"]}`}>
      <span className={`${styles["loader"]}`}></span>
    </div>
  );
};
