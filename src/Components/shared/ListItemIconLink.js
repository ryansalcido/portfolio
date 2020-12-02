import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  profile: {
    paddingBottom: 25
  },
  iconLink: {
    "&:hover": {
      transform: "scale(1.25, 1.25)",
      backgroundColor: "#303030"
    }
  }
}));

const ListItemIconLink = ({ href, title, children }) => {
  const classes = useStyles();

  return (
    <ListItem button disableRipple component="a" title={title} className={classes.iconLink} 
      href={href} target="_blank" rel="noreferrer" disableGutters>
      <ListItemIcon>
        {children}
      </ListItemIcon>
    </ListItem>
  );
};

ListItemIconLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

export default ListItemIconLink;
