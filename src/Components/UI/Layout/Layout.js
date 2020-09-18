import React from "react";
import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <NavigationItems {...props} />
      {props.children}
    </div>
  );
};
export default Layout;
