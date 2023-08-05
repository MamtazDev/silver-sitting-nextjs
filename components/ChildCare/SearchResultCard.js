import React from "react";
import person from "../../public/assets/images/person.png";
import styles from "@/styles/SearchResultCard.module.css";
import Link from "next/link";

const SearchResultCard = ({ index }) => {

  console.log("idx", index)
  return (
    <div className={styles.mainContainer}>
      <div className={styles.personContainer}>
        <div>
          <img src={person.src} alt="" />
        </div>
        <div>
          <h5>Testing Senior</h5>
          <span>Volunteer</span>
          <p>Hello, unfortunately I am only a test user</p>
        </div>
      </div>
      <div>
        <h5>Distance</h5>
        <p>1 km</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href={`/child-care/message/${index}`}>
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default SearchResultCard;
