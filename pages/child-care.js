import React, { useState } from "react";
import styles from "@/styles/ChildCare.module.css";
import children from "../public/assets/images/child-photo.png";
import children1 from "../public/assets/images/child-login.png";
import qoute from "../public/assets/images/qoute.png";
import SearchResult from "@/components/ChildCare/SearchResult";
import Meta from "@/components/Shared/Meta";
import Link from "next/link";

const ChildCare = () => {
  const [lookfor, setLookfor] = useState("");
  const [step, setStep] = useState(0);

  const handleSerchFormSubmit = (e) => {
    e.preventDefault();
    // setStep((prev) => prev + 1);
    setStep(2);
  };

  return (
    <>
      <Meta>ChildCare</Meta>
      <section className={`container mx-auto ${styles.mainContainer}`}>
        {/* banner */}
        <div className={styles.childCareBanner}>
          {step === 0 && <h3>Find childcare for your child here</h3>}
          {step === 1 && <h3>Search Result</h3>}
          {step === 3 && <h3>Find childcare for your child here</h3>}
        </div>

        {/* chilcare form */}

        {step === 0 && (
          <div className={styles.contentContainer}>
            <div className={styles.emptyContainer}></div>
            <div className={styles.formContainer}>
              <form onSubmit={handleSerchFormSubmit}>
                <h6>I'm looking for</h6>
                <div className={`d-flex ${styles.grannySelction}`}>
                  <div
                    onClick={() => setLookfor("granny")}
                    className={styles.checkBoxContainer}
                  >
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
                  <div
                    onClick={() => setLookfor("grandpa")}
                    className={styles.checkBoxContainer}
                  >
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
                      Up to max.{" "}
                      <input
                        type="text"
                        className="mx-3 text-center"
                        placeholder="30"
                      />{" "}
                      km distance
                    </p>
                  </div>
                </div>

                <h5>
                  The search is limited to a radius of 30 km and has been reset
                  automatically.
                </h5>
                <h5 style={{ marginBottom: "34px" }}>
                  {" "}
                  We ask for your understanding.
                </h5>

                <div className={styles.typesContainer}>
                  <h6 className="text-start">
                    I need the following types of care
                  </h6>
                  <div className={styles.typesCheckboxs}>
                    <div className={styles.box1}>
                      <div className={styles.checkBoxContainer}>
                        <input type="checkbox" />
                        <label>
                          Classic child sitting (child age &gt; 1y.)
                        </label>
                      </div>
                      <div className={styles.checkBoxContainer}>
                        <input type="checkbox" />
                        <label>
                          Classic child sitting (child age &gt; 4y.)
                        </label>
                      </div>
                      <div className={styles.checkBoxContainer}>
                        <input type="checkbox" />
                        <label>Homework supervision 1. - 4. class</label>
                      </div>
                      <div className={styles.checkBoxContainer}>
                        <input type="checkbox" />
                        <label>Homework supervision 5. - 7. class</label>
                      </div>
                    </div>
                    <div className={styles.box1}>
                      <div className={styles.checkBoxContainer}>
                        <input type="checkbox" />
                        <label>Cook and bake</label>
                      </div>
                      <div className={styles.checkBoxContainer}>
                        <input type="checkbox" />
                        <label>Pick up and delivery services</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className={`btn ${styles.formButton}`} type="submit">
                    Start Search
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.imageContainer}>
              <img src={children.src} alt="" />
            </div>
          </div>
        )}

        {/* search result */}

        {step === 1 && <SearchResult />}

        {step === 2 && (
          <div className={styles.contentContainer}>
            <div className={styles.emptyContainer}></div>
            <div className={styles.formContainer}>
              <form>
                <p className="pt-5">
                  Unfortunately, no matching grandmas or grandpas were found for
                  your <br /> search criteria more presents.
                </p>
                <h6>Tip</h6>

                <p className="pb-5">
                  Increase the area or <Link href="!#">click here</Link> to be
                  notified as soon as a childcare <br /> worker registers with
                  your criteria
                </p>

                <div className="text-center">
                  <button
                    onClick={() => setStep(0)}
                    className={`btn ${styles.formButton}`}
                    type="submit"
                  >
                    Search Again
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.imageContainer}>
              <img src={children1.src} alt="" />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ChildCare;
