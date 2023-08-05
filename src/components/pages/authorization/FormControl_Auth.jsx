import React from "react";
import Inputs from "./Inputs_auth";
import { Switch } from "./Switch";

export const FormControl = (props) => {
  switch (props.control) {
    case "input":
      return <Inputs {...props} />;
    case "switch":
      return <Switch {...props} />;
  }
};
