import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookmark, setBookMark] = useState([]);
  const handleOnBookmark = blog =>{
    const newBookmark = [...bookmark,blog]
    setBookMark(newBookmark)

  }

  return (
    <>
      <div className="md:container md:mx-auto p-4">
        <Header />

        <div className="flex  justify-between">
          <Blogs handleOnBookmark ={handleOnBookmark} />
          <Bookmarks bookmark={bookmark} />
        </div>
      </div>
    </>
  );
}

export default App;
