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
      <li><Link href="/" className={`${path==="/"?"border-b-2 border-black":""}`}>Home</Link></li>
      <li><Link href="about">About</Link></li>
      <li><Link href="career">Career</Link></li>
    </>
  );
  

  return (
 <div className="max-w-7xl m-auto bg-white mb-6 lg:mb-12 rounded-md px-4 flex items-center justify-between">


  <div className="w-1/3"></div>

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

    <button className="btn bg-slate-900 text-white hover:bg-[#0d9488]">
      Log-in
    </button>
  </div>

</div>
  );
};

export default Nav;