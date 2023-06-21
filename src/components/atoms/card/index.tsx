import React, { FC } from "react";
import "./index.scss";
import Link from "next/link";
interface CardProps {
  children?: React.ReactNode;
  style: "large" | "normal";
  src: string;
}

const Card: FC<CardProps> = ({ children, style, src }) => {
  return (
    <div className={`card ${style}`}>
      <img src={src} />
      <Link href="./" className="card__text">
        {children}
      </Link>
    </div>
  );
};

export default Card;
