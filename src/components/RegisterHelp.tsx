import React from "react";
import Link from "next/link";

import { InstagramLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

import { LINKS } from "@/lib/const";

function RegisterHelp() {
  return (
    <div className="flex flex-col items-start gap-6 md:gap-12 md:w-1/2">
      <h1 className="text-2xl md:text-7xl font-valorant text-primary">
        How to register
      </h1>
      <div className="flex flex-col items-start gap-6">
        <div>
          <h2 className="text-xl text-muted-foreground font-valorant">
            Creating a New Team:
          </h2>
          <p>
            If you do not currently have a team, you can initiate the creation
            of a new team by generating a unique{" "}
            <span className="text-primary font-bold">team code</span>. It is
            imperative to preserve this code for{" "}
            <span className="text-primary font-bold">sharing</span> with your
            friends, enabling them to join your team.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-muted-foreground font-valorant">
            Joining an Existing Team:
          </h2>
          <p>
            For those seeking to join an already established team, kindly
            request the{" "}
            <span className="text-primary font-bold">team code</span> from the
            team leader. Ensure to input this code accurately when completing
            the form. If the team has available slots, you will be successfully
            added to it.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-muted-foreground font-valorant">
            Team Members Verification:
          </h2>
          <p>
            To review your team members at any time, utilize the provided mini
            form by entering your{" "}
            <span className="text-primary font-bold">Riot ID</span>.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center text-center text-sm md:text-base lg:text-xl gap-2 text-muted-foreground">
        <span>YOU CAN CONTACT US BY</span>
        <Link target="_blank" href={`mailto:${LINKS.mail}`} title="mail">
          <EnvelopeClosedIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 inline hover:text-primary" />
        </Link>
        <span>OR</span>
        <Link target="_blank" href={LINKS.instagram} title="instagram">
          <InstagramLogoIcon className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 inline hover:text-primary" />
        </Link>
      </div>
    </div>
  );
}

export default RegisterHelp;
