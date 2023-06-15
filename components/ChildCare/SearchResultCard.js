import React from "react";
import person from "../../public/assets/images/person.png";
import styles from "@/styles/SearchResultCard.module.css";

const SearchResultCard = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.personContainer}>
        <div>
          <img src={person.src} alt="" />
        </div>
        <div>
          <h5>Testing Senior</h5>
          <p>Hello, unfortunately I am only a test user</p>
          <span>Volunteer</span>
        </div>
      </div>
      <div>
        <h5>Away</h5>
        <p>01 km</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className="btn">To Contact</button>
      </div>
    </div>
  );
};

export default SearchResultCard;
