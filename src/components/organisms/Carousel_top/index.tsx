import React, { FC } from "react";
import "./index.scss";
import Groupcheckbox from "@/components/molecules/groupcheckbox";
import TitleCarousel from "@/components/molecules/TitleCarousel";
import Listcard from "@/components/molecules/listcard";
interface CarouselTopProps {}

const CarouselTop: FC<CarouselTopProps> = ({}) => {
  return (
    <div className="Carousel_top">
      <Groupcheckbox></Groupcheckbox>
      <TitleCarousel></TitleCarousel>
      <Listcard></Listcard>
    </div>
  );
};

export default CarouselTop;
