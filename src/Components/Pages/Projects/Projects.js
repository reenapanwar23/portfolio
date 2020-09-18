import React from "react";
import Layout from "../../UI/Layout/Layout";
import classes from "./Projects.module.css";
import { Fade, Bounce } from "react-reveal";

const Projects = (props) => {
  return (
    <React.Fragment>
      <Layout {...props}>
        <Fade bottom duration={1300} distance={"20px"}>
          <div className={classes.body}>
            <Bounce left duration={800} distance={"20px"} cascade>
              <header className={classes.intro}>
                <h1>Uploading Soon...</h1>
                <p>Projects are under update.</p>
              </header>
            </Bounce>
          </div>
        </Fade>
      </Layout>
    </React.Fragment>
  );
};
export default Projects;
