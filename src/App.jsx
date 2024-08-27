import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="md:container md:mx-auto">
        <Header />

        <div className="flex  justify-between">
          <Blogs />
          <Bookmarks />
        </div>
      </div>
    </>
  );
}

export default App;
