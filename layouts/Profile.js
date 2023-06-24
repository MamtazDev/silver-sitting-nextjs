import SideBar from "@/components/Profile/SideBar";
import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <section className="container">
      <SideBar />
      {children}
    </section>
  );
};

export default ProfileLayout;
 