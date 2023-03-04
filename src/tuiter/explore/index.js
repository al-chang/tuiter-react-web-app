import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
  return (
    <>
      <div className="row">
        <div className="d-flex justify-content-between align-items-center">
          <div className="w-100 border border-grey rounded-pill me-4 p-2 d-flex align-items-center">
            <i className="fa far fa-search h-100"></i>
            <input
              placeholder="Search Tuiter"
              className="wd-search-input ms-2 border-0 w-100"
            />
          </div>
          <a href="explore-settings.html">
            <i className="fas fa-cog fa-2x" style={{ color: "#0d6efd" }}></i>
          </a>
        </div>
      </div>
      <ul className="nav mb-2 nav-tabs">
        <ul className="nav nav-tabs mt-2">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              For you
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Trending
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Sports
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a className="nav-link" href="/">
              Entertainment
            </a>
          </li>
        </ul>
      </ul>
      <div className="wd-cover-image w-100 position-relative mt-1">
        <h3 className="wd-cover-text position-absolute text-white fw-bold">
          SpaceX's Starship
        </h3>
      </div>
      <PostSummaryList />
    </>
  );
};
export default ExploreComponent;
