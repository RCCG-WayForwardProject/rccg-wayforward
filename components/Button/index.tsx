import React from "react";

import styles from "./button.module.scss";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  type: "button" | "submit";
  variant: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  buttonStyle?: React.CSSProperties;
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  disabled,
  variant,
  size,
  buttonStyle,
  handleClick,
}) => {
  return (
    <button
      type={type}
      disabled={Boolean(disabled)}
      data-variant={variant}
      data-size={size}
      style={buttonStyle}
      onClick={handleClick}
      className={styles["button"]}
    >
      {label}
    </button>
  );
};

export default Button;
