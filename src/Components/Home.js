import React, { Fragment, useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import About from "./About";

const useStyles = makeStyles((theme) => ({
  heading: {
    height: 150,
    paddingTop: 48
  },
  root: {
    padding: theme.spacing(2)
  }
}));

const Home = () => {
  const classes = useStyles();
  const [ value, setValue ] = useState(0);
  const itemRef = useRef(null);

  useEffect(() => {
    if(itemRef && itemRef.current) {
      window.scrollTo({
        //If value is equal to 0 (About tab), set top value to 0 (top of the page)
        top: value === 0 ? 0 : itemRef.current.offsetTop - 54,
        behavior: "smooth"
      });
    }
  }, [value]);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Fragment>
      <Header value={value} handleChange={handleChange} />
      <div className={classes.root}>
        <About ref={value === 0 ? itemRef : null} />
        <div ref={value === 1 ? itemRef : null} style={{ height: 500, backgroundColor: "cyan"}}>
          Education
        </div>
        <div ref={value === 2 ? itemRef : null} style={{ height: 500, backgroundColor: "green"}}>
          Experience
        </div>
        <div ref={value === 3 ? itemRef : null} style={{ height: 800, backgroundColor: "red"}}>
          Projects
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
