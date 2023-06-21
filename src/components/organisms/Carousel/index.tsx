import React, { FC, useState } from "react";
import "./index.scss";

import CarouselBot from "../Carousel_bot";
import CarouselTop from "../Carousel_top";
const { Button, UseButton } = useState;

// setState
// useEffect
// ...code JS

const Carousel: FC = ({}) => {
  return (
    <div className="Carousel">
      <CarouselTop></CarouselTop>
      <CarouselBot></CarouselBot>
    </div>
  );
};

export default Carousel;
