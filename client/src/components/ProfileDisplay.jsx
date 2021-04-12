import React from "react";
import {
  makeStyles,
  Avatar,
  Typography,
  Container,
  Paper,
  Fab
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";

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
    padding: "15px 0px 15px 0px"
  },
  fabEdit: {
    position: "relative",
    left: "40%",
    top: "18%"
  }
}));

export default function ProfileDisplay() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className={classes.large}
        />
        <Typography variant="subtitle2" gutterBottom>Display Name</Typography>
        <Typography>FirstName Lastname</Typography>
        <Typography>EmailName</Typography>
        <Fab 
          color="secondary" 
          size="small"
          aria-label="edit"
          className={classes.fabEdit}
          >
          <Edit />
        </Fab>
      </Paper>
    </Container>
  );
}
