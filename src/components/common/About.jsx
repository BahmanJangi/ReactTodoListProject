import React from "react";

import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div class="card text-center">
      <div class="card-header">درباره سازنده</div>
      <div class="card-body">
        <h5 class="card-title">برنامه مدیریت کننده کارها </h5>
        <p class="card-text">
          این برنامه توسط مدیر ارشد تیم مایکروسافت مهندس{" "}
          <span style={{ color: "blue" }}>بهمن جنگی اقدم</span> و به سفارش رئیس
          شرکت مایکروسافت جناب مهندس{" "}
          <span style={{ color: "blue" }}>امین قنبرلو</span> تولید شده است.
        </p>
        <NavLink
          to={"/"}
          className={"nav-link"}
          exact
          activeClassName="active"
          activeStyle={{ color: "white" }}
        >
          <button className="btn btn-primary">بازگشت</button>
        </NavLink>
      </div>
      <div class="card-footer text-muted"> *منتظر بهتر از اینها هم باشید*</div>
    </div>
  );
};

export default About;
