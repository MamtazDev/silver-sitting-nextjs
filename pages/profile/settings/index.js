import ProfileLayout from "@/layouts/Profile";
import React, { useRef, useState } from "react";
import styles from "@/styles/Setting.module.css";
import { FiPlus } from "react-icons/fi";
import info from "../../../public/assets/icons/info.png";

const settings = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [warningShow, setWarningShow] = useState(false);
  const inputRef = useRef(null);
  const handleClick = () => {
    inputRef.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);
  };

  return (
    <div className={styles.mainContainer}>
      <h3>Settings</h3>

      <div className={styles.mainContentContainer}>
        <div className={styles.fileContainer}>
          <p>
            Your certificate of good conduct has been successfully uploaded and
            will now be checked.
          </p>
          <button
            className="d-flex align-items-center justify-content-center gap-2"
            onClick={handleClick}
          >
            <FiPlus className="fs-4" />
            Select Extended certificate of good conduct
          </button>
          <input
            type="file"
            ref={inputRef}
            accept="application/pdf"
            onChange={handleChange}
          />
          {selectedFile ? (
            <span> {selectedFile?.name}</span>
          ) : (
            <span>Documents only, eg PDF,no pictures, Max 15MB </span>
          )}
        </div>
        <div className={styles.checkboxContainer}>
          <div className={styles.checkBox_Box}>
            <input type="checkbox" name="" value="" />
            <label htmlFor="">
              I do not want to be found in the parent's search at the moment.
            </label>
            <img
              style={{ cursor: "pointer" }}
              onClick={() => setWarningShow(!warningShow)}
              src={info.src}
              alt=""
            />
          </div>
          <button>Save</button>

          {warningShow && (
            <div className={styles.labelTextContainer}>
              <label>
                PLEASE NOTE: If you tick this box, your parents will no longer
                be able to find you. Existing conversations can be continued. If
                you remove the tick by clicking again, you will be found again.
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
settings.PageLayout = ProfileLayout;

export default settings;
