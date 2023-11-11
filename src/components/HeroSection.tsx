import React from "react";

import RegisterButton from "@/components/registration/RegisterButton";

function HeroSection() {
  return (
    <section className="h-screen overflow-hidden flex flex-col gap-12 items-center justify-center">
      <ValoresiText />

      <RegisterButton />
    </section>
  );
}

function ValoresiText() {
  return (
    <h1 className="inline text-primary text-center font-light font-valorant opacity-50 text-6xl md:text-8xl">
      VALORESI
    </h1>
  );
}

export default HeroSection;
