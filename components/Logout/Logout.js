import React from "react";
import styles from "@/styles/Logout.module.css";
import logout from "../../public/assets/images/logout.png";

const Logout = () => {
  return (
    <div className="container">
      <div className={styles.logout}>
        <div className="text-center">
          <img className=" img-fluid" src={logout.src} alt="" />
          <h4>Are you sure you want to Log Out?</h4>
          <div
            style={{ gap: "35px" }}
            className="d-flex justify-content-center"
          >
            <button className={styles.yes_btn}>Yes</button>
            <button className={styles.no_btn}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
