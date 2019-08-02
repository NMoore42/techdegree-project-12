import React from "react";
import { Grid, Box, Typography, withStyles, Button, Tabs, Tab, TextField } from "@material-ui/core";
import logo from "./images/logo.png";


const Login = ({ classes, ...props }) => (
  <Grid container className={classes.container}>
    <div className={classes.logotypeContainer}>
      <img src={logo} alt="logo" className={classes.logotypeImage} />
      <Typography className={classes.logotypeText}>Coin Market App</Typography>
    </div>
    <div className={classes.formContainer}>
      <div className={classes.form}>
        <Tabs
          value={props.appState.loginPageTab}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Login" onClick={event => props.handleLoginPageTab("login")} classes={{ root: classes.tab }} />
          <Tab label="New User" onClick={event => props.handleLoginPageTab("signup")} classes={{ root: classes.tab }} />
        </Tabs>
        {props.appState.loginPageTab === 0 && (
          <React.Fragment>
            <div className={classes.formDividerContainer}>
              <div className={classes.formDivider} />
              <div className={classes.formDivider} />
            </div>
            <Box>
              <h4>Welcome!</h4>
            </Box>
            <TextField
              id="email"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField
                }
              }}
              value={props.appState.loginEmail}
              onChange={event => props.handleInputChange("loginEmail", event.target.value)}
              margin="normal"
              placeholder="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              id="password"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField
                }
              }}
              value={props.appState.loginPassword}
              onChange={event => props.handleInputChange("loginPassword", event.target.value)}
              margin="normal"
              placeholder="Password"
              type="password"
              fullWidth
            />
            <div className={classes.formButtons}>

                <Button

                  onClick={props.validateLoginUser}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Login
                </Button>
            </div>
          </React.Fragment>
        )}
        {props.appState.loginPageTab === 1 && (
          <React.Fragment>
            <TextField
              id="name"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField
                }
              }}
              value={props.appState.signUpName}
              onChange={event => props.handleInputChange("signUpName", event.target.value)}
              margin="normal"
              placeholder="Username"
              type="email"
              fullWidth
            />
            <TextField
              id="email"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField
                }
              }}
              value={props.appState.signUpEmail}
              onChange={event => props.handleInputChange("signUpEmail", event.target.value)}
              margin="normal"
              placeholder="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              id="password"
              InputProps={{
                classes: {
                  underline: classes.textFieldUnderline,
                  input: classes.textField
                }
              }}
              value={props.appState.signUpPassword}
              onChange={event => props.handleInputChange("signUpPassword", event.target.value)}
              margin="normal"
              placeholder="Password"
              type="password"
              fullWidth
            />
            <div className={classes.creatingButtonContainer}>

                <Button
                  onClick={props.validateSignUpUser}

                  size="large"
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.createAccountButton}
                >
                  Create your account
                </Button>

            </div>
            <div className={classes.formDividerContainer}>
              <div className={classes.formDivider} />
              <div className={classes.formDivider} />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  </Grid>
);

const styles = theme => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0
  },
  logotypeContainer: {
    backgroundColor: theme.palette.primary.main,
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%"
    },
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  logotypeImage: {
    width: 165,
    marginBottom: theme.spacing(4)
  },
  logotypeText: {
    color: "white",
    fontWeight: 500,
    fontSize: 84,
    [theme.breakpoints.down("md")]: {
      fontSize: 48
    }
  },
  formContainer: {
    width: "40%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "50%"
    }
  },
  form: {
    width: 320
  },
  tab: {
    fontWeight: 400,
    fontSize: 18
  },
  greeting: {
    fontWeight: 500,
    textAlign: "center",
    marginTop: theme.spacing(4)
  },
  subGreeting: {
    fontWeight: 500,
    textAlign: "center",
    marginTop: theme.spacing(2)
  },
  creatingButtonContainer: {
    marginTop: theme.spacing(2.5),
    height: 46,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  createAccountButton: {
    height: 46,
    textTransform: "none"
  },
  formDividerContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center"
  },
  formDividerWord: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  formDivider: {
    flexGrow: 1,
    height: 1,
    backgroundColor: theme.palette.text.hint + "40"
  },
  errorMessage: {
    textAlign: "center"
  },
  textFieldUnderline: {
    "&:before": {
      borderBottomColor: theme.palette.primary.light
    },
    "&:after": {
      borderBottomColor: theme.palette.primary.main
    },
    "&:hover:before": {
      borderBottomColor: `${theme.palette.primary.light} !important`
    }
  },
  textField: {
    borderBottomColor: theme.palette.background.light
  },
  formButtons: {
    width: "100%",
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  forgetButton: {
    textTransform: "none",
    fontWeight: 400
  },
  loginLoader: {
    marginLeft: theme.spacing(4)
  },
  copyright: {
    marginTop: theme.spacing(4),
    whiteSpace: 'nowrap',
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      bottom: theme.spacing(2),
    }
  }
});

export default withStyles(styles, { withTheme: true })(Login);
