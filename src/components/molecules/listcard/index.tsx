import Link from "@/components/atoms/link";
import React, { FC } from "react";
import "./index.scss";
import Checkbox from "@/components/atoms/checkbox";
import Card from "@/components/atoms/card";

const Listcard: FC = ({}) => {
  return (
    <div className="listcard">
      <Card src="/bg1.svg" style="normal">
        TRẠM LẶN BIỂN TRINGUDA
      </Card>
      <Card src="/bg2.svg" style="normal">
        NHÂN SỰ TRINGUDA
      </Card>
      <Card src="/bg3.svg" style="normal">
        các hoạt động tringuda
      </Card>
    </div>
  );
};

export default Listcard;
