/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { mongoUri } from "./env.config";

const connectDB = async () => {
  try {
    // check if already connected
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    const connectionInstance = await mongoose.connect(String(mongoUri));
    console.log(
      `\nMongoDB Connected: DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error: any) {
    console.error(`Error while connecting to Mongo: ${error.message}`);
    process.exit(1);
  }
};

export { connectDB };
