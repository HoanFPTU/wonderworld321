import Link from "next/link";
import React, { FC } from "react";
import "./index.scss";
interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  style: "linear" | "none" | "black" | "circle";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ href, children, style, onClick }) => {
  if (href)
    return (
      <Link onClick={onClick} className={`button ${style}`} href={href}>
        {children}
      </Link>
    );
  return (
    <div onClick={onClick} className={`button ${style}`}>
      {children}
    </div>
  );
};

export default Button;
