import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = (tuit) => {
  const dispatch = useDispatch();

  return (
    <div className="row">
      <div className="col">
        <button className="btn p-0 d-flex align-items-center" type="button">
          <i className="far fa-comment"></i>
          <span className="ms-1">{tuit.replies}</span>
        </button>
      </div>
      <div className="col">
        <button className="btn p-0 d-flex align-items-center" type="button">
          <i className="fas fa-retweet"></i>
          <span className="ms-1">{tuit.retuits}</span>
        </button>
      </div>
      <div className="col">
        <button
          className="btn p-0 d-flex align-items-center"
          type="button"
          onClick={() =>
            dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
          }
        >
          <i className={`fa-heart ${tuit.liked ? "red-icon fas" : "far"}`}></i>
          <span className="ms-1">{tuit.likes}</span>
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
