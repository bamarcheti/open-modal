import React from "react";

interface Props {
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
  styles?: string;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = "primary",
  styles,
}) => {
  return (
    <button
      className={`${variant} transition duration-300 hover:bg-opacity-90 font-medium rounded text-base px-4 py-1 text-center block ${
        styles ? styles : null
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
