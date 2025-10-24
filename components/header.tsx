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
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const router = useRouter();
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Products",
      description: "All our products for your logistic business.",
      items: [
        {
          title: "Border Clearance Service",
          href: "/products/1",
        },
        {
          title: "GPS Tracking Solution",
          href: "/products/2",
        },
        {
          title: "Fleet Management",
          href: "/products/3",
        },
      ],
    },
    {
      title: "Company",
      description: "Learn more about Mamastops",
      items: [
        {
          title: "About us",
          href: "/about",
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
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`w-full z-40 fixed top-0 left-0 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-red-100"
          : "bg-transparent border-transparent"
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
                                ? "text-gray-900 hover:text-red-600 hover:bg-red-50"
                                : "text-white hover:text-red-900 hover:bg-white/20"
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
                              ? "text-gray-900 hover:text-red-600 hover:bg-red-50"
                              : "text-white hover:text-red-100 hover:bg-white/20"
                          }`}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="!w-[450px] p-4 border-red-100">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col justify-between">
                              <div className="space-y-2">
                                <p className="text-base font-medium text-gray-900">
                                  {item.title}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                              <Button
                                size="sm"
                                className="mt-6 w-fit bg-red-600 hover:bg-red-700"
                                onClick={() => router.push("/contact")}
                              >
                                Book a call today
                              </Button>
                            </div>
                            <div className="space-y-1">
                              {item.items?.map((subItem) => (
                                <NavigationMenuLink asChild key={subItem.title}>
                                  <Link
                                    href={subItem.href}
                                    className="flex justify-between hover:bg-red-50 py-2 px-3 rounded-md transition-colors group border border-transparent hover:border-red-100"
                                  >
                                    <p className="text-sm text-gray-700 group-hover:text-red-600">
                                      {subItem.title}
                                    </p>
                                    <MoveRight className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                                  </Link>
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
          <div
            onClick={() => router.push("/")}
            className="flex items-center gap-2 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 cursor-pointer"
          >
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
              onClick={() => router.push("/contact")}
              size="sm"
              className="sm:size-default bg-red-600 hover:bg-red-700"
            >
              Book a demo
            </Button>
          </div>

          {/* Mobile Get Started Button */}
          <div className="flex sm:hidden">
            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700"
              onClick={() => router.push("/products")}
            >
              Get started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setOpen(!isOpen)}
              className={`p-2 transition-colors ${
                isScrolled
                  ? "text-gray-900 hover:text-red-600 hover:bg-red-50"
                  : "text-white hover:text-red-100 hover:bg-white/20"
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
          <div className="lg:hidden border-t bg-white border-red-100">
            <div className="px-4 py-6 space-y-6">
              {navigationItems.map((item) => (
                <div key={item.title} className="space-y-3">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-2 text-gray-900 hover:text-red-600 transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      <span className="text-base font-medium">
                        {item.title}
                      </span>
                      <MoveRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  ) : (
                    <>
                      <p className="text-base font-medium text-gray-900">
                        {item.title}
                      </p>
                      {item.items && (
                        <div className="pl-4 space-y-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="flex items-center justify-between py-2 text-gray-600 hover:text-red-600 transition-colors"
                              onClick={() => setOpen(false)}
                            >
                              <span className="text-sm">{subItem.title}</span>
                              <MoveRight className="w-4 h-4 text-gray-400" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-red-100 space-y-3">
                <Button
                  onClick={() => {
                    router.push("/contact");
                    setOpen(false);
                  }}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  Book a demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
