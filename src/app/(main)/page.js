

import LeftSec from "@/Components/Home/LeftSec";
import Mid from "@/Components/Home/Mid";
import RightSec from "@/Components/Home/RightSec";
import Heading from "@/Components/header/Heading";
import Nav from "@/Components/navbar/Nav";
import {catagorylist,catagoryID} from "@/app/lib/api/connection"



export default async function  Home() {
  // list
 const getCatagory=await catagorylist();

//catagory id

 const getCatagoryId=await catagoryID("01");
 console.log(getCatagoryId.data);
  return (
  <>

<div className="container mx-auto grid grid-cols-12 gap-x-10 ">

  {/* left */}
  <div className="col-span-3 mx-10">
<h1 className="font-bold text-2xl mb-5">All Category</h1>
     <div className="  text-center">
    
    {getCatagory.data.news_category.map((cd,ind)=><LeftSec key={ind} cd={cd} activeid={"01"}></LeftSec>)}
  </div>
  </div>
 

  {/* mid */}
  <div className="col-span-6 space-y-5">
    {getCatagoryId.data.map((id,ind)=><Mid key={ind} id={id}></Mid>)}
</div>
  {/* right */}
 <div className="col-span-3">
<RightSec></RightSec>
  </div>

</div>

  </>
  );
}
