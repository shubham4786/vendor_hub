"use client";

import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Page = () => {
  const route = useRouter();
  const { user, googleSignIn } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black pb-40 min-h-screen">
      <div className=" p-4 rounded shadow-md w-full max-w-md ">
        <button
          className="bg-blue-900 text-white px-4 py-4 rounded-full w-full  hover:bg-blue-600 "
          onClick={handleSignIn}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Page;
