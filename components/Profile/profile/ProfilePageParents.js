import React, { useRef, useState } from "react";
import styles from "@/styles/ProfilePageParents.module.css";
import camera from "../../../public/assets/icons/camera.png";
import profileImage from "../../../public/assets/images/pobox-profile.png";

const ProfilePageParents = () => {
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
      <h4>My Account</h4>

      <p className={styles.description}>
        Review and edit your personal information
      </p>

      <div className={styles.emailContainer}>
        <p>
          Email For Registration: <span>Daniel.Monninger@Outlook.De</span>
        </p>
      </div>

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

        {/* input field */}
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
            <input type="number" className="w-100" name="firstName" required />
          </div>
          <div>
            <label>
              Location<span>*</span>
            </label>
            <input type="text" className="w-100" name="location" required />
          </div>
        </div>
        {/* input field */}

        <div className={`text-center ${styles.buttonContainer}`}>
          <button className="_button" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfilePageParents;
