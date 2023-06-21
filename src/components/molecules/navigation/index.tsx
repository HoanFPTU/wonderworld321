import Link from "@/components/atoms/link";
import React, { FC } from "react";
import "./index.scss";

const Navigation: FC = ({}) => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="">About</Link>
        </li>
        <li>
          <Link href="">Blog</Link>
        </li>
        <li>
          <Link href="">Video</Link>
        </li>
        <li>
          <Link href="">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
