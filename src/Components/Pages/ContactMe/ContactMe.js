import React from "react";
import Layout from "../../UI/Layout/Layout";
import classes from "./ContactMe.module.css";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Fade, Slide } from "react-reveal";

const ContactMe = (props) => {
  return (
    <React.Fragment>
      <Layout {...props}>
        <Fade bottom duration={1500} distance={"20px"}>
          <div className={classes.body}>
            <Slide left duration={1000} distance={"20px"}>
              <header className={classes.intro}>
                <h1> Get in touch</h1>
                <p>
                  If you want to get in touch, hire me or talk to me about a
                  project collaboration, send an email or reach out to me via
                  linkedIn and ~let's talk.
                </p>
              </header>
            </Slide>

            {/* icons link */}
            <Slide right duration={1000} distance={"20px"}>
              <div className={classes.contact}>
                <ul>
                  <li>
                    <a href="mailto:reenapanwar.23@gmail.com">
                      <MailRoundedIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/public-profile/in/reena-panwar-587b761a2">
                      <LinkedInIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/reenapanwar23">
                      <GitHubIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </Slide>
          </div>
        </Fade>
      </Layout>
    </React.Fragment>
  );
};
export default ContactMe;
