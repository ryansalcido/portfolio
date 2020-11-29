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
  },
  tabRoot: {
    flexGrow: 1
  },
  headerList: {
    display: "flex",
    flexDirection: "row"
  }
}));

const Header = ({ value, handleChange }) => {
  const classes = useStyles();
  
  return (
    <Fragment>
      <AppBar color="primary" position="fixed">
        <Toolbar className={classes.header}>
          <Tabs value={value} onChange={handleChange} variant="scrollable" indicatorColor="secondary">
            <Tab label="About" />
            <Tab label="Education" />
            <Tab label="Experience" />
            <Tab label="Projects" />
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
