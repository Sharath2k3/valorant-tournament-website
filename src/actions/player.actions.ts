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
      throw e;
    }
  }
}

export async function getAllPlayers(): Promise<IPlayer[]> {
  try {
    await connectDB();
    return await Player.find();
  } catch (e: any) {
    console.log(e.message);
    return [];
  }
}
