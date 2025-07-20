import React from "react";
import CardBox from "../../shared/CardBox";
import { Button } from "@headlessui/react";
import RoundedOutlinedBtnCode from "./Codes/RoundedOutlinedBtnCode";

const RoundedOutlineBtn = () => {
  return (
    <div>
      <CardBox>
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-lg font-semibold">Rounded Outlined Buttons</h4>
          <RoundedOutlinedBtnCode/>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Button className="ui-button border border-primary text-primary hover:bg-primary hover:text-white">
            Primary
          </Button>
          <Button className="ui-button border border-secondary text-secondary hover:bg-secondary hover:text-white">
            Secondary
          </Button>
          <Button className="ui-button border border-success text-success hover:bg-success hover:text-white">
            Success
          </Button>
          <Button className="ui-button border border-error text-error hover:bg-error hover:text-white">
            Error
          </Button>
          <Button className="ui-button border border-warning text-warning hover:bg-warning hover:text-white">
            Warning
          </Button>
          <Button className="ui-button border border-info text-info hover:bg-info hover:text-white">
            Info
          </Button>
        </div>
      </CardBox>
    </div>
  );
};

export default RoundedOutlineBtn;
