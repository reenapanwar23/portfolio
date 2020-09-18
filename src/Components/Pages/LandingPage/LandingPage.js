import React from "react";
import Layout from "../../UI/Layout/Layout";
import classes from "./LandingPage.module.css";
import BkImage from "../../UI/Logo/Logo";
import Carousal from "../../UI/Carousal/Carousal";
import Summary from "../../UI/Summary/Summary";
import Experience from "../../UI/Experience/Experience";
import { Fade } from "react-reveal";
const ContactMe = (props) => {
  return (
    <div>
      <Layout {...props}>
        <Fade bottom duration={1500} distance={"20px"}>
          <div className={classes.body}>
            <div className={classes.intro}>
              <h1> Hey, I'm Reena</h1>
              <p>A Front-End Developer</p>
            </div>
            <div className={classes.img}>
              {/* Background image Component */}
              <BkImage />
            </div>
          </div>
          <div className={classes.sec}>
            <h2>Looking for what i know ?</h2>
          </div>
          {/* Skills Carousal */}
          <Carousal className={classes.Carousal} />
          <div>
            {/* Objective message */}
            <Summary />
          </div>
        </Fade>
        <div style={{ backgroundColor: "white" }}>
          <Experience />
        </div>
      </Layout>
    </div>
  );
};
export default ContactMe;
