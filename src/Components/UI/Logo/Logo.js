import React from "react";
import classes from "./Logo.module.css";

const BkImage = () => {
  return (
    <div className={classes.Bg}>
      <img src={`${process.env.PUBLIC_URL}/assets/img1.jpg`} alt="Laptop" />
    </div>
  );
};

export default BkImage;
