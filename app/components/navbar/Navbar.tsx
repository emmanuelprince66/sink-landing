"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CustomButton from "../ui/CustomButton";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { useMediaQuery, useTheme } from "@mui/material";
import { useStateContext } from "@/app/util/StateContext";
import { usePathname } from "next/navigation";

import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { state, toggleState } = useStateContext();
  const pathname = usePathname();

  const handleHamToggle = () => setOpen((prev) => !prev);
  const theme = useTheme();

  const isTabletOrDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const links = [
    { id: 1, noti: "home", to: "/", des: "Home", path: "/" },
    // { id: 2, noti: "feature", to: "feature", des: "Feature" },
    // { id: 3, noti: "about", to: "about", des: "About Us", path: "/about" },
    {
      id: 4,
      noti: "contact",
      to: "/contact",
      des: "Contact Us",
      path: "/contact",
    },
    // { id: 5, noti: "blog", to: "/blog", des: "Blog" },
    // { id: 6, noti: "privacy", to: "/privacy", des: "Privacy" },
  ];

  const handleCloseOver = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (open !== state) {
      toggleState();
    }
  }, [open, state, toggleState]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [open]);

  return (
    <div className="relative w-full bg-[#ffff] py-7">
      <div className="md:w-[1200px] w-[95%]  mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            width={150}
            height={150}
            src="/navbar/sink2.png"
            alt="main icon"
          />
        </Link>

        <div className="hidden md:flex md:gap-6">
          {links?.map((link) =>
            link?.noti === "contact" ||
            link?.noti === "blog" ||
            link?.noti === "home" ? (
              <Link href={`${link?.to}`} key={link.id}>
                <p
                  className={`text-primary_black text-[16px] ${
                    link?.path === pathname && "font-[600] text-bold_green"
                  }   hover:text-bold_green cursor-pointer text_small transition-colors duration-700 ease-in-out`}
                >
                  {link.des}
                </p>
              </Link>
            ) : (
              <ScrollLink
                key={link.id}
                to={link?.to}
                spy={true}
                smooth={true}
                offset={-2}
                duration={500}
              >
                <p className="text-primary_black text-[16px] hover:text-bold_green cursor-pointer text_small transition-colors duration-700 ease-in-out">
                  {link.des}
                </p>
              </ScrollLink>
            )
          )}
        </div>

        {isTabletOrDesktop && (
          <CustomButton>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.sync.sink"
              }
            >
              Get The App
            </Link>
          </CustomButton>
        )}

        <div
          className="block md:hidden transition-transform duration-300 ease-in-out transform"
          onClick={handleHamToggle}
        >
          {open ? (
            <FaTimes className="text-[18px] text-primary_green  transition-transform duration-300 ease-in-out transform scale-110" />
          ) : (
            <FaBars className="text-[18px] text-primary_green transition-transform duration-300 ease-in-out transform scale-110" />
          )}
        </div>
      </div>

      {open && (
        <div
          className={`absolute top-full left-0 right-0 h-[90vh] bg-[#F9FFF9] z-50 flex flex-col items-center py-6 transition-transform duration-300 ease-in-out ${
            open
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-full"
          }`}
        >
          <div
            className="flex  flex-col justify-center items-center text-center gap-9 mt-10"
            style={{ marginBottom: "50%" }}
          >
            {links?.map((link) =>
              link?.noti === "contact" ||
              link?.noti === "blog" ||
              link?.noti === "home" ? (
                <Link href={`${link?.to}`} key={link.id}>
                  <p
                    onClick={handleCloseOver}
                    style={{ fontSize: "2rem" }}
                    className={`text-primary_black ${
                      link?.path === pathname && "font-[800] text-bold_green"
                    } hover:text-bold_green cursor-pointer text_small transition-colors duration-700 ease-in-out`}
                  >
                    {link.des}
                  </p>
                </Link>
              ) : pathname !== "/" ? (
                <Link href="/" key={link.id}>
                  <p
                    onClick={handleCloseOver}
                    style={{ fontSize: "2rem" }}
                    className="text-primary_black hover:text-bold_green cursor-pointer text_small transition-colors duration-700 ease-in-out"
                  >
                    {link.des}
                  </p>
                </Link>
              ) : (
                <ScrollLink
                  key={link.id}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-2}
                  duration={500}
                  onClick={handleCloseOver}
                >
                  <p
                    style={{ fontSize: "2rem" }}
                    className="text-primary_black hover:text-bold_green cursor-pointer text_small transition-colors duration-700 ease-in-out"
                  >
                    {link.des}
                  </p>
                </ScrollLink>
              )
            )}
          </div>
          {/* <CustomButton className="text-[20px] py-4 w-[70%] capitalize">
            Get The App
          </CustomButton> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
