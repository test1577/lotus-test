import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  helper: {
    textAlign: "left",
    alignSelf: "self-start",
    display: "none",
    [theme.breakpoints.up("769")]: {
      display: "inline",
      position: "absolute",
      bottom: "-20px",
    },
  },
}));

export default function TextSrc() {
  const classes = useStyles();

  return (
    <FormControl className={classes.root}>
      <Paper component="form" className={classes.root}>
        <InputBase className={classes.input} placeholder="Search Product..." />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <FormHelperText className={classes.helper}>
        <b>Poppular keywords: </b>mask, air purifier
      </FormHelperText>
    </FormControl>
  );
}
