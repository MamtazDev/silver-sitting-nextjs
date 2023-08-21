import React, { useEffect, useState } from "react";
import styles from "@/styles/ChildCare.module.css";
import children from "../../public/assets/images/child-photo.png";
import children1 from "../../public/assets/images/child-login.png";

import SearchResult from "@/components/ChildCare/SearchResult";
import Meta from "@/components/Shared/Meta";
import Link from "next/link";
import ChildCareSeachError from "@/utils/modals/ChildCareSeachError";
import { useGetSearchedChildCarerMutation } from "@/features/childCareSearch/childCareSearchApi";
import { useDispatch } from "react-redux";
import { setChildCarerFilterData } from "@/features/childCareSearch/childCareSearchSlice";

const ChildCare = () => {
  const [lookfor, setLookfor] = useState();
  const [warning, setWarning] = useState(false);
  const [step, setStep] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  const [offers, setOffers] = useState([]);

  const dispatch = useDispatch();

  const [getSearchedChildCarer, { isLoading, isSuccess, isError }] =
    useGetSearchedChildCarerMutation();

  const handleOfferProvideValue = (value) => {
    if (offers.includes(value)) {
      const filter = offers.filter((i) => i !== value);
      setOffers(filter);
    } else {
      setOffers([...offers, value]);
    }
  };

  const handleSerchFormSubmit = (e) => {
    e.preventDefault();
    // setStep((prev) => prev + 1);
    // setStep("error");
    const form = e.target;

    const filterCriteria = {};
    const gender = lookfor;
    const distance = form.distance.value;
    console.log(distance);

    if (gender) {
      filterCriteria.gender = gender;
    }
    if (distance) {
      filterCriteria.distance = Number(distance);
    }

    const data = {
      offerProvide: offers,
    };

    getSearchedChildCarer({ filterCriteria, data }).then((res) => {
      if (res?.data) {
        dispatch(setChildCarerFilterData(res.data));
        setStep((prev) => prev + 1);
      }
      if (res?.error) {
        setStep("error");
      }
    });

    // console.log(filterCriteria);

    // console.log(data, "fdd");
  };

  const handleChange = (e) => {
    const distance = e.target.value;
    if (distance > 30) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  return (
    <>
      <Meta>ChildCare</Meta>
      <section className={`container mx-auto ${styles.mainContainer}`}>
        {/* banner */}
        <div className={styles.childCareBanner}>
          {step === 0 && <h3>Find childcare for your child here</h3>}
          {step === 1 && <h3>Search Result</h3>}
          {step === "error" && <h3>Find childcare for your child here</h3>}
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
                    onClick={() => setLookfor("Female")}
                    className={styles.checkBoxContainer}
                  >
                    <input
                      id="granny"
                      type="checkbox"
                      name="lookFor"
                      value="gg"
                      checked={lookfor === "Female"}
                      className={`me-2 ${styles.colorCheckBox}`}
                    />
                    <label htmlFor="granny">Granny</label>
                  </div>
                  <div
                    onClick={() => setLookfor("Male")}
                    className={styles.checkBoxContainer}
                  >
                    <input
                      id="grandpa"
                      type="checkbox"
                      name="lookFor"
                      value="bb"
                      checked={lookfor === "Male"}
                      className={`me-2 ${styles.colorCheckBox}`}
                    />
                    <label htmlFor="grandpa">Grandpa</label>
                  </div>
                </div>

                <div className={styles.inputContainer}>
                  <label>Near</label>
                  <input
                    type="number"
                    className="w-100"
                    name="distance"
                    onChange={(e) => handleChange(e)}
                  />

                  <div className={styles.distance}>
                    <p>
                      Up to max.{" "}
                      <input
                        type="text"
                        // name="distance"

                        className="mx-3 text-center"
                        placeholder="30"
                      />{" "}
                      km distance
                    </p>
                  </div>
                </div>
                {warning && (
                  <>
                    <h5>
                      The search is limited to a radius of 30 km and has been
                      reset automatically.
                    </h5>
                    <h5 style={{ marginBottom: "34px" }}>
                      {" "}
                      We ask for your understanding.
                    </h5>
                  </>
                )}

                <div className={styles.typesContainer}>
                  <h6 className="text-start">
                    I need the following types of care
                  </h6>
                  <div className={styles.typesCheckboxs}>
                    <div className={styles.box1}>
                      <div className={styles.checkBoxContainer}>
                        <input
                          type="checkbox"
                          value="Classic babysitting for children from 1 year"
                          onChange={(e) =>
                            handleOfferProvideValue(e.target.value)
                          }
                        />
                        <label>
                          Classic child sitting (child age &gt; 1y.)
                        </label>
                      </div>
                      <div className={styles.checkBoxContainer}>
                        <input
                          type="checkbox"
                          value="Child care for children from 4 years"
                          onChange={(e) =>
                            handleOfferProvideValue(e.target.value)
                          }
                        />
                        <label>
                          Classic child sitting (child age &gt; 4y.)
                        </label>
                      </div>
                      <div className={styles.checkBoxContainer}>
                        <input
                          type="checkbox"
                          value="Homework help classes 1 - 4"
                          onChange={(e) =>
                            handleOfferProvideValue(e.target.value)
                          }
                        />
                        <label>Homework supervision 1. - 4. class</label>
                      </div>
                      <div className={styles.checkBoxContainer}>
                        <input
                          type="checkbox"
                          value="Homework help classes 5 - 7"
                          onChange={(e) =>
                            handleOfferProvideValue(e.target.value)
                          }
                        />
                        <label>Homework supervision 5. - 7. class</label>
                      </div>
                    </div>
                    <div className={styles.box1}>
                      <div className={styles.checkBoxContainer}>
                        <input
                          type="checkbox"
                          value="Baking/cooking (for the child and with the child)"
                          onChange={(e) =>
                            handleOfferProvideValue(e.target.value)
                          }
                        />
                        <label>Cook and bake</label>
                      </div>
                      <div className={styles.checkBoxContainer}>
                        <input
                          type="checkbox"
                          value="Pick-up and delivery services"
                          onChange={(e) =>
                            handleOfferProvideValue(e.target.value)
                          }
                        />
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

        {step === 1 && <SearchResult setStep={setStep} />}

        {step === "error" && (
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
                  Increase the area or{" "}
                  <Link href="#" onClick={() => setModalShow(true)}>
                    click here
                  </Link>{" "}
                  to be notified as soon as a childcare <br /> worker registers
                  with your criteria
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

        <ChildCareSeachError
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </section>
    </>
  );
};

export default ChildCare;
