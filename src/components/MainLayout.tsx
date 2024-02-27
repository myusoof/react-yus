import React, { Fragment } from "react";
import "./Mainlayoutcss.css";
import { Link } from "react-router-dom";
const MainLayout = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="item item1">1</div>
        <div className="item item2">1</div>
        <div className="item item3">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="item item4">1</div>
      </div>
    </Fragment>
  );
};

export default MainLayout;
