import React from "react";

import { motion } from "framer-motion";

interface BackdropParams {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  children: any;
}

function Backdrop(params: BackdropParams) {
  return (
    <motion.div
      onClick={params.onClick}
      className="fixed top-0 left-0 z-50 bg-[#000000CC] flex w-screen h-screen justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {params.children}
    </motion.div>
  );
}

export default Backdrop;
