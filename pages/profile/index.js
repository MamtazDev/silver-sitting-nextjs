import ProfilePageParents from "@/components/Profile/profile/ProfilePageParents";
import ProfilePageSenior from "@/components/Profile/profile/ProfilePageSenior";
import ProfileLayout from "@/layouts/Profile";
import React from "react";

const MainProfile = () => {
  return (
    <section>
      {/* <ProfilePageSenior /> */}
      <ProfilePageParents />
    </section>
  );
};

MainProfile.PageLayout = ProfileLayout;

export default MainProfile;
