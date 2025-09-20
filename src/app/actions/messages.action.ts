/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { headers } from "next/headers";
import Messages from "@/models/messages.model";
import { connectDB } from "@/configs/database.config";

export const sendMessage = async (message: any) => {
  try {
    await connectDB();

    // Get the IP address from request headers
    const headersList = await headers();

    // Try different header names to get the real IP address
    const forwardedFor = headersList.get("x-forwarded-for");
    const realIp = headersList.get("x-real-ip");
    const cfConnectingIp = headersList.get("cf-connecting-ip"); // Cloudflare

    // Extract IP address (x-forwarded-for can contain multiple IPs, we want the first one)
    let userIp = "";

    if (forwardedFor) {
      userIp = forwardedFor.split(",")[0].trim();
    } else if (realIp) {
      userIp = realIp;
    } else if (cfConnectingIp) {
      userIp = cfConnectingIp;
    }

    if (!message.reality) {
      // Add the IP address to the message data
      const messageWithIp = {
        ...message,
        ip: userIp,
      };

      const newMessage = new Messages(messageWithIp);
      await newMessage.save();
    }

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error: any) {
    console.error(error);
    return {
      success: false,
      message: error.message || "Error sending message!",
    };
  }
};
