import { connectionStr } from "@/library/db";
import { Vendor } from "@/library/model/vendor";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  let success = true;
  try {
    await mongoose.connect(connectionStr);
    data = await Vendor.find();
  } catch (error) {
    data = ["data not fount"];
    success = false;
  }
  return NextResponse.json({ success, result: data });
}

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  let vendor = new Vendor(payload);
  const data = await vendor.save();
  return NextResponse.json({ success: true, data });
}
