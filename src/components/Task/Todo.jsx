import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Todo = ({ text, isCompleted, deleted, completed, edited }) => {
  return (
    <Fragment>
      <div className="widget-content p-0">
        <div className="widget-content-wrapper">
          <div className="widget-content-right flex1">
            <div className="widget-heading">
              {isCompleted ? <del>{text}</del> : text}
            </div>
          </div>
          <div className="widget-content-left">
            <button
              className="border-0 btn-transition btn btn-outline-success"
              onClick={completed}
            >
              <i className="fa fa-check"></i>
            </button>
            <button
              className="border-0 btn-transition btn btn-outline-info"
              onClick={edited}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="border-0 btn-transition btn btn-outline-danger"
              onClick={deleted}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Todo.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  deleted: PropTypes.func,
  completed: PropTypes.func,
};

export default Todo;
