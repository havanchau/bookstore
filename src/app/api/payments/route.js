import { NextResponse } from "next/server";
const PayOS = require("@payos/node");

import { DOMAIN } from "@/../../src/ultils/contranst";

const payos = new PayOS(
  process.env.CLIENT_KEY,
  process.env.API_KEY,
  process.env.CHECKSUM_KEY
);

export const POST = async () => {
  try {
    const orderCode = Math.floor(Math.random() * 9007199254740991);

    const order = {
      amount: 2000,
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
}

