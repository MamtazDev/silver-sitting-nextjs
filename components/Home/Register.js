import React from "react";
import styles from "@/styles/HomeRegister.module.css";
import childcare from "../../public/assets/icons/register-childcare.png";
import parent from "../../public/assets/icons/register-parent.png";
import arrow from "../../public/assets/icons/arrow-white.png";
import Link from "next/link";

const Register = () => {
  const registerType = [
    {
      pic: childcare,
      text: "Register as a childcare worker",
    },
    {
      pic: parent,
      text: "Register as a parent",
    },
  ];
  return (
    <div className={styles.register}>
      <div className="container">
        <div className={`${styles.parent} row justify-content-center `}>
          {registerType.map((register, index) => (
            <div key={index} className={`${styles.child} col-12 col-md-6 `}>
              <img
                style={{ marginBottom: "20px" }}
                src={register.pic.src}
                alt=""
              />
              <p>{register.text}</p>
              <Link href="">
                <button>
                  Register now{" "}
                  <img style={{ marginLeft: "8px" }} src={arrow.src} alt="" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Register;
