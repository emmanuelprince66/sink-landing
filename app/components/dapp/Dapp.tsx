import Image from "next/image";
import React from "react";

const Dapp = () => {
  return (
    <div className="mx-auto   w-[90%] md:w-[1200px] ">
      <div className="flex flex-col md:flex-row lg:flex-row px-4 pt-4 bg-[#027A17] rounded-lg mx-auto justify-evenly items-center">
        <div className="md:flex-basis-1/2 lg:flex-basis-1/2 order-2 md:order-1 lg:order-1">
          <Image
            width={300}
            height={300}
            className="object-fit"
            src="/dapp/d-1.svg"
            alt="icn"
          />
        </div>
        <div className="md:flex-basis-1/2 lg:flex-basis-1/2 order-1 md:order-2 lg:order-2">
          <p className="font-[600] text-[25px] md:text-[35px] text-white">
            Download the App.
          </p>
          <p className="font-[400] text-[14px]  mt-3 md:text-[18px] text-white">
            Take a financial leap today. Begin by downloading the app.😉🚀
          </p>
          <div className="flex justify-start">
            <div className="flex_center gap-2 md:gap-6 my-8">
              <button className="flex gap-1 min-w-[80px]  md:my-0 items-center bg-white py-2 rounded-md px-4 justify-center">
                <Image width={25} height={25} src="/dapp/d-2.svg" alt="apple" />
                <span className="flex flex-col items-start gap-0">
                  <p className="text-black text-[10px] md:text-[12px] ">
                    Download on the
                  </p>
                  <p className="text-black text-[15px]  md:text-[20px] ">
                    App Store
                  </p>
                </span>
              </button>
              <button className="flex gap-1 min-w-[80px]  md:my-0 items-center bg-white py-2 rounded-md px-4 justify-center">
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
    </div>
  );
};

export default Dapp;
