import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import { format } from "date-fns";
import BreakingNews from "./BreakingNews";
const Heading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 my-6 text-center">
      
      <Image
        src={logo}
        alt="Website Logo"
        width={300}
        height={150}
        priority
        className="w-auto h-auto max-w-full"
      />

      <p className="text-lg md:text-xl opacity-70">
        Journalism Without Fear or Favour
      </p>
      <div className="text-xl font bold text-slate-500">
        {format(new Date, "EEEE,MMMM dd,yyyy")}
       
        </div>
<div className="mt-5 flex items-center bg-gray-100 p-2 rounded-md">
    <span className="btn bg-pink-800 text-white"> Breaking News</span>
     <BreakingNews /></div>

    </div>
  );
};

export default Heading;