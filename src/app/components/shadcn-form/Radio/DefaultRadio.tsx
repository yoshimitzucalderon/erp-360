import * as React from "react";

import CardBox from "../../shared/CardBox";
import { Label } from "@/app/components/shadcn-ui/Default-Ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/app/components/shadcn-ui/Default-Ui/radio-group";
import DefaultRadioCode from "./code/DefaultRadioCode";
const DefaultRadio = () => {
  return (
    <CardBox>
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-lg font-semibold">Default Radio Group</h4>
        <DefaultRadioCode/>
      </div>
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-top space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1" className="font-normal">Default</Label>
        </div>
        <div className="flex items-top space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2" className="font-normal"> Comfortable</Label>
        </div>
        <div className="flex items-top space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3" className="font-normal">Compact</Label>
        </div>
        <div className="flex items-top space-x-2">
          <RadioGroupItem value="digital" id="r4" />
          <Label htmlFor="r4" className="font-normal">Digital</Label>
        </div>
        <div className="flex items-top space-x-2">
          <RadioGroupItem value="Enlarge" id="r5" />
          <Label htmlFor="r5" className="font-normal">Enlarge</Label>
        </div>
        <div className="flex items-top space-x-2">
          <RadioGroupItem value="Maximize" id="r6" />
          <Label htmlFor="r6" className="font-normal">Maximize</Label>
        </div>
      </RadioGroup>
    </CardBox>
  );
};

export default DefaultRadio;
