"use client";
import { Badge, Table, Dropdown, Progress } from "flowbite-react";
import React from "react";
import * as basicTable4 from "@/app/components/tables/tableData";
import Image from "next/image";
import { IconDotsVertical } from "@tabler/icons-react";
import { Icon } from "@iconify/react";

const BasicTable4 = () => {
  /*Table Action*/
  const tableActionData = [
    {
      icon: "solar:add-circle-outline",
      listtitle: "Add",
    },
    {
      icon: "solar:pen-new-square-broken",
      listtitle: "Edit",
    },
    {
      icon: "solar:trash-bin-minimalistic-outline",
      listtitle: "Delete",
    },
  ];
  return (
    <>
      <div className="border rounded-md border-ld overflow-hidden">
        <div className="overflow-x-auto">
          <Table className="">
            <Table.Head>
              <Table.HeadCell className="text-base font-semibold py-3">
                Invoice
              </Table.HeadCell>
              <Table.HeadCell className="text-base font-semibold py-3">
                Status
              </Table.HeadCell>
              <Table.HeadCell className="text-base font-semibold py-3">
                Customer
              </Table.HeadCell>
              <Table.HeadCell className="text-base font-semibold py-3">
                Progress
              </Table.HeadCell>
              <Table.HeadCell className="text-base font-semibold py-3"></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-border dark:divide-darkborder ">
              {basicTable4.basicTableData4.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Cell className="whitespace-nowrap">
                    <h6 className="text-sm">{item.invoice}</h6>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <Badge
                      color={`light${item.statuscolor}`}
                      className="capitalize "
                      icon={() => (
                        <item.statusicon size={15} className="me-1" />
                      )}
                    >
                      {item.status}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <div className="flex gap-3 items-center">
                      <Image
                        src={item.avatar}
                        alt="icon"
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="truncat line-clamp-2 max-w-56">
                        <h6 className="text-base">{item.name}</h6>
                        <p className="text-sm text-darklink">{item.handle}</p>
                      </div>
                    </div>
                  </Table.Cell>

                  <Table.Cell className="whitespace-nowrap">
                    <div className="text-darklink text-sm flex items-center gap-3">
                      <div className="w-full">
                        <Progress
                          progress={item.progress}
                          className="w-full"
                          color="primary"
                          size={"sm"}
                        />
                      </div>
                      {item.progress}%
                    </div>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap">
                    <Dropdown
                      label=""
                      dismissOnClick={false}
                      renderTrigger={() => (
                        <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                          <IconDotsVertical size={22} />
                        </span>
                      )}
                    >
                      {tableActionData.map((items, index1) => (
                        <Dropdown.Item key={index1} className="flex gap-3">
                          <Icon icon={`${items.icon}`} height={18} />
                          <span>{items.listtitle}</span>
                        </Dropdown.Item>
                      ))}
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </>
  );
};

export default BasicTable4;
