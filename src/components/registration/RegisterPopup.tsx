"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

function RegisterPopup() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center gap-12 flex-col md:flex-row rounded-xl">
      <motion.div
        whileHover={{
          scale: 1.03,
          textShadow: "0px 0px 6px rgb(255, 255, 255)",
          boxShadow: "0px 0px 8px rgb(226, 29, 75)",
          fontSize: "24px",
        }}
        whileTap={{
          scale: 0.97,
          fontSize: "14px",
        }}
        transition={{
          type: "tween",
          stiffness: 300,
        }}
        className="flex items-center justify-center relative w-64 h-48 md:w-96 md:h-64 rounded-xl"
        onClick={(e) => {
          e.preventDefault();
          router.push("/register?create=true");
        }}
      >
        <Image
          src="/images/popup/create.jpg"
          alt="create team"
          width={400}
          height={400}
          className="absolute object-cover object-center top-0 left-0 -z-40 w-full h-full brightness-[35%] blur-[3px] rounded-xl"
          placeholder="blur"
          blurDataURL="/images/popup/create_blur.jpg"
        />
        <p>CREATE NEW TEAM</p>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.03,
          textShadow: "0px 0px 6px rgb(255, 255, 255)",
          boxShadow: "0px 0px 8px rgb(226, 29, 75)",
          fontSize: "24px",
        }}
        whileTap={{
          scale: 0.97,
          fontSize: "14px",
        }}
        transition={{
          type: "tween",
          stiffness: 300,
        }}
        className="flex items-center justify-center relative w-64 h-48 md:w-96 md:h-64 rounded-xl"
        onClick={(e) => {
          e.preventDefault();
          router.push("/register?create=false");
        }}
      >
        <Image
          src="/images/popup/join.jpg"
          alt="join team"
          width={400}
          height={400}
          className="absolute object-cover object-center top-0 left-0 -z-40 w-full h-full brightness-[35%] blur-[3px] rounded-xl"
          placeholder="blur"
          blurDataURL="/images/popup/join_blur.jpg"
        />
        <p>JOIN A TEAM</p>
      </motion.div>
    </div>
  );
}

export default RegisterPopup;
