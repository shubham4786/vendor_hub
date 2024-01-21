"use client";
import { useRouter } from "next/navigation";
import { UserAuth } from "./context/AuthContext";

export default function Home() {
  const router = useRouter();
  const { user } = UserAuth();
  return (
    <div className="flex flex-col items-center justify-center bg-black pb-40 min-h-screen">
      <div className=" p-4 rounded shadow-md w-full max-w-md ">
        {user ? (
          <div>
            <button
              className="bg-blue-900 text-white px-4 py-4 rounded-full w-full  hover:bg-blue-600 "
              onClick={() => router.push("/vendorlist")}
            >
              Vendor List
            </button>
            <button
              className="bg-blue-900 text-white my-5 px-4 py-4 rounded-full w-full  hover:bg-blue-600 "
              onClick={() => router.push("/addvendor")}
            >
              Add Vendor
            </button>
          </div>
        ) : (
          <button
            className="bg-blue-900 text-white px-4 py-4 rounded-full w-full  hover:bg-blue-600 "
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
}
