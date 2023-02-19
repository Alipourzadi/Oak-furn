import React from "react";

import { NavLink } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  path: string;
};

const NavigationItem = ({ children, path }: Props) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "bg-zinc-50 dark:bg-neutral-500 p-2 rounded-full  shadow-lg scale-105 md:border-b-[1px] md:border-neutral-900 md:dark:border-zinc-50 md:dark:bg-transparent md:bg-transparent dark:text-zinc-50 md:rounded-none md:shadow-none  md:pt-1 md:w-min"
          : "p-2 rounded-full dark:text-zinc-50"
      }
    >
      {children}
    </NavLink>
  );
};

export default NavigationItem;
