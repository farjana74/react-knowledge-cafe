import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookmark, setBookMark] = useState([]);
  const [timeCount, setTimeCount]= useState(0)

  const handleOnBookmark = blog =>{
    const newBookmark = [...bookmark,blog]
    setBookMark(newBookmark)

  }

  const handleTimeCount = (count,id) =>{
    console.log(count)
    const newCounting = timeCount+count
    setTimeCount(newCounting)

    // remove bookmark from the ?list

    const remainingBookMarks = bookmark.filter(bookmarks=>bookmarks.id!== id)
    setBookMark(remainingBookMarks)




  }

  return (
    <>
      <div className="md:container md:mx-auto p-4">
        <Header />

        <div className="flex  justify-between">
          <Blogs handleOnBookmark ={handleOnBookmark} handleTimeCount={handleTimeCount} />
          <Bookmarks bookmark={bookmark}  timeCount={timeCount} />
        </div>
      </div>
    </>
  );
}

export default App;
