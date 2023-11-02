"use server";

import mongoose from "mongoose";

export interface IPlayer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string | null;
  discordId: string | null;
  riotId: string;
  rank:
    | "Unranked"
    | "Iron"
    | "Bronze"
    | "Silver"
    | "Gold"
    | "Platinum"
    | "Diamond"
    | "Ascendant"
    | "Immortal"
    | "Radiant";
  teamCode: string;
  note: string | null;
}

const PlayerSchema = new mongoose.Schema<IPlayer>(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phoneNumber: {
      type: String,
      index: {
        unique: true,
        partialFilterExpression: {
          phoneNumber: {
            $type: "string",
          },
        },
      },
      default: null,
    },
    discordId: {
      type: String,
      index: {
        unique: true,
        partialFilterExpression: {
          discordId: {
            $type: "string",
          },
        },
      },
      default: null,
    },
    riotId: {
      type: String,
      required: [true, "Riot ID is required"],
      unique: true,
    },
    rank: {
      type: String,
      required: [true, "Valorant rank is required"],
      enum: {
        values: [
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
        ],
        message: "'{VALUE}' is not a valid rank",
      },
    },
    teamCode: {
      type: String,
      required: [true, "Team Code is required"],
    },
    note: {
      type: String,
      trim: true,
      default: null,
    },
  },
  { timestamps: true }
);

const Player = mongoose.model<IPlayer>("Player", PlayerSchema);
export default Player;
