export const catagorylist=async()=>{
    const res=await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data= await res.json()
    return data;
}

export const catagoryID=async(id)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const data= await res.json()
    return data;
}

export const getnewsbyID = async (news_id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`);
  const data = await res.json();  
  return data.data[0];            
}