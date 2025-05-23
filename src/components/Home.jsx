import React from "react";
import Sidebar from "./Sidebar.jsx";
import Video from "./Video.jsx";
import { useAuth } from "../context/AuthProvider.jsx";
import Listitems from "./Listitems.jsx";
function Home() {
  const { data } = useAuth();
  console.log(data);
  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="w-[100%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <Listitems/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
{
  data.map((item)=>{
    if(item.type!=="video") return false;
    return(
      <Video key={item.id} video={item?.video}/>
    )
})
}      </div>
      </div>
    </div>
  );
}

export default Home;
