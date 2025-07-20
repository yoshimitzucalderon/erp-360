"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { demosMegamenu, appsMegamenu } from "../Data";
import { IconChevronDown } from "@tabler/icons-react";
import { Button, Dropdown } from "flowbite-react";

const DemosMenu = () => {
  return (
    <>
      <div className="relative group/menu">
        <Dropdown
          label=""
          className="w-screen  xl:w-[1150px]  rounded-sm"
          dismissOnClick={false}
          renderTrigger={() => (
            <div className="relative">
              <span className="py-1.5 px-4 text-base text-ld hover:text-primary hover:bg-lightprimary rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary">
                Demos <IconChevronDown className="ms-1" size={15} />
              </span>
            </div>
          )}
        >
          <div className="xl:p-6 p-3">
            <div className="mb-5">
              <h5 className="card-title">Different Demos</h5>
              <p>Included with the Package</p>
            </div>
            <div className="grid xl:grid-cols-5 grid-cols-1 gap-6">
              {demosMegamenu.map((item, index) => (
                <div key={index}>
                  <div className="overflow-hidden border border-ld rounded-md relative flex justify-center items-center group ">
                    <Image src={item.img} alt="materialm" className="w-full" />
                    {item.link != "" ? (
                      <>
                    <Button
                      as={Link}
                      href={item.link}
                      color={"primary"}
                      size={"sm"}
                      className="text-xs absolute  left-0 right-0 flex justify-center items-center w-fit mx-auto invisible group-hover:visible z-[1]"
                    >
                      Live Preview
                    </Button>
                    <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-blue-100  mix-blend-multiply invisible group-hover:visible"></div>
                    </>):null
                    }
                  </div>
                  <h5 className="text-center p-3  pb-0 text-sm font-semibold">
                    {item.name}
                  </h5>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h5 className="card-title mb-5">Different Apps</h5>
              <div className="grid xl:grid-cols-5 grid-cols-1 gap-6">
                {appsMegamenu.map((item, index) => (
                  <div key={index}>
                    <div className="overflow-hidden border border-ld rounded-md relative flex justify-center items-center group ">
                      <Image
                        src={item.img}
                        alt="materialm"
                        className="w-full"
                      />
                      <Button
                        as={Link}
                        href={item.link}
                        color={"primary"}
                        size={"sm"}
                        className="text-xs  absolute  left-0 right-0 flex justify-center items-center w-fit mx-auto invisible group-hover:visible z-[1]"
                      >
                        Live Preview
                      </Button>
                      <div className="absolute top-0 bottom-0 left-0 h-full w-full bg-blue-100  mix-blend-multiply invisible group-hover:visible"></div>
                    </div>
                    <h5 className="text-center p-3 text-sm font-semibold">
                      {item.name}
                    </h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dropdown>
      </div>
    </>
  );
};

export default DemosMenu;
