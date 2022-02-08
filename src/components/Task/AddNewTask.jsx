import React, { useContext, useRef, useEffect, useState } from "react";

import TodoContext from "../../context/todoContext";
import { Button } from "react-bootstrap";

const AddNewTask = () => {
  const context = useContext(TodoContext);

  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    context.handleSearchMode();

    console.log("SearchMode", context.searchMode);
    console.log("IsChecked", isChecked);
  };

  const focusInput = useRef(null);
  useEffect(() => {
    focusInput.current.focus();
  });

  return (
    <div className="col-xs-12 dataArea">
      <div className="m-2 p-2">
        <form
          className=" justify-content-center"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="input-group">
            <span onClick={handleOnChange} title="حالت ورودی را انتخاب کنید">
              <input
                id="selectionMode"
                type="checkbox"
                checked={isChecked}
                data-toggle="toggle"
                data-on="بیاب"
                data-off="افزودن"
                data-onstyle="info"
                data-offstyle="success"
              />
            </span>
            <input
              id="inputText"
              ref={focusInput}
              type={"text"}
              className="form-control"
              placeholder={
                !isChecked ? "افزودن کار جدید" : "کار مورد نظرم را بیاب"
              }
              onChange={
                !isChecked ? context.handleTodoInput : context.handleSearchTasks
              }
              value={
                !isChecked
                  ? context.todo
                  : document.getElementById("inputText").value
              }
            />

            <div className="input-group-prepend">
              <Button
                type="submit"
                onClick={
                  !isChecked
                    ? context.handleCreateNewTodo
                    : context.handleSearchTasks
                }
                variant={!isChecked ? "success" : "info"}
                size="sm"
                className={!isChecked ? "fa fa-plus-square" : "fa fa-search"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewTask;
