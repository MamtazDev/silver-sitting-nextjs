import React, { useState } from "react";
import styles from "@/styles/Register.module.css";
import parents from "../public/assets/icons/register-parent.png";
import grandma from "../public/assets/icons/register-grandma.png";
import child from "../public/assets/images/register-child.png";
import light from "../public/assets/icons/register-light.png";
import Meta from "@/components/Shared/Meta";

const Register = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      <Meta>Register</Meta>
      <section className={`container mx-auto ${styles.signInMainContainer}`}>
        <div className={styles.emptyContainer}></div>
        <div className={styles.mainRegisterContainer}>
          {/* 1st section */}
          {step === 1 && (
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
                <button className={`btn`} onClick={() => setStep(2)}>
                  Next
                </button>
              </div>
            </div>
          )}

          {/* 2nd section */}
          {step === 2 && (
            <form>
              <h3>Register</h3>
              {/* 1st row */}
              <div className={styles.twoInputContainer}>
                <div className="w-50">
                  <label>
                    First Name <span>*</span>
                  </label>
                  <input type="text" name="" value="" className="w-100" />
                </div>
                <div className="w-50">
                  <label>
                    Last Name <span>*</span>
                  </label>
                  <input type="text" name="" value="" className="w-100" />
                </div>
              </div>
              {/* 2nd row */}
              <div>
                <label>
                  Email address <span>*</span>
                </label>
                <input type="email" name="" value="" className="w-100" />
              </div>
              {/* 3rd row */}
              <div className={styles.twoInputContainer}>
                <div className="w-50">
                  <label>
                    Post Code <span>*</span>
                  </label>
                  <input type="number" className="w-100" />
                </div>
                <div className="w-50">
                  <label>
                    Residence <span>*</span>
                  </label>
                  <input type="text" className="w-100" />
                </div>
              </div>
              {/* 4th row */}
              <div>
                <label>Street/House number</label>
                <input type="text" className="w-100" />
              </div>
              {/* 5th row */}
              <div className={styles.twoInputContainer}>
                <div className="w-50">
                  <label>
                    Password <span>*</span>
                  </label>
                  <input type="password" name="" value="" className="w-100" />
                </div>
                <div className="w-50">
                  <label>
                    Re-enter Password <span>*</span>
                  </label>
                  <input type="password" name="" value="" className="w-100" />
                </div>
              </div>

              <div className={styles.checkboxContainer}>
                <div className={styles.checkboxs}>
                  <input type="checkbox" />
                  <label>
                    I have read the SilverSitting <p>terms and conditions</p>{" "}
                    and agree to them.
                  </label>
                </div>
                <div className={styles.checkboxs}>
                  <input type="checkbox" />
                  <label>
                    I have read SilverSitting's <p>privacy policy</p> and agree
                    to it
                  </label>
                </div>
              </div>
              <div className={`text-center ${styles.loginButtonContainer}`}>
                <button className={`btn`}>Register</button>
              </div>
              <div className={styles.quoteText}>
                If you need assistance with registration then contact us at
                <a href="mailto:info@silversitting.com">
                  info@silversitting.com
                </a>{" "}
                . We're happy to help!
              </div>

              <div className={styles.lightImage}>
                <img src={light.src} alt="" />
              </div>
            </form>
          )}
        </div>
        <div
          className={step === 1 ? styles.emptyContainer : styles.imageContainer}
        >
          {step === 2 && <img src={child.src} alt="" />}
        </div>
      </section>
    </>
  );
};

export default Register;
