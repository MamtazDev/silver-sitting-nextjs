import React from "react";
import styles from "@/styles/Contact.module.css";

const contact = () => {
  return (
    <>
      <section className={`container mx-auto ${styles.contactMainContainer}`}>
        <div className={styles.emptyContainer}></div>
        <div className={styles.formContainer}>
          <form>
            <h2>Contact</h2>
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
                <input type="email" />
              </div>
              <div>
                <label>Phone</label>
                <input type="phone" />
              </div>
            </div>

            <textarea placeholder="Write a message...." />
            <div className="text-center">
              <button className="_button">Submit</button>
            </div>
          </form>
        </div>
        <div className={styles.emptyContainer}></div>
      </section>
    </>
  );
};

export default contact;
