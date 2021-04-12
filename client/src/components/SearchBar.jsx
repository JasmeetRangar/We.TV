import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Input, InputAdornment ,
        TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));


export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const {label, handleSubmit} = props;
  return (
    <form component="form" className={classes.root} onSubmit={handleSubmit}>
      <Input
        label={label}
        className={classes.input}
        startAdornment={
          <InputAdornment position="start">
            <IconButton>
              <SearchIcon/>
            </IconButton>
          </InputAdornment>
        }
      />
    </form>
  );
}