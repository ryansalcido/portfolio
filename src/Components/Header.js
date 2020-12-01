import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles(() => ({
  header: {
    minHeight: 48,
    display: "flex",
    justifyContent: "center"
  }
}));

const Header = ({ value, handleChange, sectionRefs }) => {
  const classes = useStyles();

  const scrollTo = (ele) => {
    window.scrollTo({
      //If value is equal to 0 (About tab), set top value to 0 (top of the page)
      top: ele.offsetTop - 54,
      behavior: "smooth"
    });
  };
  
  return (
    <Fragment>
      <AppBar color="primary" position="fixed">
        <Toolbar className={classes.header}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" indicatorColor="secondary">
            <Tab label="About" onClick={() => scrollTo(sectionRefs[0].ref.current)} />
            <Tab label="Education" onClick={() => scrollTo(sectionRefs[1].ref.current)} />
            <Tab label="Experience" onClick={() => scrollTo(sectionRefs[2].ref.current)} />
            <Tab label="Projects" onClick={() => scrollTo(sectionRefs[3].ref.current)} />
          </Tabs>
        </Toolbar>
      </AppBar>
      {/* Placeholder div due to having a fixed placement header. Without this, text would appear behind
        * the header. More info: https://material-ui.com/components/app-bar/#fixed-placement
      */}
      <div className={classes.header} />
    </Fragment>
  );
};

export default Header;
