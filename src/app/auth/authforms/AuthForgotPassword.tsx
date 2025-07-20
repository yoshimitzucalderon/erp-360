import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React from "react";

const AuthForgotPassword = () => {
  return (
    <>
      <form className="mt-6">
        <div className="mb-4">
          <div className="mb-2 block">
            <Label htmlFor="emadd" value="Email Address" />
          </div>
          <TextInput
            id="emadd"
            type="text"
            sizing="md"
            className="form-control"
          />
        </div>
        <Button color={"primary"} className=" w-full">
          Forgot Password
        </Button>
       
      </form>
    </>
  );
};

export default AuthForgotPassword;
