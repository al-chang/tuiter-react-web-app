import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationSidebar = () => {
  const location = useLocation();
  const active = location.pathname.split("/")[2];
  return (
    <>
      <ul className="list-group">
        <li className={`list-group-item text-center text-xl-start`}>
          <Link to="/tuiter/explore" className="text-decoration-none text-dark">
            <i className="fab fa-twitter"></i>
            <span className="d-none d-xl-inline">Tuiter</span>
          </Link>
        </li>
        <li
          className={`list-group-item text-center text-xl-start ${
            active === "home" ? "active" : ""
          }`}
        >
          <Link
            to="/tuiter/home"
            className={`text-decoration-none ${
              active === "home" ? "text-white" : "text-dark"
            }`}
          >
            <i className="fas fa-home"></i>
            <span className="d-none d-xl-inline">Home</span>
          </Link>
        </li>
        <li
          className={`list-group-item text-center text-xl-start ${
            active === "explore" || active === "" ? "active" : ""
          }`}
        >
          <Link
            to="/tuiter/explore"
            className={`text-decoration-none ${
              active === "explore" || active === "" ? "text-white" : "text-dark"
            }`}
          >
            <i className="fa fa-solid fa-hashtag"></i>
            <span className="d-none d-xl-inline">Explore</span>
          </Link>
        </li>
        <li
          className={`list-group-item text-center text-xl-start ${
            active === "notifications" ? "active" : ""
          }`}
        >
          <a
            href="/"
            className={`text-decoration-none ${
              active === "notifications" ? "text-white" : "text-dark"
            }`}
          >
            <i className="fa fa-solid fa-bell"></i>
            <span className="d-none d-xl-inline">Notifications</span>
          </a>
        </li>
        <li
          className={`list-group-item text-center text-xl-start ${
            active === "messages" ? "active" : ""
          }`}
        >
          <a
            href="/"
            className={`text-decoration-none ${
              active === "messages" ? "text-white" : "text-dark"
            }`}
          >
            <i className="fas fa-envelope"></i>
            <span className="d-none d-xl-inline">Messages</span>
          </a>
        </li>
        <li
          className={`list-group-item text-center text-xl-start ${
            active === "bookmarks" ? "active" : ""
          }`}
        >
          <a
            href="/"
            className={`text-decoration-none ${
              active === "bookmarks" ? "text-white" : "text-dark"
            }`}
          >
            <i className="fas fa-bookmark"></i>
            <span className="d-none d-xl-inline">Bookmarks</span>
          </a>
        </li>
        <li
          className={`list-group-item text-center text-xl-start ${
            active === "lists" ? "active" : ""
          }`}
        >
          <a
            href="/"
            className={`text-decoration-none ${
              active === "lists" ? "text-white" : "text-dark"
            }`}
          >
            <i className="fas fa-list"></i>
            <span className="d-none d-xl-inline">Lists</span>
          </a>
        </li>
        <li
          className={`list-group-item text-center text-xl-start ${
            active === "profile" ? "active" : ""
          }`}
        >
          <a
            href="/"
            className={`text-decoration-none ${
              active === "profile" ? "text-white" : "text-dark"
            }`}
          >
            <i className="fas fa-user"></i>
            <span className="d-none d-xl-inline">Profile</span>
          </a>
        </li>
        <li
          className={`list-group-item text-center text-xl-start ${
            active === "more" ? "active" : ""
          }`}
        >
          <a
            href="/"
            className={`text-decoration-none ${
              active === "more" ? "text-white" : "text-dark"
            }`}
          >
            <i className="fas fa-ellipsis-h"></i>
            <span className="d-none d-xl-inline">More</span>
          </a>
        </li>
      </ul>
      <div className="d-grid mt-2">
        <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">
          Tuit
        </a>
      </div>
    </>
  );
};
export default NavigationSidebar;
