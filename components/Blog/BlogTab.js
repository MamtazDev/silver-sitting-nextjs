import React, { useState } from "react";
import styles from "@/styles/Blog.module.css";
import Blog from "./Blog";

const BlogTab = () => {
  const [active, setActive] = useState(1);
  const blogTab = [
    {
      name: "All posts",
    },
    {
      name: "Health & Wellbeing",
    },
    {
      name: "Psychology",
    },
    {
      name: "Upbringing",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className={styles.blog_tab}>
          {blogTab.map((tab, index) => (
            <button
              className={
                active === index + 1 ? styles.active : styles.deactivate
              }
              onClick={() => setActive(index + 1)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {active === 1 && <Blog />}
      {active === 2 && <Blog />}
      {active === 3 && <Blog />}
      {active === 4 && <Blog />}
    </div>
  );
};

export default BlogTab;
