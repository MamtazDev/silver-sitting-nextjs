import Meta from "@/components/Shared/Meta";
import React, { useState } from "react";
import styles from "@/styles/Feedback.module.css";
import child from "../public/assets/images/feedbackChild.png";
import love from "../public/assets/icons/love.png";
import filledLove from "../public/assets/icons/filledLove.png";

const Feedback = () => {
  const [feedback, setFeedback] = useState(0);
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
                  {feedback >= 1 ? (
                    <img
                      src={filledLove.src}
                      alt=""
                      onClick={() => setFeedback(1)}
                    />
                  ) : (
                    <img src={love.src} alt="" onClick={() => setFeedback(1)} />
                  )}
                  {feedback >= 2 ? (
                    <img
                      src={filledLove.src}
                      alt=""
                      onClick={() => setFeedback(2)}
                    />
                  ) : (
                    <img src={love.src} alt="" onClick={() => setFeedback(2)} />
                  )}
                  {feedback >= 3 ? (
                    <img
                      src={filledLove.src}
                      alt=""
                      onClick={() => setFeedback(3)}
                    />
                  ) : (
                    <img src={love.src} alt="" onClick={() => setFeedback(3)} />
                  )}
                  {feedback >= 4 ? (
                    <img
                      src={filledLove.src}
                      alt=""
                      onClick={() => setFeedback(4)}
                    />
                  ) : (
                    <img src={love.src} alt="" onClick={() => setFeedback(4)} />
                  )}
                  {feedback === 5 ? (
                    <img
                      src={filledLove.src}
                      alt=""
                      onClick={() => setFeedback(5)}
                    />
                  ) : (
                    <img src={love.src} alt="" onClick={() => setFeedback(5)} />
                  )}
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
