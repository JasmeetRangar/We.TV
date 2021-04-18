import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Input, InputAdornment } from '@material-ui/core';



import useDebounce from "../../hooks/useDebounce";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    margin: 'auto',
    width: 400,
    marginTop: '2em'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));


export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const {label} = props;

  const [value, setValue] = useState("");
  const term = useDebounce(value, 500);

  const onSearch = useCallback(props.onSearch, [term]);

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <form component="form" className={classes.root} onSubmit={event => event.preventDefault()}>
      <Input
        label={label}
        value={value}
        className={classes.input}
        onChange={event => setValue(event.target.value)}
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