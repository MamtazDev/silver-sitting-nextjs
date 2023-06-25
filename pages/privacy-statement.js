import Banner from "@/components/PrivacyPolicy/Banner";
import General from "@/components/PrivacyPolicy/General";
import Purpose from "@/components/PrivacyPolicy/Purpose";
import React from "react";

const privacyStatement = () => {
  return (
    <div>
      <Banner />
      <General />
      <Purpose/>
    </div>
  );
};

export default privacyStatement;
