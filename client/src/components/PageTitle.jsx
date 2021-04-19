import React from "react";
import { Typography } from "@material-ui/core";

export default function PageTitle(props) {
  const {title} = props;

  return (
    <Typography variant="h4" >{title}</Typography>
  )
}