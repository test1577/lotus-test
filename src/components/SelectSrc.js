import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    width: "calc(100% - 34px);",
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    display: "flex",
    flexDirection: "row",
  },
}));

export default function SelectSrc(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log("props ", props);
  return (
    <FormControl className={classes.margin}>
      {props.icon}
      <NativeSelect
        value={age}
        onChange={handleChange}
        input={<BootstrapInput placeholder={"Select Your Address"} />}
      >
        {/* <option aria-label="None" value="" /> */}
        <option value={""}>Select Your Address</option>
        <option value={"Address 1"}>Address 1</option>
        <option value={"Address 2"}>Address 2</option>
        <option value={"Address 3"}>Address 3</option>
      </NativeSelect>
    </FormControl>
  );
}
