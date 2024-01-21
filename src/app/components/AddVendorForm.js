"use client";
import { useState, useEffect } from "react";
import postVendors from "./postVendors";
import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";

const AddVendorForm = () => {
  const [vendorData, setVendorData] = useState({
    vendorName: "",
    bankAccountNo: "",
    bankName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const router = useRouter();
  // const session = useSession();

  // useEffect(() => {
  //   if (session.status !== "authenticated") {
  //     router.push("/");
  //   }
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const result = await postVendors(vendorData);
    if (result.success) {
      alert("Vendor details is added successfully");
      setVendorData({
        vendorName: "",
        bankAccountNo: "",
        bankName: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        country: "",
        zipCode: "",
      });
    } else {
      alert("Please enter valid details");
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto mt-6">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Vendor Name*:
          <input
            type="text"
            name="vendorName"
            value={vendorData.vendorName}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-black border-2 p-2 rounded"
            required
          />
        </label>
      </div>
      <div className="mb-4 flex justify-between flex-wrap ">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Bank Account No*:
          <input
            type="text"
            name="bankAccountNo"
            value={vendorData.bankAccountNo}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-black border-2 p-2 rounded"
            required
          />
        </label>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Bank Name*:
          <input
            type="text"
            name="bankName"
            value={vendorData.bankName}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-black border-2 p-2 rounded"
            required
          />
        </label>
      </div>
      <div className="mb-4 flex justify-between flex-wrap">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Address Line 1:
          <input
            type="text"
            name="addressLine1"
            value={vendorData.addressLine1}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-black border-2 p-2 rounded"
            required
          />
        </label>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Address Line 2*:
          <input
            type="text"
            name="addressLine2"
            value={vendorData.addressLine2}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-black border-2 p-2 rounded"
            required
          />
        </label>
      </div>
      <div className="mb-4 flex justify-between flex-wrap">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          City*:
          <input
            type="text"
            name="city"
            value={vendorData.city}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-black border-2 p-2 rounded"
            required
          />
        </label>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Zip Code*:
          <input
            type="text"
            name="zipCode"
            value={vendorData.zipCode}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-black border-2 p-2 rounded"
            required
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Country*:
          <input
            type="text"
            name="country"
            value={vendorData.country}
            onChange={handleChange}
            className="form-input mt-1 block w-full border-black border-2 p-2 rounded"
            required
          />
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Add Vendor
      </button>
    </form>
  );
};

export default AddVendorForm;
