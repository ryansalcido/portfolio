import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({

}));

const TabLink = ({ href, label }) => {
  const classes = useStyles();

  return (
    <Tab component="a" href={href} label={label} onClick={(event) => {
      event.preventDefault();
    }}/>
  );
};

TabLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default TabLink;
