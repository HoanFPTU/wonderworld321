import Link from "next/link";
import React, { FC } from "react";
import "./index.scss";
interface checkboxProps {
  style: "active" | "none";
}

const Checkbox: FC<checkboxProps> = ({ style }) => {
  return <div className={`checkbox ${style}`}> </div>;
};

export default Checkbox;
