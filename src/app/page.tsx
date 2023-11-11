"use client";

import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import HeroSection from "@/components/HeroSection";
import Agents from "@/components/Agents";
import TeamInfo from "@/components/TeamInfo";

function Home() {
  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [0, 500], ["0%", "60%"]);
  let opacity = useTransform(scrollY, [0, 1000], [1, 0]);

  return (
    <div>
      <section className="relative flex flex-col">
        <motion.div
          style={{ y, opacity }}
          className="absolute h-screen w-full top-0 -z-20"
        >
          <video
            muted
            playsInline
            autoPlay
            loop
            className="h-full w-full object-cover object-center blur-[8px] brightness-[25%]"
          >
            <source src="/videos/bg_vid.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="mx-2">
          <HeroSection />
          <Agents />
          <TeamInfo />
        </div>
      </section>
    </div>
  );
}

export default Home;
