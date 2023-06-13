import React from "react";
import styles from "@/styles/About.module.css";
import about from "../../public/assets/icons/about.png";
import news from "../../public/assets/icons/news.png";
import security from "../../public/assets/icons/security.png";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.about_us}>
      <div className="container">
        <div
          style={{ gap: "29px" }}
          className="row justify-content-center gy-5"
        >
          <div className={`${styles.about} col-12 col-md-6 col-lg-4`}>
            <div className={styles.icon}>
              <img src={about.src} alt="" />
            </div>
            <div>
              <h6>About Us</h6>
              <p>
                Find out where the idea for Silver Sitting came from and what
                drives us.
              </p>
            </div>
            <Link href="">
              Learn more about the idea and the <br /> founders of SilverSitting
            </Link>
          </div>
          <div className={`${styles.news} col-12 col-md-6 col-lg-4`}>
            {" "}
            <div className={styles.icon}>
              <img src={news.src} alt="" />
            </div>
            <div>
              <h6>News</h6>
              <p>Check out our childcare news and articles</p>
            </div>
            <Link href="">To the news</Link>
          </div>
          <div className={`${styles.security} col-12 col-md-6 col-lg-4`}>
            {" "}
            <div className={styles.icon}>
              <img src={security.src} alt="" />
            </div>
            <div>
              <h6>Security</h6>
              <p>Your safety is important to us!</p>
            </div>
            <Link href="">Take care of children safely</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
