import React, { FC } from "react";
import "./index.scss";

const Progress: FC = () => {
  return (
    <div className="progress">
      <div className="progress__border">
        <div className="progress_per"></div>
      </div>
      <span>01</span>
    </div>
  );
};

export default Progress;
