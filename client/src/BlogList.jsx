import React from 'react';
import { use } from 'react';
import { Link, useNavigate  } from "react-router-dom"


function BlogList({ blogs, title, user }) {
  console.log("Data in BlogList:", blogs);
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div key={blog._id}>
          <Link to={`/${user}/${blog._id}/detail`}><h3>{blog.title}</h3></Link>
          {/* <p>{blog.body}</p> */}
        </div>
      ))}
    </div>
  );
}

export default BlogList;