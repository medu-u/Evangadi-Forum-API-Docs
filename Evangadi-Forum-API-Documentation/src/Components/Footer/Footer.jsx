import React from "react";
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className="row">
      <div
        className={`${styles.copyright} col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1`}
      >
        Copyright &copy; 2020 Apple Inc. All rights reserved.
      </div>
      <div
        className={`${styles["footer-links-terms"]} col-sm-12 order-3 col-lg-6 order-lg-2`}
      >
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Sales and Refunds</a>
          </li>
          <li>
            <a href="#">Legal</a>
          </li>
          <li>
            <a href="#">Site Map</a>
          </li>
        </ul>
      </div>
      <div
        className={`${styles["footer-country"]} col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3`}
      >
        {/* <div className={styles["flag-wrapper"]}>
          <img src={usa} alt="USA Flag" />
        </div> */}
        <div className={styles["footer-country-name"]}>United States</div>
      </div>
    </div>
  );
}

export default Footer;
