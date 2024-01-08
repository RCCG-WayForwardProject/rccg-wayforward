import React from "react";

import styles from "./button.module.scss";
import Icon from "../Icon";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  type: "button" | "submit";
  variant: "primary" | "secondary";
  size?: "mini" | "small" | "medium" | "large";
  buttonStyle?: React.CSSProperties;
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  disabled,
  loading,
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
      {loading ? <Icon icon="loading" /> : null}
    </button>
  );
};

export default Button;
