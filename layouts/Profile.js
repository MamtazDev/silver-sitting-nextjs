import SideBar from "@/components/Profile/SideBar";
import React from "react";
import styles from "@/styles/Sidebar.module.css";

const ProfileLayout = ({ children }) => {
  return (
    <section className="container">
      <div className={styles.grid__box}>
        <SideBar />
        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
};

export default ProfileLayout;
 