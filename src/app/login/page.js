"use client";

// import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  // const session = useSession();

  // useEffect(() => {
  //   if (session.status === "authenticated") {
  //     router.push("/");
  //   }
  // }, [session]);

  return (
    <div className="flex flex-col items-center justify-center bg-black pb-40 min-h-screen">
      <div className=" p-4 rounded shadow-md w-full max-w-md ">
        <button
          className="bg-blue-900 text-white px-4 py-4 rounded-full w-full  hover:bg-blue-600 "
          // onClick={() => signIn("google")}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Page;
