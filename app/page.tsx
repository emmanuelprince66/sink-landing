// Home.tsx
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import About from "./components/about/About";
import Dapp from "./components/dapp/Dapp";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import Info from "./components/info/Info";
import Referral from "./components/referral/Referral";
import Why from "./components/why/Why";
import { useStateContext } from "./util/StateContext";

export default function Home() {
  const { state } = useStateContext();

  // Create refs for each component to track when they come into view
  const aboutRef = useRef(null);
  const whyRef = useRef(null);
  const featuresRef = useRef(null);
  const infoRef = useRef(null);
  const referralRef = useRef(null);
  const dappRef = useRef(null);

  // Create in-view states for each component
  const aboutInView = useInView(aboutRef, { once: false });
  const whyInView = useInView(whyRef, { once: false });
  const featuresInView = useInView(featuresRef, { once: false });
  const infoInView = useInView(infoRef, { once: false });
  const referralInView = useInView(referralRef, { once: false });
  const dappInView = useInView(dappRef, { once: false });

  // Define the animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, ease: "easeOut" },
    },
  };

  return (
    <main className=" w-full h-full">
      <Header />
      {/* <motion.div
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <About />
      </motion.div> */}

      {/* <motion.div
        ref={whyRef}
        initial="hidden"
        animate={whyInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Why />
      </motion.div> */}

      {/* <motion.div
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Features />
      </motion.div> */}

      {/* <motion.div
        ref={infoRef}
        initial="hidden"
        animate={infoInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Info />
      </motion.div> */}

      {/* <motion.div
        ref={referralRef}
        initial="hidden"
        animate={referralInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Referral />
      </motion.div> */}

      {/* <motion.div
        ref={dappRef}
        initial="hidden"
        animate={dappInView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <Dapp />
      </motion.div> */}
    </main>
  );
}
