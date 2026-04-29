"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import profile from "@/assets/user.png";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const Nav = () => {

    const path=usePathname();
    const { data: session, isPending } = authClient.useSession()
    const User=session?.user
    // console.log(User)

  const navlink = (
    <>
      <li><Link href="/" className={`${path==="/"?"border-b-2 border-pink-800":""}`}>Home</Link></li>
      <li><Link href="About" className={`${path==="/About"?"border-b-2 border-pink-800":""}`}>About</Link></li>
      <li><Link href="Career" className={`${path==="/Career"?"border-b-2 border-pink-800":""}`}>Career</Link></li>
    </>
  );
  

  return (
 <div className="container m-auto bg-white  rounded-md px-4 flex items-center justify-between ">


  <div className="w-0 md:w-1/3"></div>

  {/* CENTER */}
  <div className=" flex justify-center">
    <ul className="menu menu-horizontal px-1">
      {navlink}
    </ul>
  </div>

  {/* RIGHT */}
{
  isPending?(<span className="loading loading-spinner text-secondary"></span>):User ? (
    <div className="w-1/3 flex items-center justify-end gap-3">
   <p>HI,{User.name}</p>
    
   { User.image?(<Image
  src={User.image}
  alt="User"
  width={40}
  height={40}
  className="w-10 h-10 rounded-full object-cover border-2 border-pink-800"
/>):
(
<Image
  src={profile}
  alt="User"
  width={40}
  height={40}
  className="w-10 h-10 rounded-full object-cover border-2 border-pink-800"
/>
)
}
   
      
      <button
        className="btn bg-slate-900 text-white hover:bg-pink-800"
       onClick={async()=>await authClient.signOut()}>
        Log-Out
      </button>
    </div>
  ) : (
    <div className="w-1/3 flex items-center justify-end">
      <Link
        href="Login"
        className="btn bg-slate-900 text-white hover:bg-pink-800"
      >
        Log-in
      </Link>
    </div>
  )
}
</div>
  );
};

export default Nav;