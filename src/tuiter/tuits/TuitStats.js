import React from "react";

const TuitStats = ({ replies, retuits, likes, liked }) => {
  return (
    <div className="row">
      <div className="col">
        <button className="btn p-0" type="button">
          <i className="far fa-comment"></i>
          <span className="ms-1">{replies}</span>
        </button>
      </div>
      <div className="col">
        <button className="btn p-0" type="button">
          <i className="fas fa-retweet"></i>
          <span className="ms-1">{retuits}</span>
        </button>
      </div>
      <div className="col">
        <button className="btn p-0" type="button">
          <i className={`fa-heart ${liked ? "red-icon fas" : "far"}`}></i>
          <span className="ms-1">{likes}</span>
        </button>
      </div>
      <div className="col">
        <button className="btn p-0" type="button">
          <i className="fas fa-share-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default TuitStats;
