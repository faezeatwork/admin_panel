import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { Chips } from "../../general_compo/spinners&chips/Chips";

export const MultiSelect_Input = (props) => {
  const { chips, setChips, label, option, name } = props;
  const [searchedOption, setSearchedOption] = useState();
  const [showOption, setShowOption] = useState(false);
  useEffect(() => {
    setSearchedOption(option);
  }, [option]);
  useEffect(() => {
    console.log(console.log(searchedOption));
  }, [searchedOption]);
  return (
    <div>
      <div className="p-2">
        <div className="input-group mb-1 ">
          <span className="input-group-text w_6rem customStyle">{label}</span>
          <Field>
            {({ form }) => {
              return (
                <Field
                  as="text"
                  className="form-control form-select"
                  name={name}
                >
                  {
                    <div>
                      <div>
                        <input
                          className="w-100 border-none outline_none"
                          // type="text"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowOption(!showOption);
                          }}
                          onChange={(e) => {
                            setSearchedOption(
                              option.filter((o) =>
                                o.value.includes(e.target.value)
                              )
                            );
                            console.log(searchedOption);
                          }}
                        />
                      </div>
                    </div>
                  }
                </Field>
              );
            }}
          </Field>
        </div>
        <ul
          className={`${
            showOption ? "" : "d-none bg-danger"
          }list-unstyled searchedOption`}
        >
          {searchedOption?.map((so) => (
            <li
              className="pointer"
              onClick={() => {
      
                setChips((chip) => [
                  ...chip.filter((c) => c.id != so.id),
                  { id: so.id, value: so.value },
                ]);
              }}
            >
              {so.value}
            </li>
          ))}
        </ul>
      </div>

      <Chips chips={chips} setChips={setChips} />
    </div>
  );
};
