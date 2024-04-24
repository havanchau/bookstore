import { NextResponse } from "next/server";

const sendMail = require("../../mail/send.mail");

export const POST = async (req) => {
  try {
    const { email, subject, html } = await req.json()
    await sendMail({ email, subject, html });
    return NextResponse.json({ message: "Created" }, { status: 200 });
  } catch (error) {
    console.error("Error to sent mail:", error);
    return NextResponse.json({ message: "Failed" }, { status: 400 });
  }
};
