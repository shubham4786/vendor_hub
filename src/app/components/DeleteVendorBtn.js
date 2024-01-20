"use client";

import { useDispatch } from "react-redux";
import { fetchVendorDetails } from "../redux/slice";

const DeleteVendorBtn = (props) => {
  const dispatch = useDispatch();
  const id = props.id;
  const name = props.name;

  const DeleteVendor = async () => {
    const isDelete = confirm("Are you sure you want to delete " + name);
    if (isDelete) {
      let result = await fetch(
        `https://vendor-hub-75wt.vercel.app/api/vendor/${id}`,
        {
          method: "DELETE",
        }
      );

      result = await result.json();

      if (result.success) {
        dispatch(fetchVendorDetails());
        alert("Vendor details is deleted successfully ");
      }
    }
  };
  return (
    <button className="text-red-500" onClick={() => DeleteVendor()}>
      Delete
    </button>
  );
};

export default DeleteVendorBtn;
