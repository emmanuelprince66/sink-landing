"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Dapp from "./Dapp";
import Grid from "@mui/material/Grid2";
import { motion, useInView } from "framer-motion"; // Import Framer Motion
import Link from "next/link";

const Contact = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : null);
  };
  const accordionData = [
    {
      id: 1,
      text: "What is WageFinance?",
      content: "",
    },
    {
      id: 2,
      text: "Who is eligible for loans on WagesFinance?",
      content: "",
    },
    {
      id: 3,
      text: "How many types of savings are there on WagesFinance?",
      content: {
        one: "Share Your Code: Invite friends to join WagesFinance using your unique referral code.",
        two: "They Join: Sign up and start using the app.",
        three: "You Earn: Receive up to #2000 for each successful referral.",
      },
    },
    {
      id: 4,
      text: "Is it mandatory to pay the membership fee?",
      content: "",
    },
    {
      id: 5,
      text: "Can I take advantage of an investment opportunity without having an active savings with the cooperative?",
      content: "",
    },
    {
      id: 6,
      text: "What is the benefit for saving with the cooperative?",
      content: "",
    },
    {
      id: 7,
      text: "Can I save or invest without paying the membership fees?",
      content: "",
    },
    {
      id: 8,
      text: "How much can I access on loan?",
      content: "",
    },
    {
      id: 9,
      text: "When am I eligible to apply for a loan?",
      content: "",
    },
    {
      id: 10,
      text: "How can I apply for a loan?",
      content: "",
    },
  ];

  const ContactInfoRef = useRef(null);
  const DappRef = useRef(null);

  const contactInfoView = useInView(ContactInfoRef, { once: false });
  const dappView = useInView(DappRef, { once: false });

  const faqAndContactsVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, ease: "easeOut" },
    },
  };

  // Animation variants for Dapp component

  return (
    <div className="flex_column_center text-center w-[90%] md:w-[1200px] py-4 mx-auto gap-4 mt-[10%] md:mt-[3%] justify-center">
      {/* Animating the FAQ and Contact information */}
      <motion.div
        className="w-full"
        ref={ContactInfoRef}
        initial="hidden"
        animate={contactInfoView ? "visible" : "hidden"}
        variants={faqAndContactsVariant}
      >
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid size={{ xs: 12, md: 12 }}>
            <div className="flex flex-col items-center text-center">
              <p className="text-[25px] font-[600] md:text-[30px] md:font-[600] mb-1">
                Contact Us
              </p>
              <p className="text-[14px] font-[400] md:text-[20px] md:font-[400] mb-6">
                Have Questions? Talk to our customer support team.
              </p>
            </div>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <div className="flex_column p-3 border-slate-200 border rounded-md">
              <div className="flex_start gap-4">
                <Image
                  width={25}
                  height={25}
                  src="/contact/c-1.svg"
                  alt="contact"
                  className="pt-1 md:pt-0"
                />
                <div className="flex_column gap-2">
                  <p className="text-[20px] font-[600] text-primary_black ">
                    WhatApp
                  </p>

                  {/* <Link href="https://chat.whatsapp.com/EU8kVd0CtToJm9cMrm642n">
                    <p className="text-primary_green underline cursor-pointer font-[500] text-[15px]">
                      Click here to start chat.
                    </p>
                  </Link> */}

                  <p className="text-primary_gray font-normal text-[12px]">
                    Sunday - Saturday
                  </p>
                  <p className="text-primary_gray font-normal text-[12px]">
                    9 am - 9 pm
                  </p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <div className="flex_column p-3 border-slate-200 border rounded-md">
              <div className="flex_start gap-4">
                <Image
                  width={25}
                  height={25}
                  src="/contact/c-2.svg"
                  alt="contact"
                  className="pt-1 md:pt-0"
                />
                <div className="flex_column gap-2">
                  <p className="text-[20px] font-[600] text-primary_black ">
                    Call
                  </p>

                  <p className="text-primary_black  font-[500] text-[15px]">
                    0814 973 4622
                  </p>
                  <p className="text-primary_gray font-normal text-[12px]">
                    Sunday - Saturday
                  </p>
                  <p className="text-primary_gray font-normal text-[12px]">
                    9 am - 9 pm
                  </p>
                </div>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <div className="flex_column p-3 border-slate-200 border rounded-md">
              <div className="flex_start gap-4">
                <Image
                  width={25}
                  height={25}
                  src="/contact/c-3.svg"
                  alt="contact"
                  className="pt-1 md:pt-0"
                />
                <div className="flex_column gap-2">
                  <p className="text-[20px] font-[600] text-primary_black ">
                    Email
                  </p>

                  <p className="text-primary_black  font-[500] text-[15px]">
                    Info@sync360.africa
                  </p>
                  <p className="text-primary_gray font-normal text-[12px]">
                    Sunday - Saturday
                  </p>
                  <p className="text-primary_gray font-normal text-[12px]">
                    9 am - 9 pm
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        {/* Render Accordions only after component mounts to avoid hydration issues */}
        {/* {mounted && (
          <div className="w-full md:w-[65%] mx-auto flex flex-col items-center mt-[20%] md:mt-[10%] text-center">
            <p className="font-[600] text-[25px] md:text-[30px] text-primary_black mb-5">
              Frequently Asked Questions
            </p>
            {accordionData.map((item) => (
              <Accordion
                key={item.id}
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
                sx={{ width: "100%" }}
              >
                <AccordionSummary
                  expandIcon={
                    expanded === item.id ? (
                      <AiOutlineMinus />
                    ) : (
                      <AiOutlinePlus />
                    )
                  }
                  aria-controls={`panel${item.id}-content`}
                  id={`panel${item.id}-header`}
                >
                  <Typography
                    className="text-start text-[14px] md:text-[18px]"
                    sx={{
                      fontWeight: "600",
                      color: "#171717",
                    }}
                  >
                    {item.id}. {item.text}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {item.content && typeof item.content === "object" ? (
                      <div>
                        {Object.values(item.content).map((text, index) => (
                          <Typography
                            className="text-start text-[13px] md:text-[15px]"
                            key={index}
                          >
                            . {text}
                          </Typography>
                        ))}
                      </div>
                    ) : (
                      item.content
                    )}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        )} */}
      </motion.div>

      {/* Animating the Dapp component separately */}
      {/* <motion.div
        ref={DappRef}
        initial="hidden"
        animate={dappView ? "visible" : "hidden"}
        variants={faqAndContactsVariant}
        className="mt-10 w-full"
      >
        <Dapp />
      </motion.div> */}
    </div>
  );
};

export default Contact;
