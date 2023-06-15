import BlogDetailsBanner from "@/components/BlogDetails/BlogDetailsBanner";
import ChancellorSpeech from "@/components/BlogDetails/ChancellorSpeech";
import Comments from "@/components/BlogDetails/Comments";
import CurrentPosts from "@/components/BlogDetails/CurrentPosts";
import PocketGuide from "@/components/BlogDetails/PocketGuide";
import SocialMedia from "@/components/BlogDetails/SocialMedia";
import Study from "@/components/BlogDetails/Study";
import TypesTabs from "@/components/BlogDetails/TypesTabs";
import { useRouter } from "next/router";
import React from "react";

const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <section>
      <BlogDetailsBanner />
      <ChancellorSpeech />
      <PocketGuide />
      <Study />
      <TypesTabs />
      <SocialMedia />
      <CurrentPosts />
      <Comments />
    </section>
  );
};

export default BlogDetails;
