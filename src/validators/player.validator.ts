import { z } from "zod";

export const playerSchema = z.object({
  firstName: z
    .string()
    .min(3, {
      message: "Your first name must contain at least 3 characters",
    })
    .max(255, {
      message: "Your first name must contain at most 255 characters",
    }),
  lastName: z
    .string()
    .min(3, {
      message: "Your last name must contain at least 3 characters",
    })
    .max(255, {
      message: "Your last name must contain at most 255 characters",
    }),
  email: z
    .string()
    .email()
    .min(5, {
      message: "Your email must contain at least 5 characters",
    })
    .max(255, {
      message: "Your email must contain at most 255 characters",
    }),
  phoneNumber: z
    .string()
    .regex(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])*$/,
      "Invalid phone number"
    ),
  discordId: z.string(),
  riotId: z
    .string()
    .includes("#", {
      message: "Invalid Riot ID (name#tag)",
    })
    .min(5),
  rank: z.enum([
    "Unranked",
    "Iron",
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
    "Ascendant",
    "Immortal",
    "Radiant",
  ]),
  teamCode: z
    .string()
    .min(3, {
      message: "The team code must contain at least 3 characters",
    })
    .max(255, {
      message: "The team code must contain at most 255 characters",
    }),
  note: z.string(),
});
