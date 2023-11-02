"use server";

import { connectDB } from "@/lib/db";
import Player, { IPlayer } from "@/models/player.model";

export async function createPlayer(player: IPlayer): Promise<string> {
  try {
    await connectDB();

    const teamPlayers = await Player.find({
      teamCode: player.teamCode,
    });

    if (teamPlayers.length < 5) {
      await Player.create(player);
      return "";
    } else {
      return "This team already contains 5 players";
    }
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
