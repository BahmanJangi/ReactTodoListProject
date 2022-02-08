import { createContext } from "react";

const TodoContext = createContext({
  todos: [],
  todo: "",
  filteredTasks: [],
  searchMode: false,
  handleCreateNewTodo: () => {},
  handleCompletedTodo: () => {},
  handleDeleteTodo: () => {},
  handleTodoInput: () => {},
  handleSearchTasks: () => {},
  handleSearchMode: () => {},
  handleEditTodo: () => {},
});

export default TodoContext;
