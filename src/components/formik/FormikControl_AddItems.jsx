import { AddFile } from "./props_control_compos/AddFile";
import { Select_Input } from "./props_control_compos/Select_Input";
import { TextArea } from "./props_control_compos/TextArea";
import { Inputs } from "./props_control_compos/Inputs";
import { SwitchCheckBox } from "../pages/authorization/SwitchCheckBox";
import { Radiobtn } from "./props_control_compos/Radiobtn";

export const FormikControl = (props) => {
  switch (props.control) {
    case "input":
      return <Inputs {...props} />;
    case "select":
      return <Select_Input {...props} />;
    case "textArea":
      return <TextArea {...props} />;
    case "addFile":
      return <AddFile {...props} />;
    case "checkbox":
      return <SwitchCheckBox {...props} />;
    case "radio":
      return <Radiobtn {...props} />;
  }
};
