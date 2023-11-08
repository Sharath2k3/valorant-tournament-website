import React from "react";

import { motion } from "framer-motion";

import Backdrop from "@/components/registration/Backdrop";
import RegisterPopup from "@/components/registration/RegisterPopup";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

interface RegisterModalParams {
  handleClode: React.MouseEventHandler<HTMLDivElement>;
}

function RegisterModal(params: RegisterModalParams) {
  return (
    <Backdrop onClick={params.handleClode}>
      <motion.div
        onClick={(event) => {
          event.stopPropagation();
        }}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <RegisterPopup />
      </motion.div>
    </Backdrop>
  );
}

export default RegisterModal;
