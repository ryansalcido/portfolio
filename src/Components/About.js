import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import List from "@material-ui/core/List";
import ListItemIconLink from "./shared/ListItemIconLink";

const useStyles = makeStyles((theme) => ({
  aboutRoot: {
    paddingTop: 48
  },
  profile: {
    paddingBottom: 25
  },
  networkIconList: {
    display: "flex",
    paddingLeft: 20
  },
  biographyHeading: {
    "&::after": {
      content: "''",
      display: "block",
      height: 4,
      width: 216,
      backgroundColor: theme.palette.primary.main
    }
  }
}));

const About = forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <div ref={ref} className={classes.aboutRoot}>
      <Grid container>
        <Grid container item xs={12} md={4} className={classes.profile} alignItems="center" direction="column">
          <Avatar style={{ width: 200, height: 200 }}>RS</Avatar>
          <Typography variant="h4">Ryan Salcido</Typography>
          <Typography variant="h5">DevSecOps Engineer</Typography>
          <List className={classes.networkIconList} dense>
            <ListItemIconLink href="https://github.com/ryansalcido" title="GitHub">
              <GitHubIcon color="secondary" fontSize="large" />
            </ListItemIconLink>
            <ListItemIconLink href="https://www.linkedin.com/in/ryan-salcido" title="LinkedIn">
              <LinkedInIcon color="secondary" fontSize="large" />
            </ListItemIconLink>
            <ListItemIconLink href="https://www.linkedin.com/in/ryan-salcido" title="Resume">
              <InsertDriveFileIcon color="secondary" fontSize="large" />
            </ListItemIconLink>
          </List>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h3" gutterBottom className={classes.biographyHeading}>
            Biography
          </Typography>
          <Typography variant="body1" paragraph>
            I am a DevSecOps Engineer at Raft with a Bachelor of Science, Computer Science from 
            California State University, Sacramento. My previous experience consists of positions in
            the public and private sector utilizing Java, JavaScript, Python to develop standalone applications
            and web applications.
          </Typography>
          <Typography variant="body1" paragraph>
            I enjoy learning new technologies and improving my understanding of cybersecurity. I have received
            certifications from SANS and CompTIA which have given me the opportunity of understanding hacker
            techniques and penetration testing.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
});

export default About;
