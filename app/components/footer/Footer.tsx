"use client";
import React from "react";
import { useStateContext } from "@/app/util/StateContext";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { Divider } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  const { state } = useStateContext();

  const links = [
    // { id: 1, to: "feature", des: "Feature" },
    // { id: 2, to: "about", des: "About Us" },
    { id: 3, to: "contact", des: "Contact Us" },
    // { id: 4, to: "blog", des: "Blog" },
  ];

  return (
    <>
      {!state && (
        <div className="w-full px-5  md:px-0 py-5 bg-[#001E06]   h-full">
          <div className="flex flex-col h-full md:h-[15rem] w-full md:max-w-[1200px]   items-center md:flex-row gap-[3rem]  justify-between mx-auto">
            <div className="flex_column gap-5 ">
              <Image
                width={140}
                height={140}
                src="/navbar/sink1.png"
                alt="main icon"
              />

              <p className="text-[#E6F5E8] text-[14px] font-[400] flex-wrap  w-full md:max-w-[70%] ">
                Sync your business for total growth.
              </p>

              <div className="flex flex-col  items-start md:items-center md:flex-row gap-[3rem] md:gap-[2rem]  justify-center ">
                {links.map((link) => (
                  <ScrollLink
                    key={link.id}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-2}
                    duration={500}
                  >
                    <p className="text-white text-[16px] hover:text-bold_green cursor-pointer text_small transition-colors duration-700 ease-in-out">
                      {link.des}
                    </p>
                  </ScrollLink>
                ))}
              </div>
            </div>
            <div className="flex-col  w-full md:w-[40%] gap-8 ">
              <div className="flex-col flex   w-full justify-end gap-5 ">
                <div className=" flex md:justify-end ">
                  <p className="font-[500] text-[16px] text-white ">
                    Get The App
                  </p>
                </div>
                <div className="flex md:flex-col md:gap-4  gap-[1rem] ">
                  <button className="flex gap-1 md:ml-auto md:min-w-[180px] max-w-[180px]  md:my-0 items-center bg-white py-2 rounded-md px-4 justify-center">
                    <Image
                      width={25}
                      height={25}
                      src="/dapp/d-2.svg"
                      alt="apple"
                    />
                    <span className="flex flex-col items-start gap-0">
                      <p className="text-black text-[10px] md:text-[12px] ">
                        Download on the
                      </p>
                      <p className="text-black text-[15px]  md:text-[20px] ">
                        App Store
                      </p>
                    </span>
                  </button>
                  <button className="flex gap-1 md:ml-auto   md:my-0 items-center bg-white py-2 rounded-md px-4 justify-center">
                    <Image
                      width={25}
                      height={25}
                      src="/dapp/d-3.svg"
                      alt="playstore"
                    />
                    <span className="flex flex-col items-start gap-0">
                      <p className="text-black text-[10px]  md:text-[12px] ">
                        Get it on
                      </p>
                      <p className="text-black text-[15px]  md:text-[20px] ">
                        Google Play
                      </p>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:max-w-[1200px] mt-10 mx-auto gap-[3rem] md:gap-[2rem] ">
            <div className="w-full flex flex-col justify-center items-center text-center gap-4">
              <Link href="/terms">
                <p className="text-white text-[16px] hover:text-bold_green cursor-pointer text_small transition-colors duration-700 ease-in-out">
                  Terms & Condition
                </p>
              </Link>
              <Link href="/privacy">
                <p className="text-white text-[16px] hover:text-bold_green cursor-pointer text_small transition-colors duration-700 ease-in-out">
                  Privacy
                </p>
              </Link>
            </div>

            <Divider
              sx={{ color: "white", background: "white", width: "100%" }}
            />
            <p className="text-[#E6F5E8]  text-[14px] font-[400] ">
              © {new Date().getFullYear()} Sync360. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
