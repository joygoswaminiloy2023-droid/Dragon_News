"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import profile from "@/assets/user.png";
import { usePathname } from "next/navigation";

const Nav = () => {
    const path=usePathname();
  const navlink = (
    <>
      <li><Link href="/" className={`${path==="/"?"border-b-2 border-pink-800":""}`}>Home</Link></li>
      <li><Link href="About" className={`${path==="/About"?"border-b-2 border-pink-800":""}`}>About</Link></li>
      <li><Link href="career" className={`${path==="/Career"?"border-b-2 border-pink-800":""}`}>Career</Link></li>
    </>
  );
  

  return (
 <div className="container m-auto bg-white mb-3 lg:mb-6 rounded-md px-4 flex items-center justify-between ">


  <div className="w-0 md:w-1/3"></div>

  {/* CENTER */}
  <div className=" flex justify-center">
    <ul className="menu menu-horizontal px-1">
      {navlink}
    </ul>
  </div>

  {/* RIGHT */}
  <div className="w-1/3 flex items-center justify-end gap-3">
    <Image
      src={profile}
      alt="User"
      width={40}
      height={40}
      className="rounded-full"
    />

    <Link href="Login" className="btn bg-slate-900 text-white hover:bg-pink-800">
      Log-in
    </Link>
  </div>

</div>
  );
};

export default Nav;