"use client";
import Link from "next/link";

import { signOut, useSession } from "next-auth/react";
export default function NavBar() {
  const session = useSession();
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl">
          Vendor Hub
        </Link>
        <div className="flex items-center space-x-4">
          <Link className="text-white" href="/">
            Home
          </Link>
          {session.status === "authenticated" && (
            <div className="flex items-center space-x-4">
              <Link className="text-white" href="/vendorlist">
                Vendor List
              </Link>
              <Link className="text-white" href="/addvendor">
                Add Vendor
              </Link>
            </div>
          )}

          {session.status === "authenticated" ? (
            <Link
              onClick={() => signOut("google")}
              className="text-white"
              href="/"
            >
              Logout
            </Link>
          ) : (
            <Link className="text-white" href="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
