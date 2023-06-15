import Meta from "@/components/Shared/Meta";
import React from "react";
import styles from "@/styles/Feedback.module.css";
import child from "../public/assets/images/feedbackChild.png";
import love from "../public/assets/icons/love.png";

const Feedback = () => {
  return (
    <>
      <Meta>Feedback</Meta>
      <section className={`container mx-auto ${styles.feedbackMainContainer}`}>
        <div className={styles.emptyContainer}></div>
        <div className={styles.formContainer}>
          <form>
            <h2>We would like to know what you think</h2>
            <div className={styles.inputContainer}>
              <div>
                <label>First Name</label>
                <input type="text" />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" />
              </div>
              <div>
                <label>Email</label>
                <input type="text" />
              </div>
              <div>
                <label>Phone</label>
                <input type="text" />
              </div>
            </div>

            <div className={styles.ratingContainer}>
              <div>
                <h6>Rate us</h6>
                <div>
                  <img src={love.src} alt="" />
                  <img src={love.src} alt="" />
                  <img src={love.src} alt="" />
                  <img src={love.src} alt="" />
                  <img src={love.src} alt="" />
                </div>
              </div>
            </div>

            <textarea placeholder="What could we improve?" />
            <div className={styles.buttonContainer}>
              <button className="btn">Send Feedback</button>
            </div>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <img src={child.src} alt="" />
        </div>
      </section>
    </>
  );
};

export default Feedback;
