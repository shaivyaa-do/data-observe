import React from "react";
import "./allBlogs.css";




const AllBlogsModalContent = ({ closeModal, BlogJson }) => {
  return (
    <>
     
      <div className="blog-child-container">
        <h3>Blogs</h3>
        <span onClick={closeModal}>&#x2715;</span>
      </div>
      <hr />
      <div className="blog-child-content">
        {BlogJson?.map((ele) => {
          return (
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={ele?.children?.[0]?.src}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p>
                  {ele?.title} <a href={`blog/${ele.id}`}>Read more</a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllBlogsModalContent;
