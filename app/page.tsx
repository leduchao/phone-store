"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

const avatarInfo = [
  {
    src: "/images/avatar1.jpg",
    alt: "avatar1",
  },
  {
    src: "/images/avatar2.jpg",
    alt: "avatar2",
  },
  {
    src: "/images/avatar3.jpg",
    alt: "avatar3",
  },
];

export default function HomePage() {
  return (
    <div className="mt-16">
      <div className="block xl:flex px-3 md:px-20 lg:px-32 space-x-10">
        <div className="xl:w-[40%] w-full flex flex-col xl:h-[700px]">
          <h1 className="text-6xl font-medium text-center xl:text-left">
            Find Your <br /> Perfect Tech <br /> Companion Here
          </h1>
          <p className="my-8 text-center xl:text-left">
            Founded with a vision to redefine the way you shop for electronics,
            HiTech is your one-stop destination for all things tech
          </p>
          <Button className="mb-8 w-[120px]">
            Shop now <ArrowRightIcon />
          </Button>

          <div className="hidden md:flex items-center space-x-3 mb-8 xl:mb-0 mt-0 xl:mt-auto">
            <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-neutral-50">
              {avatarInfo.map((avatar) => (
                <Avatar key={avatar.alt}>
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                  <AvatarFallback>
                    {avatar.alt.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div>Proven Excellence 4.5-Star Rating Over 3,500 Customers</div>
          </div>
        </div>
        <div className="flex xl:w-[60%] w-full justify-between h-[700px] space-x-5">
          <div
            className="w-[33%] h-[50%] md:flex hidden px-3"
            style={{
              background:
                "linear-gradient(180deg,rgba(249, 250, 251, 1) 0%, rgba(204, 227, 232, 1) 100%)",
            }}
          >
            <Image
              className="m-auto mb-0"
              src={"/images/keyboard.png"}
              alt="Keyboard"
              width={200}
              height={200}
            />
          </div>
          <div
            className="w-full md:w-[67%] px-3 content-center relative"
            style={{
              background:
                "linear-gradient(180deg,rgba(237, 213, 203, 1) 0%, rgba(249, 250, 251, 1) 100%)",
            }}
          >
            <Image
              className="mx-auto"
              src={"/images/white-headphone.png"}
              alt="Keyboard"
              width={450}
              height={200}
            />
            <Badge
              className="absolute top-50 right-20 rounded-full h-15 w-15 bg-neutral-50"
              variant={"outline"}
            >
              15% <br /> OFF
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
