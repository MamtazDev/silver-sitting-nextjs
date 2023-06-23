import React from "react";
import styles from "@/styles/Register.module.css";
import sms from "../public/assets/success-sms.png";
import Link from "next/link";

const SuccessSms = () => {
  return (
    <div className="container">
      <div className={styles.success}>
        <img src={sms.src} alt="" />
        <h6>Nice that you have registered with SilverSitting!</h6>
        <p>
          To complete your registration, please click on the link in the email
          we just sent you.
        </p>
        <p>
          <span>For information :</span> a <Link href="!#">link</Link> can be a word with a blue
          background that can be clicked on.
        </p>
      </div>
    </div>
  );
};

export default SuccessSms;
