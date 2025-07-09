"use client";

import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Image from "next/image";
import SignInModal from "./sign-in-modal";

export default function Header() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLoginSuccess = () => {
  //   setIsLoggedIn(true);
  //   setShowModal(false);
  // };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50 py-4 px-6 flex justify-between">
      <div className="flex">
        <Link href="/" className="mr-4">
          <Image src="/logo-2.png" alt="Logo" width={20} height={5} />
        </Link>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/products">Products</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/blogs">Blogs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center">
        <SignInModal></SignInModal>
      </div>
    </header>
  );
}
