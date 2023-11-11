"use server";

import { connectDB } from "@/lib/db";
import Player, { IPlayer } from "@/models/player.model";

export interface CreatePlayerParams {
  isNewTeam: boolean;
}

export async function createPlayer(
  player: IPlayer,
  params: CreatePlayerParams
): Promise<string> {
  const { isNewTeam } = params;

  try {
    await connectDB();

    const teamPlayers = await Player.find({
      teamCode: player.teamCode,
    });

    if (!isNewTeam && teamPlayers.length == 0) {
      return "This team doesn't exist. Try to create a new team or join an existing one";
    }

    if (isNewTeam && teamPlayers.length > 0) {
      return "This team already exists. Try to generate a unique code";
    }

    if (teamPlayers.length > 4) {
      return "This team already contains 5 players (full)";
    }

    await Player.create(player);
    return "";
  } catch (e: any) {
    if (e.code == 11000) {
      const fieldValue = e.keyValue[Object.keys(e.keyValue)[0]];
      return `This field already exists '${fieldValue}'`;
    } else {
      console.log(e);
      return "Something went wrong";
    }
  }
}

export async function getTeam(riotId: string): Promise<IPlayer[] | string> {
  try {
    await connectDB();

    const players = await Player.find({ riotId });

    if (players.length == 0) {
      return "No player found with this riot id";
    } else if (players.length > 1) {
      return "Something went wrong";
    }

    const teamPlayers = await Player.find({
      teamCode: players[0].teamCode,
    });

    return teamPlayers.map((player) => {
      return {
        firstName: player.firstName,
        lastName: player.lastName,
        email: player.email,
        riotId: player.riotId,
        rank: player.rank,
        teamCode: player.teamCode,
        discordId: player.discordId,
        phoneNumber: player.phoneNumber,
        note: player.note,
      };
    });
  } catch (e: any) {
    console.log(e);
    return "Something went wrong";
  }
}

export async function getAllPlayers(): Promise<IPlayer[] | string> {
  try {
    await connectDB();
    return (await Player.find()).map((player) => {
      return {
        firstName: player.firstName,
        lastName: player.lastName,
        email: player.email,
        riotId: player.riotId,
        rank: player.rank,
        teamCode: player.teamCode,
        discordId: player.discordId,
        phoneNumber: player.phoneNumber,
        note: player.note,
      };
    });
  } catch (e: any) {
    console.log(e.message);
    return "Something went wrong";
  }
}
