import React from "react";
import styles from "../styles/Product.module.css";

const ExtraOrderOptions = ({ wine, handleChange }) => {
  return (
    <>
      {wine.extras.map((extra) => {
        return (
          <div className={styles.extraItem} key={extra._id}>
            <input
              onChange={(e) => handleChange(e, extra)}
              type="checkbox"
              id={extra.text}
              name={extra.text}
              className={styles.checkbox}
            />
            <label htmlFor={extra.text}>{extra.text}</label>
          </div>
        );
      })}
    </>
  );
};

export default ExtraOrderOptions;
