import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const RightSec = () => {
  return (
    <div className="inline-flex flex-col p-5 bg-white border border-gray-200 rounded-lg shadow-sm min-w-[300px]">
      {/* Header */}
      <h2 className="text-[22px] font-bold text-gray-800 mb-5 text-left">
        Login With
      </h2>
      
      <div className="flex flex-col gap-3">
        {/* Google Button */}
        <button className="flex items-center justify-center w-full py-2.5 px-4 border border-blue-400 rounded-md bg-white">
          <FaGoogle className="text-[#4285F4] text-lg mr-3" />
          <span className="text-[#4285F4] font-medium text-[15px]">
            Login with Google
          </span>
        </button>

        {/* Github Button */}
        <button className="flex items-center justify-center w-full py-2.5 px-4 border border-black rounded-md bg-white">
          <FaGithub className="text-black text-xl mr-3" />
          <span className="text-gray-800 font-medium text-[15px]">
            Login with Github
          </span>
        </button>
      </div>
    </div>
  );
};

export default RightSec;