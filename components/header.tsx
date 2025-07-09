"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Image from "next/image";
import SignInModal from "./sign-in-modal";
import { useAuth } from "@/context/auth.context";
import { useModal } from "@/hooks/useModal";
import { Button } from "./ui/button";
import { AuthApis } from "@/apis/auth";

export default function Header() {
  const { user, signOut } = useAuth();
  const { isOpen, open, close } = useModal();

  const handleSignOut = async () => {
    const resp = await AuthApis.signOut();
    if (!resp.ok) {
      console.error("Sign out failed");
      return;
    }

    signOut();
    close();
  };

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
                <Link href="/">Trang chủ</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/products">Sản phẩm</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/blogs">Tin tức</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center">
        {user ? (
          <div className="flex items-center gap-2">
            {/* <Avatar>
            <AvatarFallback>{user.email.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar> */}
            <span>{user.firstName}</span>
            <Button onClick={handleSignOut}>Đăng xuất</Button>
          </div>
        ) : (
          <>
            <Button onClick={open}>Đăng nhập</Button>
            <SignInModal isOpen={isOpen} onOpenChange={close} />
          </>
        )}
      </div>
    </header>
  );
}
