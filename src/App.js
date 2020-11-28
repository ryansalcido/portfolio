import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import theme from "./theme";
// import ProgrammingCodeImage from "./assets/images/programming_code.jpg";
// import HtmlCodeImage from "./assets/images/html_code_image.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingBottom: 25,
    // backgroundImage: `url(${HtmlCodeImage})`,
    // backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    // backgroundSize: "cover"
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* <Header /> */}
        {/* <div className={classes.mainContainer}> */}
        <Route exact path="/" component={Home} />
        {/* </div> */}
      </Router>
    </ThemeProvider>
  );
};

export default App;
