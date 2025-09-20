"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { PopupButton } from "react-calendly";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export default function UserNavbar() {
  const navItems = [
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Experience",
      link: "/#experience",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    // {
    //   name: "Services",
    //   link: "/services",
    // },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const rootElement = useRef<HTMLDivElement>(null);
  const [isRootReady, setIsRootReady] = useState(false);

  useEffect(() => {
    if (rootElement.current) {
      setIsRootReady(true);
    }
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="w-full fixed top-0 left-0 right-0 z-50 py-2"
      ref={rootElement}
    >
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* <NavbarButton variant="primary" href="/mentors">
              Get Started
            </NavbarButton> */}

            {isRootReady && (
              <PopupButton
                url="https://calendly.com/fleebug"
                rootElement={rootElement.current as HTMLElement}
                text="Schedule a call"
                className="absolute bottom-4 right-4 z-10 border border-gray-200 text-[#323232] text-sm font-medium py-2.5 px-6 rounded-xl shadow-sm transition-all ease-in-out duration-200 cursor-pointer hover:translate-y-[-2px]"
              />
            )}
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              {/* <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton> */}
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="/mentors"
              >
                Get Started
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
