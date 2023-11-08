"use client";

import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import RegisterModal from "@/components/RegisterModal";

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
          size: "default",
          className: "",
        })}
      >
        Register
      </motion.button>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => {}}>
        {modalOpen && <RegisterModal handleClode={() => setModalOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}

export default RegisterButton;
