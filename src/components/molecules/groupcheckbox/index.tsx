import Link from "@/components/atoms/link";
import React, { FC } from "react";
import "./index.scss";
import Checkbox from "@/components/atoms/checkbox";

const Groupcheckbox: FC = ({}) => {
  return (
    <div className="groupcheckbox">
      <Checkbox style="active"></Checkbox>
      <Checkbox style="none"></Checkbox>
      <Checkbox style="none"></Checkbox>
    </div>
  );
};

export default Groupcheckbox;
