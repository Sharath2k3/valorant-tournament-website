"use server";

import { connectDB } from "@/lib/db";
import Player, { IPlayer } from "@/models/player.model";

export async function createPlayer(player: IPlayer): Promise<void> {
  try {
    await connectDB();
    await Player.create(player);
  } catch (e: any) {
    console.log(e.message);
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
