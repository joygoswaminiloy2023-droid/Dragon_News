"use client";

import React from "react";
import { FaEnvelope, FaLock, FaUser, FaImage } from "react-icons/fa";
import newsBg from "@/assets/bg.jpg";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerHandler = (data) => {
    console.log("Name:", data.name);
    console.log("Photo URL:", data.photo);
    console.log("Email:", data.email);
    console.log("Password:", data.password);
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[2px] scale-110"
        style={{ backgroundImage: `url(${newsBg.src})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-8">

        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Create Account
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Join News Portal
        </p>

        <form className="space-y-5" onSubmit={handleSubmit(registerHandler)}>

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-800"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>

          {/* Photo URL */}
          <div className="relative">
            <FaImage className="absolute left-3 top-3 text-gray-500" />
            <input
              type="text"
              placeholder="Photo URL"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-800"
              {...register("photo", { required: "Photo URL is required" })}
            />
            {errors.photo && (
              <span className="text-red-500 text-sm">{errors.photo.message}</span>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-800"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
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
                  message: "Must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
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

          {/* Button */}
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-pink-800 transition">
            Register
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link href="Login" className="underline text-pink-800">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default Register;