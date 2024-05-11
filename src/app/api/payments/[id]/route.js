import { NextResponse } from "next/server";
import {
  CLIENT_KEY,
  API_KEY,
  CHECKSUM_KEY,
} from "@/../../src/ultils/contranst";

const PayOS = require("@payos/node");


const payos = new PayOS(
  CLIENT_KEY,
  API_KEY,
  CHECKSUM_KEY
);

export async function GET(res, { params }) {
  try {
    if (!params || !params.id) {
      throw new Error("Invalid parameters");
    }

    const code = params.id;

    const paymentInfo = await payos.getPaymentLinkInformation(code);

    return NextResponse.json({ paymentInfo }, { status: 200 });
  } catch (error) {
    console.error("Error fetching payment information:", error);
    return NextResponse.json({ message: "Failed" }, { status: 400 });
  }
};
