import React from "react";
import styles from "@/styles/Register.module.css";

const Register = () => {
  return (
    <section className={`container mx-auto ${styles.signInMainContainer}`}>
      <div className={styles.emptyContainer}></div>
      <div className={styles.mainRegisterContainer}>
        <form>
          <h3>Register</h3>
          <h6>I am...</h6>

          {/* choose person */}
          <div>
            <div>
              <div>
                <img src="" alt="" />
                <p>Grandma</p>
              </div>
              <input type="" name="" value="" />
            </div>
            <div>
              <div>
                <img src="" alt="" />
                <p>Parents</p>
              </div>
              <input type="" name="" value="" />
            </div>
          </div>
        </form>
      </div>
      <div className={styles.emptyContainer}></div>
    </section>
  );
};

export default Register;
