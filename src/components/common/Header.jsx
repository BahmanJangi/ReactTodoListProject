import React, { useContext } from "react";

import { Alert, Badge } from "react-bootstrap";

import TodoContext from "../../context/todoContext";

const Header = ({ appTitle }) => {
  const context = useContext(TodoContext);

  const { todos } = context;

  const completedTasks = todos.filter((t) => t.completed === true);

  let badgeStyle = "";

  if (todos.length >= 3) badgeStyle = "success";
  if (todos.length <= 2) badgeStyle = "warning";
  if (todos.length <= 1) badgeStyle = "danger";

  return (
    <div className="mx-auto userSelect">
      <div className="col-xs-12">
        <Alert variant="info">
          <h2>{appTitle}</h2>
        </Alert>
        <Alert variant="warning">
          <h5>
            تعداد کارهای ثبت شده{" "}
            <Badge pill bg={badgeStyle} text="dark">
              {todos.length}
            </Badge>{" "}
          </h5>
          <h5>
            تعداد کارهای انجام شده{" "}
            <Badge pill bg="primary" text="dark">
              {completedTasks.length}
            </Badge>{" "}
          </h5>
        </Alert>
      </div>
    </div>
  );
};

export default Header;
