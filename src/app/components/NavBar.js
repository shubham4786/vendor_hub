"use client";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
export default function NavBar() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

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
          {user && (
            <div className="flex items-center space-x-4">
              <Link className="text-white" href="/vendorlist">
                Vendor List
              </Link>
              <Link className="text-white" href="/addvendor">
                Add Vendor
              </Link>
            </div>
          )}

          {user ? (
            <Link onClick={handleSignOut} className="text-white" href="/">
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
