import React from "react";
import quote from "../../../public/assets/images/child-care-message.png";
import styles from "@/styles/ChildCareMessage.module.css";

const ChaldCareMessage = () => {
  return (
    <section
      className={`container mx-auto ${styles.chilCareMessageMainContainer}`}
    >
      <div className={styles.imageContainer}>
        <img src={quote.src} alt="" />
      </div>
      <div className={styles.mainContainer}>
        <div>
          <textarea
            className={styles.textareaInput}
            placeholder="Type a message to daniel..."
          />
          <div className={styles.buttonContainer}>
            <button className="_button">Send Message</button>
          </div>
        </div>
      </div>
      <div className={styles.emptyContainer}></div>
    </section>
  );
};

export default ChaldCareMessage;
