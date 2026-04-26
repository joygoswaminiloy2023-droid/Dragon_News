import Heading from "@/Components/header/Heading";
import Nav from "@/Components/navbar/Nav";
import {catagory} from "@/app/lib/api/connection"


export default async function  Home() {
 const getCatagory=await catagory();
 console.log(getCatagory.data);
  return (
  <>
{/* left */}
<div>
  <h1>Category</h1>
  {
    getCatagory.data.news_category.map((newslist,ind)=><><div>{newslist.category_name}</div></>)
  }
</div>

  </>
  );
}
