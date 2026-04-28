"use client"
import React from 'react';
import { FaEnvelope, FaLock, FaUserCircle } from 'react-icons/fa';
import newsBg from "@/assets/bg.jpg"; // adjust path if needed
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const Login = () => {

const loginhandler=(data)=>{
console.log(data.email);
console.log(data.password);
}

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  return (



<div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
  
  {/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center blur-[2px] scale-110"
  style={{
    backgroundImage: `url(${newsBg.src})`,
  }}
></div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Login Card */}
  <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8">
    
    <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
      Login to News Portal
    </h1>
    <p className="text-center text-sm text-gray-600 mb-6">
      Stay updated with latest headlines
    </p>

    <form className="space-y-5" onSubmit={handleSubmit(loginhandler)}>
      
      {/* Email */}
      <div className="relative">
        <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
        <input
          type="email"
          placeholder="Email address"
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-800"
           {...register("email", { required: "Cannot Be Empty" })}
        />
         {errors.email && <span className='text-red-500'>This field is required</span>}
      </div>

      {/* Password */}
      <div className="relative">
        <FaLock className="absolute left-3 top-3 text-gray-500" />
       <input
  type="password"
  placeholder="Password"
  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-800"
  {...register("password", {
    required: "Password cannot be empty",

    minLength: {
      value: 8,
      message: "Password must be at least 8 characters",
    },

    pattern: {
      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      message:
        "Must include uppercase, number, and special character",
    },
  })}
/>
        {errors.password && (
  <span className="text-red-500 text-sm">
    {errors.password.message}
  </span>
)}
      </div>

      {/* Options */}
      <div className="flex justify-between items-center text-sm text-gray-700">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="checkbox checkbox-sm" />
          Remember me
        </label>
        <a href="#" className="hover:underline">Forgot?</a>
      </div>

      {/* Button */}
      <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-pink-800 transition">
        Login
      </button>

      {/* Footer */}
      <p className="text-center text-sm text-gray-600 mt-4">
        Don’t have an account? <Link href="Register" className="underline cursor-pointer text-pink-800">Sign up</Link>
      </p>

    </form>
  </div>
</div>
  );
};

export default Login;