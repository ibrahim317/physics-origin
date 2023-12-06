import axios from "axios";
import { PrismaClient } from "@/prisma/generated/client";
const prisma = new PrismaClient();

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const apiUrl = "https://secure-egypt.paytabs.com/payment/request";
  const profileServerKey = "SWJ99KJ2WH-JHJWG2G6ML-D22HKWG96R";
  const profileId = "134482";

  const requestData = {
    profile_id: profileId,
    tran_type: "sale",
    tran_class: "ecom",
    cart_id: data.course.id.toString(),
    cart_currency: "EGP",
    cart_amount: data.course.price,
    cart_description: data.course.name,
    paypage_lang: "en",
    customer_details: {
      id: data.user.id.toString(),
      name: `${data.user.first_name} ${data.user.last_name}`,
      email: data.user.email,
      phone: data.user.phone,
      street1: "404, 11th st, void",
      city: "Cairo",
      state: "",
      country: "EG",
    },
    hide_shipping: true,
    callback: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/paymentcallback`,
    return: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/course?id=${data.course.id}`,
  };

  try {
    const res = await axios.post(apiUrl, requestData, {
      headers: {
        Authorization: profileServerKey,
        "Content-Type": "application/json",
      },
    });
    return NextResponse.json(res.data.redirect_url, { status: 201 });
  } catch (error: any) {
    console.log("Error from from getting PayTabs redirect_url");
    return NextResponse.json(error, { status: 400 });
  }
}
