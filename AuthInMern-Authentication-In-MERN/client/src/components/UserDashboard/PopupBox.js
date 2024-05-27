import React from 'react';
import styles from "./styles.module.css";

const PopupBox = ({ content, onClose }) => {
  return (
    <div className={styles["popup-container"]}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        {content}
      </div>
    </div>
  );
};

export default PopupBox;
