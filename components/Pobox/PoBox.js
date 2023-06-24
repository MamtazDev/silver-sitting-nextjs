import React from "react";
import styles from "@/styles/Pobox.module.css";
import profile from "../../public/assets/images/pobox-profile.png";
import sms from "../../public/assets/icons/sms.png";
import opensms from "../../public/assets/icons/open-sms.png";

const PoBox = () => {
  return (
    <div className="d-flex flex-column gap-4">
      <div className={styles.pobox}>
        <div className="d-flex gap-3 align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-4">
            <img src={profile.src} alt="" />

            <div>
              <h6>Conversation with</h6>
              <p>Daniel</p>
            </div>
          </div>
          <div>
            <button type="button" class="border-0 position-relative">
              <img src={sms.src} alt="" />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0<span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.pobox}>
        <div className="d-flex gap-3 align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-4">
            <img src={profile.src} alt="" />

            <div>
              <h6>Conversation with</h6>
              <p>Andrew</p>
            </div>
          </div>

          <img src={opensms.src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PoBox;
