import { Label, TextInput, Textarea, Button } from "flowbite-react";
import React from "react";
import TitleCard from "../../shared/TitleBorderCard";

const BasicLayout = () => {
  return (
    <div>
      <TitleCard title="Basic Layout">
        <div className="grid grid-cols-12 items-center pb-6">
          <div className="col-span-3">
            <Label htmlFor="name" value="Name" />
          </div>
          <div className="col-span-9">
            <TextInput
              id="name"
              type="text"
              placeholder="John Deo"
              sizing="md"
              className="form-control"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center pb-6">
          <div className="col-span-3">
            <Label htmlFor="company" value="Company" />
          </div>
          <div className="col-span-9">
            <TextInput
              id="company"
              type="text"
              placeholder="ACME Inc."
              sizing="md"
              className="form-control"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center pb-6">
          <div className="col-span-3">
            <Label htmlFor="email" value="Email" />
          </div>
          <div className="col-span-9">
            <TextInput
              id="email"
              type="text"
              placeholder="john.deo"
              sizing="md"
              className="form-control"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center pb-6">
          <div className="col-span-3">
            <Label htmlFor="phone" value="Phone No" />
          </div>
          <div className="col-span-9">
            <TextInput
              id="phone"
              type="text"
              placeholder="412 2150 451"
              sizing="md"
              className="form-control"
            />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center pb-6">
          <div className="col-span-3">
            <Label htmlFor="message" value="Message" />
          </div>
          <div className="col-span-9">
            <Textarea
              id="message"
              placeholder="Hi, Do you  have a moment to talk Jeo ?"
              required
              className="form-control-textarera"
              rows={3}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 items-center pb-6">
          <div className="col-span-3"></div>
          <div className="col-span-9">
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </div>
      </TitleCard>
    </div>
  );
};

export default BasicLayout;
