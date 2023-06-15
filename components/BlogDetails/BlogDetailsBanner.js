import React from "react";
import styles from "@/styles/Blog.module.css";
import banner from "../../public/assets/blog-details.png";

const BlogDetailsBanner = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6"><img src={banner} alt=""/></div>
          <div className="col-12 col-lg-6"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsBanner;
