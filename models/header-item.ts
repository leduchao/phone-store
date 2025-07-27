import { ReactNode } from "react";

export interface HeaderItem {
  key: number;
  icon: ReactNode;
  title: string;
  link: string;
}
