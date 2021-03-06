import React, { Fragment, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  header: {
    minHeight: 48
  },
  toolbar: {
    minHeight: 48,
    display: "flex",
    justifyContent: "center"
  },
  headerButton: {
    borderRadius: 0,
    textTransform: "none"
  },
  selected: {
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main
  }
}));

const scrollTo = element => {
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start"
  });
};

const Header = forwardRef(({ sectionRefs, visibleSection }, ref) => {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar color="primary" position="fixed" ref={ref} className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Grid container justify="center">
            <Button className={`${classes.headerButton} ${visibleSection === 0 && classes.selected}`}
              onClick={() => scrollTo(sectionRefs[0].ref.current)}>
              Home
            </Button>
            <Button className={`${classes.headerButton} ${visibleSection === 1 && classes.selected}`}
              onClick={() => scrollTo(sectionRefs[1].ref.current)}>
              About
            </Button>
            <Button className={`${classes.headerButton} ${visibleSection === 2 && classes.selected}`}
              onClick={() => scrollTo(sectionRefs[2].ref.current)}>
              Education
            </Button>
            <Button className={`${classes.headerButton} ${visibleSection === 3 && classes.selected}`}
              onClick={() => scrollTo(sectionRefs[3].ref.current)}>
              Experience
            </Button>
            <Button className={`${classes.headerButton} ${visibleSection === 4 && classes.selected}`}
              onClick={() => scrollTo(sectionRefs[4].ref.current)}>
              Projects
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
});

export default Header;
