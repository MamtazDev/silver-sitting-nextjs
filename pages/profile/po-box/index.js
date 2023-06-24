import PoBox from "@/components/Pobox/PoBox";
import ProfileLayout from "@/layouts/Profile";
import React from "react";
import styles from "@/styles/Pobox.module.css";

const POBOX = () => {
  return (
    <div className="w-100">
      <PoBox />
    </div>
  );
};

POBOX.PageLayout = ProfileLayout;

export default POBOX;
