import React, { useEffect, useState } from "react";
import { CustomInput } from "../CustomInput/CustomInput";
import { DebounceInputLoader } from "./DebounceInputLoader/DebounceInputLoader.tsx";
import styles from "./DebounceInput.module.css";

interface DebounceInputInterface {
  cb: (value: string) => void;
  delay: number;
  value: string;
  placeholder?: string;
}

export const DebounceInput: React.FC<DebounceInputInterface> = ({
  cb,
  delay,
  value,
  placeholder = "",
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [showLoader, setShowLoader] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      cb(inputValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, cb, delay]);

  const handleChange = (value: string): void => {
    setShowLoader(true);
    setInputValue(value);
  };

  return (
    <div className={styles["debounce-input"]}>
      <CustomInput {...props} value={inputValue} cb={handleChange} />
      {showLoader && <DebounceInputLoader />}
    </div>
  );
};
