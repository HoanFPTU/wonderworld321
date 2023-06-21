import Button from "@/components/atoms/button";
import Logo from "@/components/atoms/logo";
import Navigation from "@/components/molecules/navigation";
import React, { FC } from "react";
import "./index.scss";
interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="header">
      <Logo />

      <div className="header__right">
        <Navigation />

        <div className="header__button">
          <Button style="none" href="/login">
            Login
          </Button>
          <Button style="linear" href="/register">
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
