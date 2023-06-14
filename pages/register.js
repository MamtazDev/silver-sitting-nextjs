import React from "react";
import styles from "@/styles/Register.module.css";
import parents from "../public/assets/icons/register-parent.png";
import grandma from "../public/assets/icons/register-grandma.png";

const Register = () => {
  return (
    <section className={`container mx-auto ${styles.signInMainContainer}`}>
      <div className={styles.emptyContainer}></div>
      <div className={styles.mainRegisterContainer}>
        <div className={styles.register1stSection}>
          <h3>Register</h3>
          <h6>I am...</h6>

          {/* choose person */}
          <div className={styles.choosePersonContainer}>
            <div>
              <label className={styles.person} htmlFor="grandma">
                <img src={grandma.src} alt="" />
                <p>Grandma</p>
              </label>
              <input type="radio" name="person" value="" id="grandma" />
            </div>
            <div>
              <label className={styles.person} htmlFor="parents">
                <img src={parents.src} alt="" />
                <p>Parents</p>
              </label>
              <input type="radio" name="person" value="" id="parents" />
            </div>
          </div>
          <div className={styles.loginButtonContainer}>
            <button className={`btn`}>Next</button>
          </div>
        </div>
      </div>
      <div className={styles.emptyContainer}></div>
    </section>
  );
};

export default Register;
