"use server";

import mongoose from "mongoose";

let isConnected: boolean = false;

export async function connectDB(): Promise<void> {
  if (isConnected) {
    console.log("Already connected to mongodb");
    return;
  }

  if (!process.env.DATABASE_URL) {
    console.log("Database connection URL not found");
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      appName: "valoresi",
      dbName: "valoresi-db",
    });

    isConnected = true;
    console.log("Connected to database");
  } catch (e: any) {
    console.log(e);
  }
}
