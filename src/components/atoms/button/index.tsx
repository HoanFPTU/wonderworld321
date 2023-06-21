import Link from "next/link";
import React, { FC } from "react";
import "./index.scss";
interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  style: "linear" | "none" | "black";
}

const Button: FC<ButtonProps> = ({ href, children, style }) => {
  if (href)
    return (
      <Link className={`button ${style}`} href={href}>
        {children}
      </Link>
    );
  return <div className={`button ${style}`}>{children}</div>;
};

export default Button;
