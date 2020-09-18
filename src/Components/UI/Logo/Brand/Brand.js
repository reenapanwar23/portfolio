import React from "react";
import classes from "./Brand.module.css";

const Brand = (props) => {
  return (
    <div className={classes.Brand} onClick={props.clicked}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/BrandF.png`}
        alt={`${process.env.PUBLIC_URL}/assets/skills/Brand.png`}
      />
    </div>
  );
};
export default Brand;
