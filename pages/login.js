import React from "react";
import styles from "@/styles/Login.module.css";
import children from "../public/assets/images/child-login.png";
import Link from "next/link";
import Meta from "@/components/Shared/Meta";

const Login = () => {
  return (
    <>
      <Meta>Login</Meta>
      <section className={`container mx-auto ${styles.loginMainContainer}`}>
        <div className={styles.emptyContainer}></div>
        <div className={styles.loginFormContainer}>
          <form>
            <h2>Log In</h2>
            <div className={`${styles.inputContainer} ${styles.emailInput}`}>
              <label>
                Email address <span>*</span>
              </label>
              <input type="email" name="email" required className="w-100" />
            </div>
            <div className={styles.inputContainer}>
              <label>
                Password <span>*</span>
              </label>
              <input
                type="password"
                name="password"
                required
                className="w-100"
              />
            </div>
            <div
              className={`d-flex align-items-center mt-2 ${styles.policy} justify-content-between`}
            >
              <div className="d-flex align-items-center gap-2">
                <input type="checkbox" name="" />
                <label className={styles.policyLabel}>
                  I have read the{" "}
                  <p className="m-0 p-0 d-inline">Privacy Policy</p> and agree
                  to it. <span>*</span>
                </label>
              </div>
              <p>Forgot Password?</p>
            </div>
            <div className="text-center">
              <button className={`btn ${styles.loginButton}`}>Log In</button>
            </div>
          </form>
          <div className={styles.formFooter}>
            New Here? Click here to{" "}
            <Link href="/register">
              <span>Register</span>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={children.src} alt="" />
        </div>
      </section>
    </>
  );
};

export default Login;
