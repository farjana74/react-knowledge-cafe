import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [showBlog, setShowBlog] = useState([])

    useEffect(() => {
        fetch('/blogs.json')  // Make sure 'blogs.json' is in the public folder
          .then(res => {
            if (!res.ok) {
              throw new Error('Network response was not ok'); // Check for HTTP errors
            }
            return res.json(); // Parse the JSON
          })
          .then(data => {
            console.log(data); // Handle the JSON data
          })
        //   .catch(error => {
        //     console.error('There was a problem with the fetch operation:', error);
        //   });
      }, []);
    return (
        <div>
            
        </div>
    );
};

export default Blogs;