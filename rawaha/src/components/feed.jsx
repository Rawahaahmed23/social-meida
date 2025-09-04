import { PostCard } from "./post-card"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

export default function Feed() {
const { isLoading, error, data } = useQuery({
  queryKey: ["posts"],
  queryFn: async () => {
    const res = await fetch("http://localhost:5000/api/posts", {
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) throw new Error("Network response not ok");

    const data = await res.json();  // await zaroori hai
    return data;                    // yahan data return hona chahiye
  },
});

  console.log(data)



  return (
 <div className="space-y-8">
  {error ? "Some thing went wrong":isLoading ?'Loading':
  data.map((post)=> <PostCard post={post} key={post._id}/>)
  }
  </div>
  
 )
}
