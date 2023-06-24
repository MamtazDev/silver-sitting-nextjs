import React from "react";
import styles from "@/styles/Sidebar.module.css";
import pobox from "../../public/assets/icons/pobox.png";
import profile from "../../public/assets/icons/profile.png";
import settings from "../../public/assets/icons/settings.png";
import password from "../../public/assets/icons/changepassword.png";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles.active}>
          <Link href="/profile/po-box">
            <img src={pobox.src} alt="" /> P.O. Box
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/profile">
            <img src={profile.src} alt="" /> Profile
          </Link>
        </li>
        <li className={styles.active}>
          {" "}
          <Link href="!#">
            <img src={settings.src} alt="" /> Settings
          </Link>
        </li>
        <li>
          {" "}
          <Link href="!#">
            <img src={password.src} alt="" /> Change password
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
