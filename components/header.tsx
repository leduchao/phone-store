"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
// import { useAuth } from "@/context/auth.context";
// import { useModal } from "@/hooks/useModal";
import { Button } from "./ui/button";
import { ROUTE_PATHS } from "@/routes/routing";
import {
  NewspaperIcon,
  PhoneIcon,
  SearchIcon,
  ShoppingCartIcon,
  StarIcon,
  StoreIcon,
  TagIcon,
  UserRoundIcon,
  UsersRoundIcon,
} from "lucide-react";
import { Input } from "./ui/input";
import MenuSheet from "./base/menu-sheet";
import { HeaderItem } from "@/models/header-item";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Badge } from "./ui/badge";

const headerItems: HeaderItem[] = [
  {
    icon: <StoreIcon size={20} />,
    key: 1,
    title: "Shop",
    link: ROUTE_PATHS.Shop,
  },
  {
    icon: <TagIcon size={20} />,
    key: 2,
    title: "Categories",
    link: ROUTE_PATHS.Category,
  },
  {
    icon: <UsersRoundIcon size={20} />,
    key: 3,
    title: "About Us",
    link: ROUTE_PATHS.AboutUs,
  },
  {
    icon: <NewspaperIcon size={20} />,
    key: 4,
    title: "Blogs",
    link: ROUTE_PATHS.Blogs,
  },
  {
    icon: <StarIcon size={20} />,
    key: 5,
    title: "Reviews",
    link: ROUTE_PATHS.Reviews,
  },
  {
    icon: <PhoneIcon size={20} />,
    key: 6,
    title: "Contact Us",
    link: ROUTE_PATHS.ContactUs,
  },
];

export default function Header() {
  // const { user, signOut } = useAuth();
  // const { open } = useModal();

  // const handleSignOut = async () => {
  //   const resp = await AuthApis.signOut();
  //   if (!resp.ok) {
  //     console.error("Sign out failed");
  //     return;
  //   }

  //   signOut();
  // };

  return (
    <header className="fixed w-full bg-white shadow flex justify-between py-4 px-0 md:px-20 lg:px-32">
      <div className="flex">
        <div className="flex lg:hidden">
          <MenuSheet headerItems={headerItems} />
        </div>
        <Link href="/" className="mr-4">
          <h1 className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance">
            PhoneAxis
          </h1>
        </Link>
        <div className="hidden lg:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {headerItems.map((item) => (
                <NavigationMenuItem key={item.key}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <div className="flex items-center">
        <div className="hidden xl:flex pe-6 relative">
          <Input type="text" placeholder="Search" className="pr-10" />
          <Button
            className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full"
            size={"tinyIcon"}
          >
            <SearchIcon className="!w-3 !h-3" />
          </Button>
        </div>
        <div className="flex xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant={"ghost"}>
                <SearchIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full">
              <SheetHeader>
                <SheetTitle>Search</SheetTitle>
              </SheetHeader>
              <div className="flex w-full px-4 md:px-36 lg:px-56 pb-8 content-center">
                <Input placeholder="Search" />
                <Button className="ml-4">Search</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <Button variant={"ghost"} className="relative">
          <ShoppingCartIcon />
          <Badge
            className="absolute -top-1 -right-1 h-5 min-w-5 rounded-full px-1 text-[11px] tabular-nums"
            variant="destructive"
          >
            2
          </Badge>
        </Button>
        <Link href={ROUTE_PATHS.SignIn}>
          <Button variant={"ghost"}>
            <UserRoundIcon />
          </Button>
        </Link>
      </div>
    </header>
  );
}
