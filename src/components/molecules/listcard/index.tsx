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
      <Card src="/bg4.svg" style="normal">
        DỰ ÁN BẢO TỒN BIỂN
      </Card>
      <Card src="/bg5.svg" style="normal">
        NHÂN VIÊN TRINGUDA
      </Card>
      <Card src="/bg6.svg" style="normal">
        TRUYỀN THÔNG VỀ TRINGUDA
      </Card>
    </div>
  );
};

export default Listcard;
