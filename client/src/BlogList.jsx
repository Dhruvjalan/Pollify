import React from 'react';
import { use } from 'react';
import { Link, useNavigate  } from "react-router-dom"


function BlogList({ blogs, title, user }) {
  console.log("Data in BlogList:", blogs);
  if(blogs && blogs.length>0)
  console.log("type of id", typeof(blogs[0]._id));
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.length===0 || blogs.map(blog => (
        <div className='blog-preview' key={blog._id}>
          <Link to={`/${user}/${blog._id}/detail`}><h3>{blog.title}</h3></Link>
          
        </div>
      ))}
    </div>
  );
}

export default BlogList;