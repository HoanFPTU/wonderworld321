import Link from "@/components/atoms/link";
import React, { FC } from "react";
import "./index.scss";
import Checkbox from "@/components/atoms/checkbox";
import Card from "@/components/atoms/card";
interface Listcardprops {
  currentCard: number;
}
const Listcard: FC<Listcardprops> = ({ currentCard }) => {
  if (currentCard === 1)
    return (
      <div className="listcard">
        <Card id="1" style="normal">
          TRẠM LẶN BIỂN TRINGUDA
        </Card>
        <Card id="2" style="normal">
          NHÂN SỰ TRINGUDA
        </Card>
        <Card id="3" style="normal">
          các hoạt động tringuda
        </Card>
        <Card id="4" style="normal">
          DỰ ÁN BẢO TỒN BIỂN
        </Card>
        <Card id="5" style="normal">
          NHÂN VIÊN TRINGUDA
        </Card>
        <Card id="6" style="normal">
          TRUYỀN THÔNG VỀ TRINGUDA
        </Card>
      </div>
    );
  if (currentCard === 2)
    return (
      <div className="listcard">
        <Card id="2" style="normal">
          NHÂN SỰ TRINGUDA
        </Card>
        <Card id="3" style="normal">
          các hoạt động tringuda
        </Card>
        <Card id="4" style="normal">
          DỰ ÁN BẢO TỒN BIỂN
        </Card>
        <Card id="5" style="normal">
          NHÂN VIÊN TRINGUDA
        </Card>
        <Card id="6" style="normal">
          TRUYỀN THÔNG VỀ TRINGUDA
        </Card>
        <Card id="1" style="normal">
          TRẠM LẶN BIỂN TRINGUDA
        </Card>
      </div>
    );
  if (currentCard === 3)
    return (
      <div className="listcard">
        <Card id="3" style="normal">
          các hoạt động tringuda
        </Card>
        <Card id="4" style="normal">
          DỰ ÁN BẢO TỒN BIỂN
        </Card>
        <Card id="5" style="normal">
          NHÂN VIÊN TRINGUDA
        </Card>
        <Card id="6" style="normal">
          TRUYỀN THÔNG VỀ TRINGUDA
        </Card>
        <Card id="1" style="normal">
          TRẠM LẶN BIỂN TRINGUDA
        </Card>
        <Card id="2" style="normal">
          NHÂN SỰ TRINGUDA
        </Card>
      </div>
    );
  if (currentCard === 4)
    return (
      <div className="listcard">
        <Card id="4" style="normal">
          DỰ ÁN BẢO TỒN BIỂN
        </Card>
        <Card id="5" style="normal">
          NHÂN VIÊN TRINGUDA
        </Card>
        <Card id="6" style="normal">
          TRUYỀN THÔNG VỀ TRINGUDA
        </Card>
        <Card id="1" style="normal">
          TRẠM LẶN BIỂN TRINGUDA
        </Card>
        <Card id="2" style="normal">
          NHÂN SỰ TRINGUDA
        </Card>
        <Card id="3" style="normal">
          các hoạt động tringuda
        </Card>
      </div>
    );
  if (currentCard === 5)
    return (
      <div className="listcard">
        <Card id="5" style="normal">
          NHÂN VIÊN TRINGUDA
        </Card>
        <Card id="6" style="normal">
          TRUYỀN THÔNG VỀ TRINGUDA
        </Card>
        <Card id="1" style="normal">
          TRẠM LẶN BIỂN TRINGUDA
        </Card>
        <Card id="2" style="normal">
          NHÂN SỰ TRINGUDA
        </Card>
        <Card id="3" style="normal">
          các hoạt động tringuda
        </Card>
        <Card id="4" style="normal">
          DỰ ÁN BẢO TỒN BIỂN
        </Card>
      </div>
    );
  if (currentCard === 6)
    return (
      <div className="listcard">
        <Card id="6" style="normal">
          TRUYỀN THÔNG VỀ TRINGUDA
        </Card>
        <Card id="1" style="normal">
          TRẠM LẶN BIỂN TRINGUDA
        </Card>
        <Card id="2" style="normal">
          NHÂN SỰ TRINGUDA
        </Card>
        <Card id="3" style="normal">
          các hoạt động tringuda
        </Card>
        <Card id="4" style="normal">
          DỰ ÁN BẢO TỒN BIỂN
        </Card>
        <Card id="5" style="normal">
          NHÂN VIÊN TRINGUDA
        </Card>
      </div>
    );
};

export default Listcard;
