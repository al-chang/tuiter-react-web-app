import React from "react";
import { useDispatch } from "react-redux";
import { likeTuit } from "./tuits-reducer";

const TuitStats = ({ _id, replies, retuits, likes, liked }) => {
  const dispatch = useDispatch();
  const likeTuitHandler = () => {
    dispatch(likeTuit(_id));
  };

  return (
    <div className="row">
      <div className="col">
        <button className="btn p-0 d-flex align-items-center" type="button">
          <i className="far fa-comment"></i>
          <span className="ms-1">{replies}</span>
        </button>
      </div>
      <div className="col">
        <button className="btn p-0 d-flex align-items-center" type="button">
          <i className="fas fa-retweet"></i>
          <span className="ms-1">{retuits}</span>
        </button>
      </div>
      <div className="col">
        <button
          className="btn p-0 d-flex align-items-center"
          type="button"
          onClick={likeTuitHandler}
        >
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
