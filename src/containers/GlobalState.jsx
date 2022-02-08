import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

import TodoContext from "./../context/todoContext";

const GlobalState = (props) => {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState("");

  const [filteredTodos, setFilteredTodos] = useState([...todos]);

  const [searchState, setSearchState] = useState(true);

  const handleSearchMode = () => {
    setSearchState(!searchState);
    setFilteredTodos([...todos]);
  };

  const handleTodoInput = (event) => {
    setTodo(event.target.value);
  };

  const handleSearchTasks = () => {
    const inputText = document.getElementById("inputText").value;
    const tasks = [...todos];
    let filteredWorks = [];
    const inputVal = inputText.toLowerCase();
    if (inputText !== "" && inputText !== " ") {
      filteredWorks = tasks.filter((t) =>
        t.text.toLowerCase().includes(inputVal)
      );
    } else {
      filteredWorks = [...todos];
    }

    setFilteredTodos(filteredWorks);
    console.log("FilteredTodos", filteredWorks);
    console.log("getFilteredTasks", filteredTodos);
  };

  const handleCreateNewTodo = () => {
    const tasks = [...todos];
    const task = {
      id: uuidv4(),
      text: todo,
      completed: false,
    };
    if (todo !== "" && todo !== " ") {
      tasks.push(task);
      setTodos(tasks);
      setTodo("");

      toast.success("کار جدید نظر با موفقیت اضافه شد.", {
        position: "top-right",
        closeOnClick: true,
        closeButton: true,
      });
    }
  };

  const handleEditTodo = (id) => {
    const tasks = [...todos];
    const todoIndex = tasks.findIndex((t) => t.id === id);
    const task = tasks[todoIndex];

    if (task.completed) {
      alert("امکان ویرایش کار انجام شده وجود ندارد");
    } else {
      let input_text_edit = prompt(
        "کار جدید مورد نظرتان را برای جایگزینی کار فعلی وارد کنید",
        task.text
      );
      if (input_text_edit && input_text_edit != task.text) {
        task.text = input_text_edit;
        tasks[todoIndex] = task;
        setTodos(tasks);
        setTodo("");
      }
    }

    toast.info("کار مورد نظر با موفقیت ویرایش شد.", {
      position: "top-right",
      closeOnClick: true,
      closeButton: true,
    });
  };

  const handleCompletedTodo = (id) => {
    const tasks = [...todos];
    const todoIndex = tasks.findIndex((t) => t.id === id);
    const task = tasks[todoIndex];
    task.completed = !task.completed;
    tasks[todoIndex] = task;
    setTodos(tasks);

    const completedTask = () => {
      toast.info("کار مورد نظر با موفقیت انجام شد.", {
        position: "top-right",
        closeOnClick: true,
        closeButton: true,
      });
    };

    const unCompletedTask = () => {
      toast.info("کار مورد نظر به لیست کارهای مانده اضافه شد.", {
        position: "top-right",
        closeOnClick: true,
        closeButton: true,
      });
    };
    {
      task.completed ? completedTask() : unCompletedTask();
    }
  };

  const handleDeleteTodo = (id) => {
    const tasks = [...todos];

    if (window.confirm("آیا از حذف کار مورد نظر اطمینان دارید؟")) {
      const filteredTodos = tasks.filter((t) => t.id !== id);
      setTodos(filteredTodos);
      if (!searchState) {
        // handleSearchTasks();
        setFilteredTodos(filteredTodos);
      }
      toast.error("کار مورد نظر با موفقیت حذف شد.", {
        position: "top-right",
        closeOnClick: true,
        closeButton: true,
      });
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        todo: todo,
        searchMode: searchState,
        filteredTasks: filteredTodos,
        handleCreateNewTodo: handleCreateNewTodo,
        handleCompletedTodo: handleCompletedTodo,
        handleDeleteTodo: handleDeleteTodo,
        handleTodoInput: handleTodoInput,
        handleSearchTasks: handleSearchTasks,
        handleSearchMode: handleSearchMode,
        handleEditTodo: handleEditTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default GlobalState;
