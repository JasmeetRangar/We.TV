import React from "react";
import {
  makeStyles,
  Avatar,
  Typography,
  Container,
  Paper,
  Fab,
  TextField,
  Grid,
  IconButton,
} from "@material-ui/core";
import { Done, PhotoCamera } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "auto",
  },
  paper: {
    padding: "15px 0px 15px 0px",
  },
  fabEdit: {
    position: "relative",
    left: "40%",
    top: "18%",
  },
}));

export default function ProfileForm() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>

        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={classes.large}
          >
            <IconButton>
          <PhotoCamera />
          </IconButton>
        </Avatar>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label="Display Name" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="First Name" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Last Name" />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Email" />
            </Grid>
          </Grid>
        </form>
        <Fab
          color="primary"
          size="small"
          aria-label="edit"
          className={classes.fabEdit}
        >
          <Done />
        </Fab>
      </Paper>
    </Container>
  );
}
