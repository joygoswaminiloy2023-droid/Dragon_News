"use"
import React from 'react';
import { getnewsbyID } from '@/app/lib/api/connection'
import Image from 'next/image';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';


const Newsdetails = async({params}) => {
const {id}=await params;

const news=await getnewsbyID(id);
console.log(news);

    return (
  <div className="max-w-3xl mx-auto my-8 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden p-6">
  {/* Featured Image */}
<div className="relative w-full h-100"> {/* Set a height that fits your design */}
 <div className="relative w-full h-100 bg-gray-200 rounded-lg overflow-hidden">
    <Image
          src={news.image_url}
          alt="news"
          width={600}
          height={300}
          className="rounded-md w-full object-cover"
        />
</div>
</div>

  {/* Title */}
  <h2 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
    {news.title}
  </h2>

  {/* Metadata / Tags Line */}
  <div className="text-sm text-gray-500 mb-4 flex flex-wrap gap-1 items-center">
    <span className="font-medium text-gray-600">{news.published_date}</span>
    <span className="mx-1">|</span>
    <span className="font-semibold text-gray-400">Tag Cloud Tags:</span>
    {news.tags && news.tags.map((tag, index) => (
      <span key={index} className="after:content-[','] last:after:content-[''] mr-1">
        {tag}
      </span>
    ))}
  </div>

  {/* News Details Content */}
  <div className="text-gray-600 text-sm leading-relaxed mb-8">
    {/* The image shows the text repeating or dense; using a standard paragraph here */}
    <p className="mb-4">
      {news.details}
    </p>
    {/* Mimicking the "double text" look from the screenshot if needed */}
    <p className="opacity-90">
      {news.details.substring(0, 300)}...
    </p>
  </div>

  {/* Red Navigation Button */}
  <div className="border-t pt-6">
    <Link href={`/category/${id}`} className="flex  items-center gap-2 bg-[#d32f4f] hover:bg-[#b22440] text-white px-6 py-2.5 rounded-md transition-colors text-sm font-medium">
      <BiArrowBack></BiArrowBack>
      All news in this category
    </Link>
  </div>
</div>
    );
      
    
};


    

export default Newsdetails;