import React, { FC } from "react";
import "./index.scss";
import Button from "@/components/atoms/button";
import Progress from "@/components/atoms/progress";
import Link from "next/link";

interface CarouselBotProps {}

const CarouselBot: FC<CarouselBotProps> = ({}) => {
  return (
    <div className="Carousel_bot">
      <div className="Carousel_bot__top">
        <Button style="circle">
          <img src="./preslide.svg" alt="" />
        </Button>
        <Button style="circle">
          <img src="./nextslide.svg" alt="" />
        </Button>
        <Progress></Progress>
      </div>
      <Link href="./" className="link">
        Khám phá
      </Link>
    </div>
  );
};

export default CarouselBot;
