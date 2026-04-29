"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const RightSec = () => {

  const googlesignin =async()=>{
const data = await authClient.signIn.social({
    provider: "google",
  });
  // console.log(data)
  }
  const githubsignin =async()=>{
const data = await authClient.signIn.social({
    provider: "github",
  });
  // console.log(data)
  }
  return (
    <div className="inline-flex flex-col p-5 bg-white border border-gray-200 rounded-lg shadow-sm min-w-[300px]">
      {/* Header */}
      <h2 className="text-[22px] font-bold text-gray-800 mb-5 text-left">
        Login With
      </h2>
      
      <div className="flex flex-col gap-3">
        {/* Google Button */}
        <button className="group flex items-center justify-center w-full py-2.5 px-4 border hover:bg-blue-400  hover:scale-95 hover:border-white transition-all duration-300 border-blue-400 rounded-md cursor-pointer bg-white" onClick={googlesignin}>
          <FaGoogle className="text-[#4285F4] text-lg mr-3 group-hover:text-white" />
          <span className="text-[#4285F4] font-medium text-[15px]  group-hover:text-white">
            Login with Google
          </span>
        </button>

        {/* Github Button */}
        <button className="group flex items-center justify-center w-full py-2.5 px-4 border border-black hover:bg-black hover:border-green-400 hover:scale-95 transition-all duration-300  cursor-pointer rounded-md bg-white" onClick={githubsignin}>
          <FaGithub className="text-black text-xl mr-3 group-hover:text-green-400"/>
          <span className="text-gray-800 font-medium text-[15px] group-hover:text-green-400">
            Login with Github
          </span>
        </button>
      </div>
    </div>
  );
};

export default RightSec;