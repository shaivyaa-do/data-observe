import React, { useEffect, useState } from "react";
import Navbar from "../products/Navbar";
import "./BlogRedirect.css";
import Footer from "../products/Footer";
import BlogJson from "../Insights/insightsJsons/blogs.json";
import { useParams } from "react-router-dom";

const BlogsRedirect = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();

  const applyStyle = (style) => {
    switch (style) {
      case "bold":
        return { fontWeight: "bold" };
      case "italic":
        return { fontStyle: "italic" };
      default:
        return {};
    }
  };

  const RenderArtictle = ({ blog }) => {
    return blog?.children?.map((item, index) => {
      switch (item.type) {
        case "heading":
          return (
            <h3 className="mt-3 blogheading2" id={item?.id} key={index}>
              {item.content}
            </h3>
          );
        case "paragraph":
          return (
            <p
              className="mt-3 blogpara2"
              style={applyStyle(item?.style)}
              key={index}
            >
              {item.content}
            </p>
          );
        case "list":
          return (
            <ul className="mt-3">
              {item?.items?.map((item, index) => (
                <li className="mt-1 blogpara2" key={index}>
                  {item?.heading ? (
                    <>
                      <strong style={{ fontWeight: 700 }}>
                        {item?.heading}:{" "}
                      </strong>
                      <span>{item?.content}</span>
                    </>
                  ) : (
                    item
                  )}{" "}
                </li>
              ))}
            </ul>
          );
        case "image":
          return (
            <div key={index} className="mt-3">
              <img src={item.src} alt={item.caption} width="100%" />
            </div>
          );
        default:
          return null;
      }
    });
  };

  const [tableContent, setTableContent] = useState();

  useEffect(() => {
    const findBlog = BlogJson?.find((blog) => blog?.id === Number(id));
    setBlog(findBlog);
    const tempChild = findBlog.children.filter(
      (item) => item?.tableHeader === true
    );
    setTableContent(tempChild);
  }, [id]);

  return (
    <div>
      <Navbar />

      <section>
        <div className="container">
          <a href="/allinsights">
            <button className="previousButton">Back</button>
          </a>
        </div>
      </section>
      <section className="blogsheader">
        <div className="container blogmatter">
          <h3 className="blogtitle1">Blogs</h3>
          <h1 className="blogtitle2 col-md-10">{blog?.title}</h1>
          <button className="domainbuttonclass">{blog?.domain}</button>
        </div>
      </section>
      <section>
        <div className="doteamclass container mt-3 mb-3">
          <div className="doteamframe"></div>
          <h5 className="doteamtext">Do Team</h5>
        </div>
        <div className="container">
          <div className="row">
            {/* Left side - Scrollable Article */}
            <div className="col-md-8 d-flex flex-column article">
              <div className="flex-grow-1 overflow-auto">
                <RenderArtictle blog={blog} />
              </div>
            </div>

            {/* Right side - Fixed Table of Contents */}
            <div className="col-md-4">
              <div style={{ position: "sticky", top: "5%" }}>
                <div className="tableclass container">
                  <h1 className="blogtableheading text-center">
                    Table of Content
                  </h1>
                  {tableContent?.map((tableItem) => {
                    return (
                      <div className="pt-2 pb-2 blogtableparadiv">
                        <a href={`#${tableItem?.id}`} className="blogtablepara">
                          <span className="tablebullet text-center">
                            <i
                              class="fa fa-angle-double-right"
                              aria-hidden="true"
                            ></i>{" "}
                          </span>
                          {tableItem?.content}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {blog?.tags?.length && (
            <div className="align-items-center col-md-8 d-flex justify-content-center mt-5 mb-5">
              {blog?.tags?.map((tag) => {
                return (
                  <div className="mr-5 bloglinkhead tag-content">{tag}</div>
                );
              })}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogsRedirect;
