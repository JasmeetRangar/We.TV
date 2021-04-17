import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    textAlign: 'left'
  }
}));

export default function LoginError() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Alert severity="error">
        <AlertTitle  className={classes.title}>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
    </div>
  )
}