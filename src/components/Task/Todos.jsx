import React, { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "./../../context/todoContext";

const Todos = () => {
  const context = useContext(TodoContext);
  const {
    todos,
    handleDeleteTodo,
    handleCompletedTodo,
    handleEditTodo,
    searchMode,
    filteredTasks,
  } = context;

  let works = [];
  let todosContent = "";
  if (!searchMode) {
    works = filteredTasks;
    todosContent = "چیزی پیدا نشد";
  } else {
    works = todos;
    todosContent = "هیچ کاری برای امروز ثبت نشده دوست من";
  }

  return (
    <div className="col-xs-12 dataViewArea mx-auto">
      <ul className="list-group list-group-flush mx-auto">
        {works.length > 0 ? (
          works.map((task) => (
            <li
              key={task.id}
              className={
                task.completed ? "list-group-item checked" : "list-group-item"
              }
            >
              <Todo
                text={task.text}
                isCompleted={task.completed}
                deleted={() => handleDeleteTodo(task.id)}
                completed={() => handleCompletedTodo(task.id)}
                edited={() => handleEditTodo(task.id)}
              />
            </li>
          ))
        ) : (
          <div className="alert alert-light mt-3  userSelect">
            <p className="text-center">{`${todosContent}`}</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Todos;
