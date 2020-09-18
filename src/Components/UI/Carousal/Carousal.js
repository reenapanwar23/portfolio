import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Tab from "./Tab/Tab";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
  {
    label: "languages",
    tabPath: "Reactjs, javascript, HTML5 ",
    imgPath: ["React.js_logo.png", "Js_logo.png", "html5-log.png"],
  },
  {
    label: "styles",
    tabPath: "Bootstrap, CSS3, Wireframing",
    imgPath: ["Bootstrap_log.png", "css3_log.png", "wireframe.png"],
  },
  {
    label: "back-end",
    tabPath: "node.js, mongoDB, REST",
    imgPath: ["nodejs_log.png", "mongo_logo.png", "database_logo.png"],
  },
  {
    label: "Raw",
    tabPath: "UI/UX design, Responsive websites",
    imgPath: ["Blog-pencil.png", "Resp.PNG"],
  },
];

const useStyles = makeStyles((theme) => {
  const background = theme.palette.augmentColor({ main: "#ffff" });
  return {
    root: {
      // maxWidth: 900,
      flexGrow: 1,
      alignItems: "center",
      background: "white",
    },
    header: {
      //display: "flex",
      alignItems: "center",
      height: 20,
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.default,
    },
    tabPath: {
      height: 100,
      display: "block",
      //maxWidth: 900,
      overflow: "hidden",
      width: "100%",
    },
    stepper: {
      height: 20,
      background: "white",
      [theme.breakpoints.up("xs")]: {
        height: 15,
      },
    },
    dot: {
      backgroundColor: theme.palette.action.disabled,
      borderRadius: "50%",
      width: 8,
      height: 8,
      margin: "0 2px",
    },
    dotActive: {
      backgroundColor: background.main,
      color: theme.palette.primary.contrastText,
    },
  };
});

const Carousal = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Tab cont={step.tabPath} path={step.imgPath} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Stepper
        className={classes.stepper}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            style={{ position: "relative" }}
          >
            <h3 style={{ fontVariant: "all-small-caps" }}>NEXT</h3>
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            <h3 style={{ fontVariant: "all-small-caps" }}>Back</h3>
          </Button>
        }
      />
    </div>
  );
};

export default Carousal;
