import { AppProps } from "next/app";
import React, { Component, FC } from "react";
import "../styles/globals.scss";
import "../styles/index.scss";
import Button from "@/components/atoms/button";
import Progress from "@/components/atoms/progress";
import CarouselBot from "@/components/organisms/Carousel_bot";
import Carousel from "@/components/organisms/Carousel";

const test = () => {
  return (
    <>
      <div className="home">
        <Carousel></Carousel>
      </div>
    </>
  );
};
export default test;
