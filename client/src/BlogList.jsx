import React from 'react';

function BlogList({ blogs, title, user }) {
  console.log("Data in BlogList:", blogs);
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          {/* <p>{blog.body}</p> */}
        </div>
      ))}
    </div>
  );
}

export default BlogList;