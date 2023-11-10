import React, { ChangeEvent } from "react";
import styles from "./CustomInput.module.css";

interface CustomInputInterface {
  placeholder: string;
  cb: (value: string) => void;
  value?: string;
}

export const CustomInput: React.FC<CustomInputInterface> = ({
  placeholder,
  cb,
  value = "",
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    cb(event.target.value);
  };
  return (
    <input
      value={value}
      onChange={handleChange}
      className={`${styles["input"]} ${styles["input-default"]}`}
      placeholder={placeholder}
      type="text"
    ></input>
  );
};
