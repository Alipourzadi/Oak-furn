import {
  BuildingStorefrontIcon,
  HomeIcon,
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux/es/exports";
import { motion } from "framer-motion";

import NavigationItem from "../NavigationItem/NavigationItem";
import { useEffect, useState } from "react";

type Props = {
  isAboveMediumScreen: boolean;
};

const NavItems = ({ isAboveMediumScreen }: Props) => {
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);
  const [darkTheme, setDarkTheme] = useState(false);

  const darkThemeHandler = () => {
    setDarkTheme((pervState) => !pervState);
    if (
      localStorage.getItem("theme") == "light" ||
      !localStorage.getItem("theme")
    ) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <div
      className={`flex items-center justify-center ${
        isAboveMediumScreen ? "justify-between w-1/2 " : "gap-2"
      }`}
    >
      <div className="flex items-center gap-2">
        <NavigationItem path="/">
          {isAboveMediumScreen && <p>Home</p>}
          {!isAboveMediumScreen && <HomeIcon className="w-7 md:w-6" />}
        </NavigationItem>
        <NavigationItem path="shop">
          {isAboveMediumScreen && <p>Shop</p>}
          {!isAboveMediumScreen && (
            <BuildingStorefrontIcon className="w-7 md:w-6" />
          )}
        </NavigationItem>
      </div>
      <div className="flex gap-2">
        <NavigationItem path="cart">
          <div className="relative">
            <ShoppingCartIcon className="w-7 md:w-6" />
            <motion.p
              className={`${
                totalQuantity
                  ? "absolute -top-3 -right-2 bg-white dark:bg-neutral-300 rounded-full border w-5 h-5 text-center text-sm dark:text-neutral-900"
                  : "hidden"
              }`}
            >
              {totalQuantity ? `${totalQuantity}` : ""}
            </motion.p>
          </div>
        </NavigationItem>
        <NavigationItem path="Liked">
          <div className="relative">
            <HeartIcon className="w-7 md:w-6" />
            <p className="absolute -top-3 -right-2 bg-white dark:bg-neutral-300 rounded-full border w-5 h-5 text-center text-sm dark:text-neutral-900">
              1
            </p>
          </div>
        </NavigationItem>
        <NavigationItem path="Login">
          <UserIcon className="w-7 md:w-6" />
        </NavigationItem>
        <div className="p-2 rounded-full" onClick={darkThemeHandler}>
          {!darkTheme && <SunIcon className="w-7 md:w-6 dark:text-zinc-50" />}
          {darkTheme && <MoonIcon className="w-7 md:w-6 dark:text-zinc-50" />}
        </div>
      </div>
    </div>
  );
};

export default NavItems;
