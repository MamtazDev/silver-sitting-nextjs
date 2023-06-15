import BlogTab from "@/components/Blog/BlogTab";
import ChancellorSpeech from "@/components/BlogDetails/ChancellorSpeech";
import Comments from "@/components/BlogDetails/Comments";
import CurrentPosts from "@/components/BlogDetails/CurrentPosts";
import PocketGuide from "@/components/BlogDetails/PocketGuide";
import SocialMedia from "@/components/BlogDetails/SocialMedia";
import Study from "@/components/BlogDetails/Study";
import TypesTabs from "@/components/BlogDetails/TypesTabs";
import React from "react";

const Blogs = () => {
  return (
    <section>
      {/* <BlogTab /> */}
      <ChancellorSpeech/>
      <PocketGuide/>
      <Study/>
      <TypesTabs/>
      <SocialMedia />
      <CurrentPosts />
      <Comments />
    </section>
  );
};

export default Blogs;
