import React from "react";
import styles from './Footer.module.css'
import usa from '../../assets/images/image.png'
function Footer() {
  return (
    <div className="row">
      <div
        className={styles.copyright}
      >
        Copyright & copy; 2025 Evangadi Docs. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
