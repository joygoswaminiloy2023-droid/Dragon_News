import LeftSec from '@/Components/Home/LeftSec';
import Mid from '@/Components/Home/Mid';
import React from 'react';
import {catagorylist,catagoryID} from "@/app/lib/api/connection"

const Newscategory = async({params}) => {
    const {id}=await params;
   

     const getCatagory=await catagorylist();
    
    //catagory id
    
     const getCatagoryId=await catagoryID(id);
     const news=getCatagoryId.data;
     


    
    return (
   <>

<div className="container mx-auto grid grid-cols-12 gap-x-10 ">

  {/* left */}
  <div className="col-span-3 mx-10">
<h1 className="font-bold text-2xl mb-5">All Category</h1>
     <div className="  text-center">
    
    {getCatagory.data.news_category.map((cd,ind)=><LeftSec key={ind} cd={cd} activeid={id}></LeftSec>)}
  </div>
  </div>
 

  {/* mid */}
 <div className="col-span-6 space-y-4">
  {news.length > 0 ? (
    news.map((item, ind) => (
      <div
        key={ind}
        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
      >
        <Mid id={item} />
      </div>
    ))
  ) : (
    <p className="text-center text-gray-500">
      News not available
    </p>
  )}
</div>
  {/* right */}
 <div className="col-span-3 bg-green-100">
<h1>right</h1>
  </div>

</div>

  </>
    );
};

export default Newscategory;<h1>Catagory News</h1>