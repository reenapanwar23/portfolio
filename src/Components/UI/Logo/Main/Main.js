import React from "react";
import classes from "./Main.module.css";

const Main = (props) => {
  return (
    <div className={classes.Main}>
      <img src={`${process.env.PUBLIC_URL}/assets/${props.img}`} alt="skills" />
    </div>
  );
};

export default Main;
