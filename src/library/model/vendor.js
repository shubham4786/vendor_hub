const { default: mongoose } = require("mongoose");

const vendorModel = new mongoose.Schema({
  vendorName: { type: String, required: true },
  bankAccountNo: { type: String, required: true },
  bankName: { type: String, required: true },
  addressLine1: String,
  addressLine2: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  zipCode: { type: String, required: true },
});

export const Vendor =
  mongoose.models.vendors || mongoose.model("vendors", vendorModel);
