import React from "react";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="m-3">
      <ul class="nav nav-pills justify-content-center">
        <li class="nav-item">
          <NavLink
            to={"/"}
            className={"nav-link"}
            exact
            activeClassName="active"
            activeStyle={{ color: "white" }}
          >
            کارهای روزمره
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            to={"/about"}
            className={"nav-link"}
            activeStyle={{ color: "white" }}
          >
            درباره ما
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
