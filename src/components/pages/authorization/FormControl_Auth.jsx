import React from "react";
import { Inputs } from "./Inputs_auth";
import { SwitchRememberMe } from "./SwitchRememberMe";

export const FormControl = (props) => {
  switch (props.control) {
    case "input":
      return <Inputs {...props} />;
    case "switch":
      return <SwitchRememberMe {...props} />; //مرا بخاطر بسپار 😁
  }
};
