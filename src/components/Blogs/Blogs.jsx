import  { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; 

const Blogs = ({handleOnBookmark,handleTimeCount}) => {
  const [showBlog, setShowBlog] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok"); // Check for HTTP errors
        }
        return res.json(); // Parse the JSON
      })
      .then((data) => {
        setShowBlog(data); // Handle the JSON data
      });
    //   .catch(error => {
    //     console.error('There was a problem with the fetch operation:', error);
    //   });
  }, []);
  return (
    <div className="md:w-2/3  border">
      {/* <h3>blogs length :{showBlog.length}</h3> */}
      {showBlog.map((blog,idx) => (
        <Blog key={idx} handleOnBookmark={handleOnBookmark} handleTimeCount={handleTimeCount} blog={blog} />
      ))}
    </div>
  );
};



Blogs.propTypes={
  handleOnBookmark :PropTypes.func
}

export default Blogs;
