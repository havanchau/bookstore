import { NextResponse } from "next/server";
const PayOS = require("@payos/node");

import {
  CLIENT_KEY,
  API_KEY,
  CHECKSUM_KEY,
  DOMAIN,
} from "@/../../src/ultils/contranst";

const payos = new PayOS(CLIENT_KEY, API_KEY, CHECKSUM_KEY);

export const POST = async (req) => {
  try {
    const orderCode = Math.floor(Math.random() * 9007199254740991);
    const { price } = await req.json();
    const priceToInt = parseInt(price);
    const order = {
      amount: 100000,
      description: "Thanh toan phi mua sach",
      orderCode: orderCode,
      returnUrl: `${DOMAIN}/result`,
      cancelUrl: `${DOMAIN}/result`,
    };

    const paymentLink = await payos.createPaymentLink(order);
    const link = paymentLink.checkoutUrl;
    return NextResponse.json({ link, orderCode }, { status: 200 });
  } catch (error) {
    console.error("Error creating payment link:", error);
    return NextResponse.json({ message: "Failed" }, { status: 400 });
  }
};
