"use client";
import React from "react";
import user1 from "/public/images/profile/user-6.jpg";
import user2 from "/public/images/profile/user-2.jpg";
import user3 from "/public/images/profile/user-3.jpg";
import {
  TbBrandFacebook,
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandTwitter,
} from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import CardBox from "../../shared/CardBox";

const profileCards = [
  {
    title: "Andrew Grant",
    subtitle: "Technology Director",
    avatar: user1,
  },
  {
    title: "Leo Pratt",
    subtitle: "Telecom Analyst",
    avatar: user2,
  },
  {
    title: "Charles Nunez",
    subtitle: "Environmental Specialist",
    avatar: user3,
  },
];

/*--Social Cards--*/
const socialiconCard = [
  {
    icon: <TbBrandFacebook size={17} />,
    color: "primary",
  },
  {
    icon: <TbBrandInstagram size={17} />,
    color: "error",
  },
  {
    icon: <TbBrandGithub size={17} />,
    color: "info",
  },
  {
    icon: <TbBrandTwitter size={17} />,
    color: "secondary",
  },
];
const SocialCards = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-30">
        {profileCards.map((item, i) => (
          <div
            className="lg:col-span-4  col-span-12 text-center"
            key={i}
          >
            <CardBox className="px-0 pb-4">
              <Image
                src={item.avatar}
                alt="materialm"
                className="h-20 w-20 rounded-full mx-auto"
              />
              <div>
                <h5 className="text-lg mt-3">{item.title}</h5>
                <p className="text-xs text-darklink">{item.subtitle}</p>
              </div>
              <div className="flex justify-center gap-4 items-center border-t border-ld mt-4 pt-4">
                {socialiconCard.map((soc, index) => (
                  <Link href={""} className={`text-${soc.color}`} key={index}>{soc.icon}</Link>
                ))}
              </div>
            </CardBox>
          </div>
        ))}
      </div>
    </>
  );
};

export default SocialCards;
