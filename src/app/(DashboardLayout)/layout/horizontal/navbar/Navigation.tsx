import { useState } from 'react';
import { Navbar } from 'flowbite-react';
import { IconChevronDown } from '@tabler/icons-react';
import ChildComponent from './ChildComponent';
import { Icon } from "@iconify/react";
import Menuitems from '../MenuData';
import { usePathname } from 'next/navigation';
import Link from 'next/link';




const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [active, setActive] = useState(Menuitems[0].id);

const pathname = usePathname();

  const handleDropdownEnter = (itemId: any) => {
    setActiveDropdown(itemId);
    setActive(itemId);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleChildClick = (parentId: any) => {
    setActive(parentId);
  };
  return (
    <Navbar fluid={true} rounded={true} className="horizontal-nav bg-transparent dark:bg-transparent sm:px-0 xl:py-4 py-0">
      <Navbar.Collapse className="xl:block">
        <ul className="flex items-center space-x-3">
          {Menuitems.map((item) => {
            let isActive = false;
             item.children.find((item:any) => {
              if(item?.children){
                let nestedvalue =  item.children.find((value:any) => value.href === pathname);
                if(nestedvalue){isActive = true}
              }else{
                let value = item.href === pathname;
                if(value){isActive = true}
              }
            })
            return (
              <li key={item.id} className="relative group">
              {item.children ? (
                <div
                  className="relative group"
                  onMouseEnter={() => handleDropdownEnter(item.id)}
                >
                  <p
                    className={`w-full ${isActive
                      ? 'text-white bg-primary shadow-btnshdw'
                      : 'group-hover:bg-lightprimary group-hover:text-primary'
                      } py-2.5 px-3.5 rounded-full flex gap-3 cursor-pointer items-center text-ld`}
                  >
                    <Link href={item.href}>
                      <span className="flex gap-2 items-center w-full ">
                        <Icon icon={`${item.icon}`} height={18} />
                        <span>{item.title}</span>
                        {item.children && <IconChevronDown size={18} className='ms-auto' />}
                      </span>
                    </Link>
                  </p>
                  {activeDropdown === item.id && (
                    <div
                      className={`absolute left-0 rtl:right-0 mt-2  bg-white dark:bg-dark rounded-md shadow-lg ${item.column == 4 ? 'w-screen max-w-[800px]' : 'w-52'}`}
                      onMouseEnter={() => handleDropdownEnter(item.id)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <ul className={`p-3 text-sm  gap-2  ${item.column == 4 ? 'two-cols' : 'flex flex-col'} `}>
                        {item.children.map((child) => (
                          <li key={child.id} className={` ${item.column == 4 ? 'mb-2' : ''} `}>
                            <ChildComponent
                              item={child}
                              title={item.title}
                              isActive={activeDropdown === item.id}
                              handleMouseEnter={() => handleDropdownEnter(item.id)}
                              handleMouseLeave={handleDropdownLeave}
                              onClick={() => handleChildClick(item.id)}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.href}>
                  <p className={`py-2 px-3 rounded-md flex gap-3 items-center ${active === item.id ? 'bg-error text-white' : 'group-hover/nav:bg-primary group-hover/nav:text-primary'}`}>
                    <Icon icon={`${item.icon}`} height={18} />
                    <span>{(`${item.title}`)}</span>
                  </p>
                </Link>
              )}
            </li>
            )
          })}
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
