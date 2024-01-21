<<<<<<< HEAD
import { Field } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { Chips } from "../../general_compo/spinners&chips/Chips";
import { handleOnChange } from "../../pages/2-product/add_or_edit_product/Get_Items_dropdowns";
import { NavLink } from "react-router-dom";

export const MultiSelect_Input = (props) => {
  const {
    chips,
    setChips,
    label,
    option,
    name,
    addBtnPath,
    dynamicPath,
    idOfParent,
    addBtnOption,
    selectedItems,
    customAnimatedClass,
  } = props;

  const [searchedOption, setSearchedOption] = useState();
  const [showOption, setShowOption] = useState(false);

  useEffect(() => {
    setSearchedOption(option);
    setChips(selectedItems);
  }, [option, idOfParent]);

  useEffect(() => {
    //برای اینکه وقتی رو صفحه کلیک میکنیم
    // لیست برند و گارانتی بسته بشه
    document.querySelector("body").addEventListener("click", () => {
      setShowOption(false);
    });
  }, []);

  return (
    <div>
      <div className="p-2 ">
        <div className={`input-group mb-1 ${customAnimatedClass}`}>
          <span className="input-group-text w_6rem customWidth-112">
            {label}
          </span>
          <Field>
            {() => {
=======
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
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
              return (
                <Field
                  as="text"
                  className="form-control form-select"
                  name={name}
                >
                  {
<<<<<<< HEAD
                    <div className="d-flex justify-content-between">
                      <div>
                        <div>
                          <input
                            name={name}
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
                            }}
                          />
                        </div>
                      </div>
                      {addBtnOption && (
                        <NavLink
                          className="text-decoration-none"
                          to={
                            dynamicPath
                              ? `${addBtnPath}/${idOfParent}`
                              : addBtnPath
                          }
                        >
                          <button className="btn btn-sm btn-light d-flex">
                            <i className="fas fa-plus text-success"></i>
                          </button>
                        </NavLink>
                      )}
=======
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
>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
                    </div>
                  }
                </Field>
              );
            }}
          </Field>
        </div>
<<<<<<< HEAD
        <Field>
          {({ form }) => {
            return (
              <ul
                className={`${
                  showOption ? "" : "d-none bg-danger"
                }list-unstyled searchedOption`}
              >
                {searchedOption?.map((so) => (
                  <li
                    key={Math.random()}
                    className="pointer"
                    onClick={() => {
                      handleOnChange(
                        so.id,
                        form,
                        option,
                        chips,
                        setChips,
                        name
                      );
                    }}
                  >
                    {so.value || so.title}
                  </li>
                ))}
              </ul>
            );
          }}
        </Field>
      </div>
=======
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

>>>>>>> 8edf4fa303a80e50965e9afeda69a368be9ebd3f
      <Chips chips={chips} setChips={setChips} />
    </div>
  );
};
