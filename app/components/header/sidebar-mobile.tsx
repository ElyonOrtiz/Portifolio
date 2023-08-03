'use client'

import { NavItem } from "./nav-item";
import { IoClose } from "react-icons/io5";

type NavItemProps = {
  label: string;
  href: string;
};
export const SideBarMobile = ({NAV_ITEMS}: {NAV_ITEMS: NavItemProps[]}) => {
  return(
    <div className="fixed gap-4 flex flex-col pl-6 pr-8 pt-4 pb-10 top-16 rounded-md right-0 z-50 bg-gray-900 shadow-buttonXsm ">
       {NAV_ITEMS.map((item) => <NavItem {...item} key={item.href}/>)}

    </div>
  )
}