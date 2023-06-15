import BlogTab from "@/components/Blog/BlogTab";
import Comments from "@/components/BlogDetails/Comments";
import CurrentPosts from "@/components/BlogDetails/CurrentPosts";
import SocialMedia from "@/components/BlogDetails/SocialMedia";
import TypesTabs from "@/components/BlogDetails/TypesTabs";
import React from "react";

const Blogs = () => {
  return (
    <section>
      {/* <BlogTab /> */}
      <TypesTabs/>
      <SocialMedia />
      <CurrentPosts />
      <Comments />
    </section>
  );
};

export default Blogs;
