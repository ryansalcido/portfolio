import React, { Fragment, useState, useEffect, useMemo, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import "./Home.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import About from "./About";

const useStyles = makeStyles((theme) => ({
  heading: {
    height: 150,
    paddingTop: 48
  },
  root: {
    padding: theme.spacing(3)
  },
  bottomNav: {
    width: "100%",
    position: "fixed",
    bottom: 0
  },
  header: {
    minHeight: 48,
    display: "flex",
    justifyContent: "center"
  },
  selected: {
    borderBottom: `3px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main
  },
  headerButton: {
    borderRadius: 0,
    padding: "6px 12px"
  },
  section: {
    paddingTop: 48,
    height: 700
  }
}));

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start"
  });
};

const Home = () => {
  const classes = useStyles();

  const [ visibleSection, setVisibleSection ] = useState();

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const sectionRefs = useMemo(() => (
    [
      { section: 0, ref: aboutRef },
      { section: 1, ref: educationRef },
      { section: 2, ref: experienceRef },
      { section: 3, ref: projectsRef },
    ]
  ), []);

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      /* window.scrollyY: Valid for modern browsers
         document.documentElement.scrollTop: Valid for IE 11
      */
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const scrollPosition = scrollTop + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if(ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
        return false;
      });

      if(selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if(!selected && visibleSection) {
        setVisibleSection(undefined);
      } else if(!selected && !visibleSection) {
        setVisibleSection(0);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ visibleSection, sectionRefs ]);

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="fixed" ref={headerRef}>
        <Toolbar className={classes.header}>
          <Grid container justify="center">
            <Button className={`${classes.headerButton} ${visibleSection === 0 && classes.selected}`}
              onClick={() => scrollTo(aboutRef.current)}>
              About
            </Button>
            <Button className={`${classes.headerButton} ${visibleSection === 1 && classes.selected}`}
              onClick={() => scrollTo(educationRef.current)}>
              Education
            </Button>
            <Button className={`${classes.headerButton} ${visibleSection === 2 && classes.selected}`}
              onClick={() => scrollTo(experienceRef.current)}>
              Experience
            </Button>
            <Button className={`${classes.headerButton} ${visibleSection === 3 && classes.selected}`}
              onClick={() => scrollTo(projectsRef.current)}>
              Projects
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* Placeholder div due to having a fixed placement header. Without this, text would appear behind
      * the header. More info: https://material-ui.com/components/app-bar/#fixed-placement
      */}
      <div className={classes.header} />

      {/* <About ref={aboutRef} /> */}
      <div className={classes.section} style={{backgroundColor: "red"}} ref={aboutRef}>
        ABOUT
      </div>
      <div className={classes.section} style={{backgroundColor: "#a388e8"}} ref={educationRef}>
        EDUCATION
      </div>
      <div className={classes.section} style={{backgroundColor: "#e0c48f"}} ref={experienceRef}>
        EXPERIENCE
      </div>
      <div className={classes.section} style={{backgroundColor: "#8face0"}} ref={projectsRef}>
        PROJECTS
      </div>
    </div>
  );
};

export default Home;
