"use client";
import React, { useState, useMemo } from 'react';
import { useReactTable, createColumnHelper, flexRender, getCoreRowModel } from '@tanstack/react-table';
import { Badge, Dropdown } from "flowbite-react";
import Image from "next/image";
import { IconDots } from "@tabler/icons-react";
import { Icon } from "@iconify/react";
import TitleIconCard from '../../shared/TitleIconCard';

export interface FilterTableType {
    id?: string;
    avatar?: string | any;
    name?: string;
    handle?: string;
    courses: {
        status: string;
        statuscolor: string;
    }[];
    users?: string;
    actions?: any;
}

const basicTableData5: FilterTableType[] = [
    {
        avatar: '/images/blog/blog-img1.jpg',
        name: 'Top Authors',
        handle: 'Successful Fellas',
        users: '4300 Users',
        courses: [
            {
                status: 'Angular',
                statuscolor: 'error'
            },
            {
                status: 'PHP',
                statuscolor: 'primary'
            }
        ]
    },
    {
        avatar: '/images/blog/blog-img2.jpg',
        name: 'Popular Authors',
        handle: 'Most Successful',
        users: '1200 Users',
        courses: [
            {
                status: 'Bootstrap',
                statuscolor: 'primary'
            }
        ]
    },
    {
        avatar: '/images/blog/blog-img3.jpg',
        name: 'New Users',
        handle: 'Awesome Users',
        users: '2000 Users',
        courses: [
            {
                status: 'Reactjs',
                statuscolor: 'success'
            },
            {
                status: 'Angular',
                statuscolor: 'error'
            }
        ]
    },
    {
        avatar: '/images/blog/blog-img4.jpg',
        name: 'Active Customers',
        handle: 'Best Customers',
        users: '1500 Users',
        courses: [
            {
                status: 'Bootstrap',
                statuscolor: 'primary'
            }
        ]
    },
    {
        avatar: '/images/blog/blog-img5.jpg',
        name: 'Bestseller Theme',
        handle: 'Amazing Templates',
        users: '9500 Users',
        courses: [
            {
                status: 'Angular',
                statuscolor: 'error'
            },
            {
                status: 'Reactjs',
                statuscolor: 'success'
            }
        ]
    }
];

const columnHelper = createColumnHelper<FilterTableType>();

const columns = [
    columnHelper.accessor('avatar', {
        cell: info => (
            <div className="flex gap-3 items-center">
                <Image src={info.getValue()} width={50} height={50} alt="icon" className="h-10 w-10 rounded-md" />
                <div className="truncate line-clamp-2 max-w-56">
                    <h6 className="text-base">{info.row.original.name}</h6>
                    <p className="text-sm ">{info.row.original.handle}</p>
                </div>
            </div>
        ),
        header: () => <span>Authors</span>,
    }),
    columnHelper.accessor('courses', {
        cell: info => (
            <div className="flex gap-2">
                {info.getValue().map((course, index) => (
                    <Badge
                        key={index}
                        color={`light${course.statuscolor}`}
                        className="capitalize"
                    >
                        {course.status}
                    </Badge>
                ))}
            </div>
        ),
        header: () => <span>Courses</span>,
    }),
    columnHelper.accessor('users', {
        cell: info => <p className=" text-sm">{info.getValue()}</p>,
        header: () => <span>Users</span>,
    }),
    columnHelper.accessor('actions', {
        cell: () => (
            <Dropdown
                label=""
                dismissOnClick={false}
                renderTrigger={() => (
                    <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                        <IconDots size={22} />
                    </span>
                )}
            >
                {[
                    { icon: "solar:add-circle-outline", listtitle: "Add" },
                    { icon: "solar:pen-new-square-broken", listtitle: "Edit" },
                    { icon: "solar:trash-bin-minimalistic-outline", listtitle: "Delete" },
                ].map((item, index) => (
                    <Dropdown.Item key={index} className="flex gap-3">
                        <Icon icon={item.icon} height={18} />
                        <span>{item.listtitle}</span>
                    </Dropdown.Item>
                ))}
            </Dropdown>
        ),
        header: () => <span></span>,
    }),
];

function FilteringTable() {
    const [data, setData] = useState<FilterTableType[]>(basicTableData5);
    const [filters, setFilters] = useState<{ [key: string]: string }>({
        name: '',
        courses: '',
        users: '',
    });

    // Filter the data based on the current filter state
    const filteredData = useMemo(() => {
        return data.filter(item => {
            return Object.keys(filters).every(key => {
                const filterValue = filters[key].toLowerCase();
                if (key === 'courses') {
                    return item.courses.some(course => course.status.toLowerCase().includes(filterValue));
                }
                return (item[key as keyof FilterTableType]?.toLowerCase().includes(filterValue)) || false;
            });
        });
    }, [data, filters]);

    const table = useReactTable({
        data: filteredData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const handleDownload = () => {
        const headers = ["Name", "Handle", "Users", "Courses"];
        const rows = data.map(item => [
            item.name,
            item.handle,
            item.users,
            item.courses.map(course => course.status).join(", "),
        ]);

        const csvContent = [
            headers.join(","),
            ...rows.map(e => e.join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "table-data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <TitleIconCard title="Filtering Table" onDownload={handleDownload}>
                <div className="border rounded-md border-ld overflow-hidden">
                    <div className="p-4">
                        {/* Filtering Inputs */}
                        <div className="flex sm:flex-row flex-col gap-6   mb-4">
                            <div className="w-full">
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Search by Author Name"
                                    value={filters.name}
                                    onChange={(e) => setFilters(prev => ({ ...prev, name: e.target.value }))}
                                    className="form-control-input"

                                />
                            </div>
                            <div className="w-full">
                                <input
                                    id="courses"
                                    type="text"
                                    name="courses"
                                    placeholder="Search by Courses"
                                    value={filters.courses}
                                    onChange={(e) => setFilters(prev => ({ ...prev, courses: e.target.value }))}
                                    className="form-control-input"
                                />
                            </div>
                            <div className="w-full">
                                <input
                                    id="users"
                                    type="text"
                                    name="users"
                                    placeholder="Search by Users"
                                    value={filters.users}
                                    onChange={(e) => setFilters(prev => ({ ...prev, users: e.target.value }))}
                                    className="form-control-input"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                {table.getHeaderGroups().map(headerGroup => (
                                    <tr key={headerGroup.id}>
                                        {headerGroup.headers.map(header => (
                                            <th key={header.id} className="text-base text-ld font-semibold py-3 text-left border-b border-ld px-4 py-3">
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(header.column.columnDef.header, header.getContext())}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody className="divide-y divide-border dark:divide-darkborder">
                                {table.getRowModel().rows.map(row => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map(cell => (
                                            <td key={cell.id} className="whitespace-nowrap py-3 px-4">
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </TitleIconCard>
        </>
    );
}

export default FilteringTable;






