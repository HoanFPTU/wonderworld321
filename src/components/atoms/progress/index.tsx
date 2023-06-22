import React, { FC } from "react";
import "./index.scss";
interface ProgressProps {
  currentCard: number;
}
const Progress: FC<ProgressProps> = ({ currentCard }) => {
  if (currentCard < 10)
    return (
      <div className="progress">
        <div className="progress__border">
          <div
            className="progress_per"
            style={{ width: `${currentCard / 0.06}%` }}
          ></div>
        </div>
        <span>0{currentCard}</span>
      </div>
    );
  else
    return (
      <div className="progress">
        <div className="progress__border">
          <div className="progress_per" style={{ width: "15%" }}></div>
        </div>
        <span>{currentCard}</span>
      </div>
    );
};

export default Progress;
