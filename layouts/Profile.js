import SideBar from "@/components/Profile/SideBar";
import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <section className="container">
      <div className="d-flex gap-5">
        <SideBar />
        {children}
      </div>
    </section>
  );
};

export default ProfileLayout;
