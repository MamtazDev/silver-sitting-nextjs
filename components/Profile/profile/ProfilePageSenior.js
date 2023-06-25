import React, { useRef, useState } from "react";
import styles from "@/styles/ProfilePageSenior.module.css";
import camera from "../../../public/assets/icons/camera.png";
import profileImage from "../../../public/assets/images/pobox-profile.png";

const ProfilePageSenior = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.mainContainer}>
      <h4>Information About You</h4>
      <p className={styles.description}>
        In order to be able to be found by the parents as a childcare worker,
        some information about you is required. This information is the only way
        to ensure that care is provided that meets your expectations.
      </p>

      <div className={styles.informationContainer}>
        <p>
          You Are Registered On SilverSitting With This E-Mail Address:{" "}
          <span>Dmonninger@Web.de</span>
        </p>
        <span>Please Always Use This Email Address When Registering.</span>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          {/* image input */}
          <div className={styles.imageBox}>
            <div className={styles.imageMainContainer}>
              <div className={styles.userImageContainer}>
                <img
                  className="object-cover w-full h-full rounded-full"
                  src={
                    selectedImage
                      ? URL.createObjectURL(selectedImage)
                      : profileImage.src
                  }
                  alt=""
                />
              </div>
              <img
                className={styles.littleCamera}
                src={camera.src}
                alt=""
                onClick={handleClick}
              />
              <input
                type="file"
                className={styles.imageInputField}
                accept="image/*"
                onChange={handleFileChange}
                ref={inputRef}
              />
            </div>
          </div>
          {/* image input */}

          {/* input fields */}
          <div className={styles.inputContainer}>
            <div>
              <label>
                First Name <span>*</span>
              </label>
              <input type="text" className="w-100" name="firstName" required />
            </div>
            <div>
              <label>
                Last Name <span>*</span>
              </label>
              <input type="text" className="w-100" name="lastName" required />
            </div>
            <div>
              <label>Phone Number</label>
              <input type="number" className="w-100" name="phoneNumber" />
            </div>

            <div>
              <label>Street No</label>
              <input type="text" className="w-100" name="streetNo" />
            </div>
            <div>
              <label>
                Postal Code <span>*</span>
              </label>
              <input
                type="number"
                className="w-100"
                name="firstName"
                required
              />
            </div>
            <div>
              <label>
                Location<span>*</span>
              </label>
              <input type="text" className="w-100" name="location" required />
            </div>
          </div>
          {/* input fields */}

          {/* checkbox input fields */}
          <div className={styles.checkboxInputContainer}>
            <h5>
              Please fill out carefully to ensure an optimal match with the
              parents
            </h5>
            <div className="mb-4">
              <label>
                Gender <span>*</span>
                <div className={styles.genderInputContainer}>
                  <div>
                    <input type="radio" name="gender" value="male" id="male" />
                    <label htmlFor="male">Masculine</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      id="female"
                    />
                    <label htmlFor="female">Feminine</label>
                  </div>
                </div>
              </label>
            </div>

            <div className="mb-4">
              <label>
                Availability <span>*</span>
              </label>
              <div className={styles.availabilityInputContainer}>
                <div>
                  <input type="checkbox" id="duringTheDay" />
                  <label htmlFor="duringTheDay">During the day</label>
                </div>
                <div>
                  <input type="checkbox" id="inTheMorning" />
                  <label htmlFor="inTheMorning">In the morning</label>
                </div>
                <div>
                  <input type="checkbox" id="inTheEvening" />
                  <label htmlFor="inTheEvening">In the evening</label>
                </div>
                <div>
                  <input type="checkbox" id="atTheWeekend" />
                  <label htmlFor="atTheWeekend">At the weekend</label>
                </div>
              </div>
            </div>

            <div>
              <label>
                You Offer <span>*</span>
              </label>
              <div className={styles.youOfferInputContainer}>
                <div>
                  <input type="checkbox" id="oneYear" />
                  <label htmlFor="oneYear">
                    Classic babysitting for children from 1 year
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="fourYear" />
                  <label htmlFor="fourYear">
                    Child care for children from 4 years
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="pickUp" />
                  <label htmlFor="pickUp">pick-up and delivery services</label>
                </div>
                <div>
                  <input type="checkbox" id="cooking" />
                  <label htmlFor="cooking">
                    Baking/cooking (for the child and with the child)
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="oneClasses" />
                  <label htmlFor="oneClasses">
                    Homework help classes 1 - 4
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="fiveClasses" />
                  <label htmlFor="fiveClasses">
                    Homework help classes 5 - 7
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* checkbox input fields */}

          {/* short about you */}
          <div className={styles.aboutYouContainer}>
            <h5>Short About You</h5>
            <p>
              This text is displayed in the hit list for the parents. Take the
              opportunity to write a few words about yourself so that the
              parents get a good first impression of you.
            </p>
            <div>
              <span>NOTE:-</span>{" "}
              <label>
                Please Only Provide Information That is Publicly Viewable{" "}
                <label className={styles.star}>*</label>
              </label>
            </div>
            <textarea
              placeholder="Write here...."
              className={`w-100 ${styles.textArea}`}
            />

            <div>
              <button className="_button" type="submit">
                Save
              </button>
            </div>
          </div>
          {/* short about you */}
        </form>
      </div>
    </div>
  );
};

export default ProfilePageSenior;
