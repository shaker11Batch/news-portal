"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>

        {/* desktop menu  */}

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/news"
                className={`${
                  pathname === "/news" ? "text-red-500 font-semibold" : ""
                }hover:text-red-500`}
              >
                News
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuLink href="/services" className={`${
                  pathname === "/services" ? "text-red-500 font-semibold" : ""
                }hover:text-red-500`}>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="text-gray-600 shadow-md rounded-b-md px-5 py-4 ">
                    <li>
                      <NavigationMenuLink href="/services/web">
                        Web Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="services/app">
                        Mobile App
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/services/seo">
                        SEO
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className={`${
                  pathname === "/about" ? "text-red-500 font-semibold" : ""
                }hover:text-red-500`}>
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={`${
                  pathname === "/contact" ? "text-red-500 font-semibold" : ""
                }hover:text-red-500`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color swtcher and login button  */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center justify-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>

        <MobileMenu></MobileMenu>
      </nav>
    </header>
  );
};

export default Navbar;
