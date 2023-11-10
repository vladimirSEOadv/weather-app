import React from "react";
import styles from "./CustomSelect.module.css";

type optionType = Array<unknown>;

interface CustomSelectProps {
  options: optionType;
  cb: (value: string) => void;
  value: string;
}

export const CustomSelect = ({ options, cb, value }: CustomSelectProps) => {
  if (!options.length) {
    throw new Error("Error of custom select. Empty options in select props");
  }
  const handlerChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    cb(event.target.value);
  };

  return (
    <select value={value} onChange={handlerChange} className={styles["select"]}>
      {options.map((option) => {
        if (typeof option !== "string") {
          throw new Error("Error of custom select. Options must be strings");
        }
        return (
          <option
            className={styles["select__options"]}
            key={option}
            value={option}
          >
            {option}
          </option>
        );
      })}
    </select>
  );
};
