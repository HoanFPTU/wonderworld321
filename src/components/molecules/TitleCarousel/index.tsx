import Link from "@/components/atoms/link";
import React, { FC } from "react";
import "./index.scss";
import Checkbox from "@/components/atoms/checkbox";
import Card from "@/components/atoms/card";
import Button from "@/components/atoms/button";

const TitleCarousel: FC = ({}) => {
  return (
    <div className="title_carousel">
      <h1>DỰ ÁN BẢO TỒN BIỂN</h1>
      <Button href="./" style="black">
        Tìm hiểu thêm
      </Button>
    </div>
  );
};

export default TitleCarousel;
