import React from "react";

import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

import RegisterButton from "@/components/registration/RegisterButton";

function HeroSection() {
  return (
    <section className="h-screen overflow-hidden space-y-16">
      <h1 className="w-full mt-4 font-valorant text-center text-2xl md:text-5xl font-bold text-muted-foreground opacity-20">
        Are you the champion ?
      </h1>

      <div className="h-2/3 flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-primary text-center font-light font-valorant opacity-50 text-6xl md:text-8xl">
            VALORESI
          </h1>

          <p className="md:w-2/4 text-center opacity-90 text-xl font-extralight">
            Embrace the Excitement, Unleash the Gamer in You, and Prepare for an
            epic gaming showdown as ESI presents its first-ever Video Game
            tournament,{" "}
            <span className="text-primary font-bold underline">VALORESI</span>.
            Whether you are a pro or a casual player, this tournament is your
            chance to showcase your skills and have{" "}
            <span className="text-primary font-bold">fun</span>. Register now
            and join us!
            <br />
            See you at the virtual arena.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex w-full justify-start items-center gap-3">
            <FaMapMarkerAlt className="text-primary w-6 h-6 -mt-1" />
            <p className="text-2xl font-valorant font-light">ESI Algiers</p>
            <p className="text-2xl text-primary underline font-bold font-valorant">
              DGA
            </p>
          </div>
          <div className="flex w-full justify-start items-center gap-3">
            <FaClock className="text-primary w-6 h-6 -mt-1" />
            <p className="text-2xl font-valorant font-light">TUE 28 Nov</p>
            <p className="text-2xl text-primary underline font-bold font-valorant">
              13:00
            </p>
          </div>
        </div>

        <RegisterButton />
      </div>
    </section>
  );
}

export default HeroSection;
