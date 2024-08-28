import React from "react";

import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog,handleOnBookmark,handleTimeCount }) => {
  const { title, author, cover, reading_time, author_img, posted_date ,id} = blog;
  return (
    <div>
      <img className="w-full" src={cover} alt="" />
      {/* <h2 className="text-4xl">{title}</h2> */}
      <div className="flex justify-between item-center my-3 ">
        <div className="flex  ">
          <div className="mr-2">
            <img className="w-14" src={author_img} alt="" />
          </div>
          <div>
            <h5>{author}</h5>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time}min read </span>
          <button onClick={()=>handleOnBookmark(blog)} className="text-base text-red-500"><CiBookmark /></button>
          
        </div>
      </div>
      <h2 className="text-4xl font-bold">
        How to get your first job as a self-taught programmer
      </h2>
      <div className="my-4 ">
      <button onClick={()=>handleTimeCount(reading_time,id)} className="underline">Mark as Read:{}</button>
      </div>
    </div>
  );
};

export default Blog;
