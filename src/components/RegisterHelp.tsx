import React from "react";
import Link from "next/link";

import { InstagramLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

import { LINKS } from "@/lib/const";

function RegisterHelp() {
  return (
    <div
      id="help"
      className="flex flex-col items-start gap-6 md:gap-12 md:w-1/2"
    >
      <h1 className="text-2xl md:text-7xl font-valorant text-primary">
        How to register
      </h1>
      <div className="flex flex-col items-start gap-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          dolor odio molestias, nihil, sequi laboriosam delectus velit deserunt
          non molestiae temporibus neque in? In odio culpa dolore earum
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          dolor odio molestias, nihil, sequi laboriosam delectus velit deserunt
        </p>
        <p>
          non molestiae temporibus neque in? In odio culpa dolore earum
          praesentium? Impedit atque eligendi ipsum, vitae rem sint eos odit
        </p>
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
