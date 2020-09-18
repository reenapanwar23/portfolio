import React from "react";
import classes from "./Tab.module.css";

// dynamic skill display

const Tab = (props) => {
  return (
    <div className={classes.Tabs}>
      <div className={classes.tab}>
        {props.path.map((ePath) => {
          return (
            <img
              key={ePath}
              src={`${process.env.PUBLIC_URL}/assets/skills/${ePath}`}
              alt="My Skills"
            />
          );
        })}
        <h3>{props.cont}</h3>
      </div>
    </div>
  );
};
export default Tab;
