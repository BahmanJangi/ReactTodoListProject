import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./../components/common/Header";
import AddNewTask from "./../components/Task/AddNewTask";
import { ToastContainer } from "react-toastify";
import Todos from "./../components/Task/Todos";
import About from "../components/common/About";
import Nav from "../components/common/Nav";

const App = () => {
  return (
    <div className="container">
      <div className="rtl text-center">
        <Nav />
        <Header appTitle={"مدیریت کارهای روزانه"} />
        <AddNewTask />
        <Switch>
          <Route path="/" exact component={Todos} />
          <Route path="/about" component={About} />
        </Switch>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
