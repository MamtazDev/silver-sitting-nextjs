import React from "react";
import styles from "@/styles/InstructionCard.module.css";

const InstructionCard = ({ instruction }) => {
  console.log(instruction.image);

  const imagePath = `${instruction?.image.src}`;
  const cleanedPath = imagePath.replace("/_next/static/media/", "");
  return (
    <div className={styles.cardContainer}>
      <div className={styles.icons}>
        <img src={instruction?.image.src} alt="" />
      </div>
      <h6>{instruction?.title}</h6>
      <p>{instruction?.content}</p>
    </div>
  );
};

export default InstructionCard;
