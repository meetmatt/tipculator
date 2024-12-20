import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick(event: React.MouseEvent<HTMLButtonElement>);
}

export default function Button({children, onClick}: ButtonProps) {
  return <button className="button" onClick={onClick}>{children}</button>;
}
