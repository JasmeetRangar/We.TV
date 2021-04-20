import React from "react";
import { useContext } from 'react';
import { authContext } from './AuthProvider';
import {
  makeStyles,
  Avatar,
  Typography,
  Container,
  Paper,
  Fab
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import PageTitle from "./PageTitle";

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
    marginTop: "2%",
  },
  fabEdit: {
    position: "relative",
    left: "40%",
    top: "18%"
  }
}));

export default function ProfileDisplay() {
  const classes = useStyles();
	const { user } = useContext(authContext);
  return (
    <Container component="main" maxWidth="xs">
      <PageTitle title={"My Profile"}/>
      <Paper className={classes.paper}>
        <Avatar
          alt="Remy Sharp"
          src={user.profile_pic}
          className={classes.large}
        />
        <Typography variant="subtitle2" gutterBottom>{user.display_name}</Typography>
        <Typography>{user.first_name} {user.last_name}</Typography>
        <Typography>{user.email}</Typography>
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
