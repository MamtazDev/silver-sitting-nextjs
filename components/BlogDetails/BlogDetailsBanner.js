import React from "react";
import styles from "@/styles/Blog.module.css";
import banner from "../../public/assets/blog-details.png";
import people from "../../public/assets/icons/details-people.png";
import share from "../../public/assets/icons/details-share.png";
import comment from "../../public/assets/icons/details-comment.png";
import like from "../../public/assets/icons/details.like.png";

const BlogDetailsBanner = () => {
  return (
    <div className={styles.blog_details}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img className="img-fluid w-100" src={banner.src} alt="" />
          </div>
          <div className="col-12 col-lg-6">
            <div
              style={{ marginBottom: "20px" }}
              className="d-flex flex-wrap justify-content-between"
            >
              <div>
                <div className="d-flex align-items-center gap-2">
                  <img src={people.src} alt="" />
                  <h6 className="mb-0">Daniel Monninger</h6>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center gap-2">
                  <img src={share.src} alt="" />
                  <h6 className="mb-0">Share</h6>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center gap-2">
                  <img src={comment.src} alt="" />
                  <h6 className="mb-0">0</h6>
                </div>
              </div>
              <div>
                <div className="d-flex align-items-center gap-2">
                  <img src={like.src} alt="" />
                  <h6 className="mb-0">0</h6>
                </div>
              </div>
            </div>
            <h4> For seniors: childcare despite Corona?</h4>
            <p>
              We live in a time full of challenges: Since the beginning of the
              year, Corona has been threatening all of our health and even all
              of our lives. We would like to clearly reject those who deny that
              Corona is dangerous, who even claim that this is just like another
              flu ! Corona can be very dangerous for risk groups and our dear
              seniors!
            </p>{" "}
            <br />
            <p>
              We at SilverSitting are only too happy to support the
              consequences: unprecedented school closures in summer 2020,
              distance regulations, mask requirements. You know the measures -
              and they are important!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsBanner;