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
  const {label, onSearch} = props;

  const [value, setValue] = useState("");
  const term = useDebounce(value, 400);

  const onSearchShow = useCallback(onSearch, [term]);

  useEffect(() => {
    onSearchShow(term);
  }, [term, onSearchShow]);

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