import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import WebIcon from "@material-ui/icons/Web";
import Brand from "../../../UI/Logo/Brand/Brand";
import { NavLink } from "react-router-dom";
import classs from "./NavigationItem.module.css";
import { Fade } from "react-reveal";

const useStyles = makeStyles((theme) => {
  return {
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
      color: "white",
      [theme.breakpoints.up("md")]: {
        marginRight: theme.spacing(2),
        fontSize: "md",
      },
    },
    title: {
      display: "none",
      [theme.breakpoints.up("xs")]: {
        display: "block",
        fontFamily: "Ubuntu",
        width: 42,
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    App: {
      backgroundColor: "#101418",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        height: 53,
      },
    },
  };
});

const PrimaryAppBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // to handle mouse events

  const homeClickHandler = () => {
    props.history.push("/");
  };
  const projectsHandler = () => {
    props.history.push("/projects");
  };
  const contactMeHandler = () => {
    props.history.push("/contactme");
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-menu-mobile";

  // Menu for smaller devices
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={homeClickHandler}>
        <IconButton color="inherit" onClick={homeClickHandler}>
          <HomeIcon className={classes.home} />
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem onClick={projectsHandler}>
        <IconButton color="inherit" onClick={projectsHandler}>
          <WebIcon className={classes.home} />
        </IconButton>
        <p>Projects</p>
      </MenuItem>
      <MenuItem onClick={contactMeHandler}>
        <IconButton color="inherit" onClick={contactMeHandler}>
          <ContactMailIcon className={classes.home} />
        </IconButton>
        <p>Contact Me</p>
      </MenuItem>
    </Menu>
  );
  const BrClickHandler = () => {
    props.history.push("/mylogo");
  };
  return (
    <Fade top duration={1500} distance={"20px"}>
      <div className={classes.grow}>
        <AppBar position="static" className={classes.App}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={homeClickHandler}
            >
              <HomeIcon />
            </IconButton>
            <Typography className={classes.title} variant="h5" noWrap>
              <Brand clicked={BrClickHandler} />
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {/* routes  */}
              <ul className={classs.links}>
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/contactme">Contact Me</NavLink>
                </li>
              </ul>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
    </Fade>
  );
};
export default PrimaryAppBar;
