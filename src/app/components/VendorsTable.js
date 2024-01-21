"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import DeleteVendorBtn from "./DeleteVendorBtn";
import { fetchVendorDetails } from "../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { UserAuth } from "../context/AuthContext";
const itemsPerPage = 5;

const VendorsTable = () => {
  const dispatch = useDispatch();
  const vendors = useSelector((data) => data.vendorData.vendorData.result);
  const vendor = useSelector((data) => data.vendorData.status);

  const router = useRouter();
  const { user } = UserAuth();
  useEffect(() => {
    dispatch(fetchVendorDetails()).catch((error) => {
      console.error("Error fetching data:", error);
    });
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVendors = vendors?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className=" flex flex-col items-center">
      {vendor == "loading" ? (
        <div className="flex items-center justify-center my-14">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-700 border-opacity-80"></div>
        </div>
      ) : (
        <div className="w-4/5 my-10 ">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Vendor Name</th>
                <th className="py-2 px-4 border-b">Bank Account No.</th>
                <th className="py-2 px-4 border-b">Bank Name</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentVendors?.map((vendor) => (
                <tr key={vendor._id}>
                  <td className="py-2 px-4 border-b text-center">
                    {vendor.vendorName}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {vendor.bankAccountNo}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {vendor.bankName}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <Link
                      href={`/vendorlist/${vendor._id}`}
                      className="text-blue-500 mr-2"
                    >
                      Edit
                    </Link>
                    <DeleteVendorBtn id={vendor._id} name={vendor.vendorName} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 flex justify-center">
            <ul className="flex space-x-2">
              {Array.from(
                { length: Math.ceil(vendors?.length / itemsPerPage) },
                (_, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={`${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      } px-4 py-2 rounded`}
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorsTable;
