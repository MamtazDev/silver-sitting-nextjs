import React from "react";
import quote from "../../../public/assets/images/child-care-message.png";
import styles from "@/styles/ChildCareMessage.module.css";
import chatProfile from "../../../public/assets/chat-profile.png";

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
          <div
            style={{ marginBottom: "30px" }}
            className="d-flex gap-1 align-items-center"
          >
            <img src={chatProfile.src} alt="" />
            <div className="d-flex w-100">
              <div className={styles.answer_box}>
                <div></div>
              </div>
              <div className={styles.answer}>
                <h6>
                  Hi how are you? Can you take care of my 2 year old daughter?
                </h6>
                <p>20 days ago.</p>
              </div>
            </div>
          </div>

          <div
            style={{ marginBottom: "30px" }}
            className="d-flex gap-1 align-items-center"
          >
            <div className="d-flex w-100">
              <div className={styles.question}>
                <h6>
                  Hi how are you? Can you take care of my 2 year old daughter?
                </h6>
                <p>20 days ago.</p>
              </div>
              <div className={styles.question_box}>
                <div></div>
              </div>
            </div>
          </div>

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
