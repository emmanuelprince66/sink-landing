"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid2";

import Box from "@mui/material/Box";
import Plan from "./Plan";
import {
  freePlanData,
  starterPlanData,
  syncPlusPlanData,
  syncProPlanData,
  planPricing,
} from "./plans";

const Header = () => {
  const [value, setValue] = useState("one");
  const [billingCycle, setBillingCycle] = useState<
    "monthly" | "quarterly" | "biannual" | "annual"
  >("monthly");

  const billingCycleMapping: Record<
    string,
    "monthly" | "quarterly" | "biannual" | "annual"
  > = {
    one: "monthly",
    two: "quarterly",
    three: "biannual",
    four: "annual",
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log("Tab changed to:", newValue);
    setValue(newValue);
    setBillingCycle(billingCycleMapping[newValue]);
  };

  const getUpdatedPrice = (
    plan: "starter" | "syncPlus" | "syncPro",
    cycle: "monthly" | "quarterly" | "biannual" | "annual"
  ): number => {
    console.log("getUpdatedPrice called with", { plan, cycle });
    const price = planPricing[plan]?.[cycle] ?? 0; // 🔥 Directly use cycle here
    console.log("Calculated price:", price);
    return price;
  };

  console.log("getUpdatedPrice", getUpdatedPrice);
  console.log("values", value);
  console.log("billingCycle", billingCycle);

  return (
    <div className="flex_column_center w-full bg-[#F9FFF9] pt-4 text-center gap-4 md:px-0 px-2">
      <p className="text-[30px] font-[600] md:text-[40px] md:font-[600] text-primary_black mt-8">
        From Pen and Paper to Smart Inventory Management
      </p>

      <p className="text-medium text-[#2F2F2F] flex-wrap max-w-[450px] leading-5 my-[3rem] md:my-0">
        Sync360 helps growing businesses track and manage inventory easily—no
        extra gadgets, just your phone. Stay in control anytime, anywhere!
      </p>

      <p className="text-medium text-[#2F2F2F] flex-wrap max-w-[450px] font-[500] leading-5">
        Try Sync360 7-day free trial.
      </p>

      <div className="flex_center gap-6 my-8">
        <Link href="https://play.google.com/store/apps/details?id=com.sync.sink">
          <button className="flex gap-1 min-w-[80px] md:my-0 items-center bg-black py-2 rounded-md px-4 justify-center">
            <Image width={25} height={25} src="/header/h-9.svg" alt="apple" />
            <span className="flex flex-col items-start gap-0">
              <p className="text-white text-[10px] md:text-[12px]">
                Download on the
              </p>
              <p className="text-white text-[15px] md:text-[20px]">App Store</p>
            </span>
          </button>
        </Link>

        <button className="flex gap-1 min-w-[80px] md:my-0 items-center bg-black py-2 rounded-md px-4 justify-center">
          <Image width={25} height={25} src="/header/h-2.svg" alt="playstore" />
          <span className="flex flex-col items-start gap-0">
            <p className="text-white text-[10px] md:text-[12px]">Get it on</p>
            <p className="text-white text-[15px] md:text-[20px]">Google Play</p>
          </span>
        </button>
      </div>

      <div className="w-full md:w-[70%] mx-auto flex flex-col items-center gap-4">
        <p className="font-[500] text-[#1e1e1e] text-[40px]">Choose the</p>
        <p className="font-[500] text-[#52B661] text-[40px]">
          Right Plan for Your Business
        </p>
        <Box
          sx={{
            width: "100%",
            mx: "auto",
            display: "flex",
            justifyContent: "center",
            my: 4,
          }}
        >
          <Tabs
            value={value}
            onChange={handleTabChange}
            aria-label="billing cycle tabs"
            sx={{
              "& .MuiTabs-indicator": { backgroundColor: "#52B661" },
              "& .MuiTab-root": { margin: "0 8px" },
            }}
          >
            <Tab value="one" label="Monthly" />
            <Tab value="two" label="Quarterly" />
            <Tab value="three" label="Biannual" />
            <Tab value="four" label="Annual" />
          </Tabs>
        </Box>
        <Box mt={4}>
          <Grid container spacing={4} justifyContent="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Plan {...freePlanData} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Plan
                {...starterPlanData}
                price={{
                  ...starterPlanData.price,
                  amount: getUpdatedPrice("starter", billingCycle).toString(),
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Plan
                {...syncPlusPlanData}
                price={{
                  ...syncPlusPlanData.price,
                  amount: getUpdatedPrice("syncPlus", billingCycle).toString(),
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Plan
                {...syncProPlanData}
                price={{
                  ...syncProPlanData.price,
                  amount: getUpdatedPrice("syncPro", billingCycle).toString(),
                }}
              />
            </Grid>
          </Grid>
        </Box>
        ;
      </div>
    </div>
  );
};

export default Header;
