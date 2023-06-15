import React, { useState } from "react";
import activeArrow from "../../public/assets/icons/active-right-arrow.png";
import disabledArrow from "../../public/assets/icons/disabled-left-arrow.png";
import styles from "@/styles/Pagination.module.css";

const Pagination = () => {
  const [page, setPage] = useState(1);
  return (
    <div className={styles.Pagination}>
      <button
        className="btn"
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        {" "}
        <img src={activeArrow.src} alt="" className={styles.activeLeftArrow} />
      </button>
      <div className={page === 1 && styles.activePage}>1</div>
      <div className={page === 2 && styles.activePage}>2</div>
      <div className={page === 3 && styles.activePage}>3</div>
      <div className={page === 4 && styles.activePage}>4</div>
      <button
        className="btn"
        disabled={page === 4}
        onClick={() => setPage((prev) => prev + 1)}
      >
        <img src={activeArrow.src} alt="" />
      </button>
    </div>
  );
};

export default Pagination;
