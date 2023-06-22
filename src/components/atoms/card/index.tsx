import React, { FC } from "react";
import "./index.scss";
import Link from "next/link";
interface CardProps {
  children?: React.ReactNode;
  style: "large" | "normal";

  id: string;
}

const Card: FC<CardProps> = ({ children, style, id }) => {
  return (
    <div className={`card ${style}`}>
      <img src={`bg${id}.svg`} />
      <Link href="./" className="card__text">
        {children}
      </Link>
    </div>
  );
};

export default Card;
