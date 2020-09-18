import React from "react";
import Main from "../Logo/Main/Main";
import classes from "./Experience.module.css";
import { Slide } from "react-reveal";
import skills from "./Skills";

const Experience = (props) => {
  return skills.map((skill) => {
    return (
      <div className={classes.Experience} key={skill.title}>
        <Slide left duration={1500} distance={"20px"}>
          <div className={classes.main}>
            <Main img={skill.images} />
          </div>
        </Slide>

        <Slide right duration={1500} distance={"20px"}>
          <div className={classes.cont}>
            <Slide right duration={1500} delay={100} distance={"20px"}>
              <h2>{skill.title}</h2>
            </Slide>

            <Slide right duration={1500} delay={300} distance={"20px"}>
              <ul>
                {skill.desc.map((list, indx) => {
                  return <li key={indx}>{list}</li>;
                })}
              </ul>
            </Slide>
          </div>
        </Slide>
      </div>
    );
  });
};

export default Experience;
