import Image from 'next/image';
import React from 'react';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';


const Mid = ({id}) => {
    
    return (
    <div className="bg-white rounded-lg shadow p-4 space-y-4">

      {/* Top author section */}
      <div className="flex items-center justify-between bg-gray-200 p-5 rounded-2xl">
        <div className="flex items-center gap-3 ">
    <Image
  src={id?.author?.img || "/avatar.png"}
  alt="author"
  width={40}
  height={40}
  className="rounded-full object-cover"
/>
          <div>
            <h4 className="font-semibold text-sm">{id.author.name}</h4>
            <p className="text-xs text-gray-500">{id.author.published_date}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold leading-snug">
        {id.title}
      </h2>

      {/* Image */}
      <Image
        src={id.image_url}
        alt="news"
        width={600}
        height={300}
        className="rounded-md w-full object-cover"
      />

      {/* Description */}
      <p className="text-sm text-gray-600">
        {id.details.slice(0, 150)}...
        <span className="text-orange-500 cursor-pointer ml-1">Read More</span>
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t py-10">

        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 ml-2 text-sm">
            {id.rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500 text-sm ">
          <FaEye />
          {id.total_view}
        </div>

      </div>
    </div>
    );
};

export default Mid;