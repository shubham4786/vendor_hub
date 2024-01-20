"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchVendorDetails } from "@/app/redux/slice";
import { useRouter } from "next/navigation";

const EditVendorForm = (props) => {
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
  const rouder = useRouter();
  const dispatch = useDispatch();
  const id = props.params.vendor_id;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateVendorDetails = async (e) => {
    e.preventDefault();

    const {
      vendorName,
      bankAccountNo,
      bankName,
      addressLine1,
      addressLine2,
      city,
      country,
      zipCode,
    } = vendorData;
    let result = await fetch(
      `https://vendor-hub-75wt.vercel.app/api/vendor/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          vendorName,
          bankAccountNo,
          bankName,
          addressLine1,
          addressLine2,
          city,
          country,
          zipCode,
        }),
      }
    );

    result = await result.json();

    if (result.success) {
      dispatch(fetchVendorDetails());
      rouder.push("/vendorlist");
      alert("Vendor details is updated successfully");
    } else {
      alert("Please enter valid details");
    }
  };

  const getVendorDetails = async () => {
    let result = await fetch(
      `https://vendor-hub-75wt.vercel.app/api/vendor/${id}`
    );
    result = await result.json();

    const {
      vendorName,
      bankAccountNo,
      bankName,
      addressLine1,
      addressLine2,
      city,
      country,
      zipCode,
    } = result.data;

    if (result.success) {
      setVendorData({
        vendorName,
        bankAccountNo,
        bankName,
        addressLine1,
        addressLine2,
        city,
        country,
        zipCode,
      });
    }
  };

  useEffect(() => {
    getVendorDetails();
  }, []);

  return (
    <form onSubmit={updateVendorDetails} className="max-w-md mx-auto mt-6">
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

export default EditVendorForm;
