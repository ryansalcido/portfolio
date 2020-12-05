import React, { Fragment, useState, useEffect, useMemo, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import About from "./About";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  bottomNav: {
    width: "100%",
    position: "fixed",
    bottom: 0
  },
  section: {
    paddingTop: 48,
    height: 700
  }
}));

const getDimensions = element => {
  const { height } = element.getBoundingClientRect();
  const offsetTop = element.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const Home = () => {
  const classes = useStyles();

  const [ visibleSection, setVisibleSection ] = useState();

  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const sectionRefs = useMemo(() => (
    [
      { section: 0, ref: homeRef },
      { section: 1, ref: aboutRef },
      { section: 2, ref: educationRef },
      { section: 3, ref: experienceRef },
      { section: 4, ref: projectsRef },
    ]
  ), []);

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      /* window.scrollY: Valid for modern browsers
         document.documentElement.scrollTop: Valid for IE 11
      */
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      //Add 24 to adjust for root padding
      const scrollPosition = scrollTop + headerHeight + 24;

      const selected = sectionRefs.find(({ section, ref }) => {
        const element = ref.current;
        if(element) {
          const { offsetBottom, offsetTop } = getDimensions(element);
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
    <Fragment>
      <Header ref={headerRef} sectionRefs={sectionRefs} visibleSection={visibleSection} />
      <div className={classes.root}>
        <Typography variant="h1" align="center" ref={homeRef}>
          RYAN SALCIDO
        </Typography>
        <About ref={aboutRef} />
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
    </Fragment>
  );
};

export default Home;
