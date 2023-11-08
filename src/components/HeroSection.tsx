import React from "react";

import RegisterButton from "@/components/registration/RegisterButton";

function HeroSection() {
  return (
    <div className="h-screen flex flex-col gap-8 items-center justify-center">
      <p>HeroSection</p>

      <RegisterButton />
    </div>
  );
}

export default HeroSection;
