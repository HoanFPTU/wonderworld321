import React, { FC } from "react";
import "./index.scss";
interface CardProps {
  children?: React.ReactNode;
  style: "large" | "normal";
  src: string;
}

const Card: FC<CardProps> = ({ children, style, src }) => {
  return (
    <div className={`card ${style}`}>
      <img src={src} />
      <p className="card__text">{children}</p>
    </div>
  );
};

export default Card;
