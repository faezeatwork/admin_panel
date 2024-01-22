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
              return (
                <Field
                  as="text"
                  className="form-control form-select"
                  name={name}
                >
                  {
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
                    </div>
                  }
                </Field>
              );
            }}
          </Field>
        </div>
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
      <Chips chips={chips} setChips={setChips} />
    </div>
  );
};
