import React, { useState } from "react";
import styles from "@/styles/ChildCare.module.css";
import children from "../public/assets/images/child-photo.png";
import qoute from "../public/assets/images/qoute.png";

const ChildCare = () => {
  const [lookfor, setLookfor] = useState("");
  return (
    <section className={`container mx-auto ${styles.mainContainer}`}>
      {/* banner */}
      <div className={styles.childCareBanner}>
        <h3>Find childcare for your child here</h3>
      </div>

      {/* chilcare form */}

      <div className={styles.contentContainer}>
        <div className={styles.emptyContainer}></div>
        <div className={styles.formContainer}>
          <form>
            <h6>I'm looking for</h6>
            <div className={`d-flex ${styles.grannySelction}`}>
              <div onClick={() => setLookfor("granny")}>
                <input
                  id="granny"
                  type="checkbox"
                  name="lookFor"
                  value="gg"
                  checked={lookfor === "granny"}
                  className={`me-2 ${styles.colorCheckBox}`}
                />
                <label htmlFor="granny">Granny</label>
              </div>
              <div onClick={() => setLookfor("grandpa")}>
                <input
                  id="grandpa"
                  type="checkbox"
                  name="lookFor"
                  value="bb"
                  checked={lookfor === "grandpa"}
                  className={`me-2 ${styles.colorCheckBox}`}
                />
                <label htmlFor="grandpa">Grandpa</label>
              </div>
            </div>

            <div className={styles.inputContainer}>
              <label>Near</label>
              <input type="text" className="w-100" />

              <div className={styles.distance}>
                <p>
                  Up to max. <input type="text" className="mx-3" /> km distance
                </p>
              </div>
            </div>

            <div className={styles.typesContainer}>
              <h6 className="text-start">I need the following types of care</h6>
              <div className={styles.typesCheckboxs}>
                <div className={styles.box1}>
                  <div>
                    <input type="checkbox" />
                    <label>Classic child sitting (child age &gt; 1y.)</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Classic child sitting (child age &gt; 4y.)</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Homework supervision 1. - 4. class</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Homework supervision 5. - 7. class</label>
                  </div>
                </div>
                <div className={styles.box1}>
                  <div>
                    <input type="checkbox" />
                    <label>Cook and bake</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Pick up and delivery services</label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <img src={children.src} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ChildCare;
