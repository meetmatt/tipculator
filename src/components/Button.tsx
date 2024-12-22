import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: (_event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({children, onClick}) => {
  return <button className="button" onClick={onClick}>{children}</button>;
}

export default Button
