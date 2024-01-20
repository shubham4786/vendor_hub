import { connectionStr } from "@/library/db";
import { Vendor } from "@/library/model/vendor";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, response) {
  const vendor_id = response.params.vendor_id;
  const record = { _id: vendor_id };
  const payload = await request.json();
  await mongoose.connect(connectionStr);
  const data = await Vendor.findByIdAndUpdate(record, payload);
  return NextResponse.json({ success: true, data });
}

export async function GET(request, response) {
  const vendor_id = response.params.vendor_id;
  const record = { _id: vendor_id };
  await mongoose.connect(connectionStr);
  const data = await Vendor.findById(record);
  return NextResponse.json({ success: true, data });
}

export async function DELETE(request, response) {
  const vendor_id = response.params.vendor_id;
  const record = { _id: vendor_id };
  await mongoose.connect(connectionStr);
  const data = await Vendor.deleteOne(record);
  return NextResponse.json({ success: true, data });
}
