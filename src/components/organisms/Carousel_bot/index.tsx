import React, { FC } from "react";
import "./index.scss";
import Button from "@/components/atoms/button";
import Progress from "@/components/atoms/progress";
import Link from "next/link";

interface CarouselBotProps {
  preSlide: () => void;
  nextSlide: () => void;
  currentCard: number;
}

const CarouselBot: FC<CarouselBotProps> = ({
  preSlide,
  nextSlide,
  currentCard,
}) => {
  return (
    <div className="Carousel_bot">
      <div className="Carousel_bot__top">
        <Button onClick={() => preSlide()} style="circle">
          <img src="./preslide.svg" alt="" />
        </Button>
        <Button onClick={() => nextSlide()} style="circle">
          <img src="./nextslide.svg" alt="" />
        </Button>
        <Progress currentCard={currentCard}></Progress>
      </div>
      <Link href="./" className="link">
        Khám phá
      </Link>
    </div>
  );
};

export default CarouselBot;
