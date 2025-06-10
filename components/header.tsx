/** @format */

"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Reports",
          href: "/reports",
        },
        {
          title: "Statistics",
          href: "/statistics",
        },
        {
          title: "Dashboards",
          href: "/dashboards",
        },
        {
          title: "Recordings",
          href: "/recordings",
        },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Fundraising",
          href: "/fundraising",
        },
        {
          title: "Investors",
          href: "/investors",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the background change when user scrolls past the hero section (100vh)
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;

      setIsScrolled(scrollPosition > heroHeight * 0.1); // Change at 10% of viewport height
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-40 fixed top-0 left-0 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-gray-200"
          : "bg-white/10 backdrop-blur-sm border-white/20"
      }`}
    >
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left side - Navigation (Desktop only) */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-1">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.href ? (
                      <NavigationMenuLink asChild>
                        <Link href={item.href}>
                          <Button
                            variant="ghost"
                            className={`font-medium transition-colors ${
                              isScrolled
                                ? "text-gray-900 hover:text-gray-700 hover:bg-gray-100"
                                : "text-white hover:text-gray-200 hover:bg-white/20"
                            }`}
                          >
                            {item.title}
                          </Button>
                        </Link>
                      </NavigationMenuLink>
                    ) : (
                      <>
                        <NavigationMenuTrigger
                          className={`font-medium text-sm bg-transparent transition-colors ${
                            isScrolled
                              ? "text-gray-900 hover:bg-gray-100"
                              : "text-white hover:bg-white/20"
                          }`}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="!w-[450px] p-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col justify-between">
                              <div className="space-y-2">
                                <p className="text-base font-medium">
                                  {item.title}
                                </p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                              <Button size="sm" className="mt-6 w-fit">
                                Book a call today
                              </Button>
                            </div>
                            <div className="space-y-1">
                              {item.items?.map((subItem) => (
                                <NavigationMenuLink
                                  href={subItem.href}
                                  key={subItem.title}
                                  className="flex items-center justify-between hover:bg-muted py-2 px-3 rounded-md transition-colors group"
                                >
                                  <span className="text-sm">
                                    {subItem.title}
                                  </span>
                                  <MoveRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Center - Logo */}
          <div className="flex items-center gap-2 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <Image
              src="/red-logo.png"
              width={30}
              height={30}
              alt="logo"
              className="w-7 h-7 sm:w-8 sm:h-8"
            />
            <p
              className={`font-semibold text-lg sm:text-xl transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Mamastops
            </p>
          </div>

          {/* Right side - CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="ghost"
              className={`hidden md:inline-flex transition-colors ${
                isScrolled
                  ? "text-gray-900 hover:text-gray-700 hover:bg-gray-100"
                  : "text-white hover:text-gray-200 hover:bg-white/20"
              }`}
            >
              Book a demo
            </Button>
            <div
              className={`hidden md:block w-px h-6 transition-colors ${
                isScrolled ? "bg-gray-200" : "bg-white/30"
              }`}
            ></div>
            <Button size="sm" className="sm:size-default">
              Get started
            </Button>
          </div>
          <div className="flex sm:hidden">
            <Button size="sm">Get started</Button>
          </div>
          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen(!isOpen)}
              className={`p-2 transition-colors ${
                isScrolled
                  ? "text-gray-900 hover:text-gray-700 hover:bg-gray-100"
                  : "text-white hover:text-gray-200 hover:bg-white/20"
              }`}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div
            className={`lg:hidden border-t transition-colors ${
              isScrolled
                ? "bg-white border-gray-200"
                : "bg-white/95 backdrop-blur-md border-white/20"
            }`}
          >
            <div className="px-4 py-6 space-y-6">
              {navigationItems.map((item) => (
                <div key={item.title} className="space-y-3">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between py-2 transition-colors ${
                        isScrolled ? "text-gray-900" : "text-gray-900"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-base font-medium">
                        {item.title}
                      </span>
                      <MoveRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                  ) : (
                    <>
                      <p
                        className={`text-base font-medium transition-colors ${
                          isScrolled ? "text-gray-900" : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </p>
                      {item.items && (
                        <div className="pl-4 space-y-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="flex items-center justify-between py-2"
                              onClick={() => setOpen(false)}
                            >
                              <span className="text-sm text-muted-foreground">
                                {subItem.title}
                              </span>
                              <MoveRight className="w-4 h-4 text-muted-foreground" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t space-y-3">
                <Button variant="outline" className="w-full">
                  Book a demo
                </Button>
                <Button className="w-full">Get started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
