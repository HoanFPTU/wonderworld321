import React, { FC, useState } from "react";
import "./index.scss";

import CarouselBot from "../Carousel_bot";
import CarouselTop from "../Carousel_top";

// setState
// useEffect
// ...code JS

const Carousel: FC = ({}) => {
  const [currentCard, setCard] = React.useState(1);

  return (
    <div className="Carousel">
      <CarouselTop currentCard={currentCard}></CarouselTop>
      <CarouselBot
        preSlide={() => setCard(currentCard != 1 ? currentCard - 1 : 6)}
        nextSlide={() => setCard(currentCard != 6 ? currentCard + 1 : 1)}
        currentCard={currentCard}
      ></CarouselBot>
    </div>
  );
};

export default Carousel;
