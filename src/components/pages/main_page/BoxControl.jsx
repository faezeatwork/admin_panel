import React from "react";
import { Card } from "./Card";

export const BoxControl = (props) => {
  switch (props.control) {
    case "card":
      return <Card {...props} />;
  }
};
