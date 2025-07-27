import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { HeaderItem } from "@/models/header-item";

const MenuSheet = ({ headerItems }: { headerItems: HeaderItem[] }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[200px] md:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ul className="space-y-2">
          {headerItems.map((item) => (
            <li key={item.key}>
              <Link
                href={item.link}
                className="flex px-4 py-2 rounded hover:bg-muted transition font-medium text-sm"
              >
                <span className="mr-3">{item.icon}</span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MenuSheet;
