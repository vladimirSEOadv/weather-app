import React from "react";
import styles from "./CustomButton.module.css";

export enum ButtonVariant {
  Default = "default",
  Small = "small",
}

interface CustomButtonProps {
  text: string;
  cb: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  cb,
  disabled = false,
  variant = "default",
}) => {
  const buttonVariants = {
    default: "default-button",
    small: "small-button",
  };

  const classes = `${
    styles[buttonVariants[variant as keyof typeof buttonVariants]]
  } ${styles.button}`;

  return (
    <button disabled={disabled} onClick={() => cb()} className={classes}>
      {text}
    </button>
  );
};
