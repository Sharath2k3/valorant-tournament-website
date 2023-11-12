"use client";

import React, { useState } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import RegisterModal from "@/components/registration/RegisterModal";

function RegisterButton() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative">
      <motion.button
        onClick={() => setModalOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={buttonVariants({
          variant: "default",
          size: "lg",
          className: "text-lg font-valorant font-bold tracking-widest",
        })}
      >
        REGISTER
      </motion.button>
      <span className="block text-center">
        <Link href="#help" title="help">
          <span className="text-muted-foreground hover:underline">
            how to register
          </span>
        </Link>
      </span>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => {}}>
        {modalOpen && <RegisterModal handleClode={() => setModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default RegisterButton;
