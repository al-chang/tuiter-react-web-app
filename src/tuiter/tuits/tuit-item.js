import React from "react";
import "./tuit-item.css";
import TuitStats from "./TuitStats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";

const TuitItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item d-flex">
      <div className="w-10 me-4">
        <img
          src={post.image}
          alt="profile"
          className="wd-profile-image rounded-circle"
        />
      </div>
      <div className="w-100">
        <i
          className="bi bi-x-lg float-end"
          onClick={() => deleteTuitHandler(post._id)}
        ></i>
        <div className="d-inline-block">
          <p className="m-0 fw-bold d-inline-block">
            {post.userName}
            <i className="fas ms-1 fa-check-circle"></i>
          </p>
          <p className="m-0 ms-1 text-secondary d-inline-block">
            {post.handle}
          </p>
          <p className="m-0 ms-1 text-secondary d-inline-block">
            \00B7 {post.time}
          </p>
        </div>
        <p>{post.tuit}</p>
        <TuitStats {...post} />
      </div>
    </li>
  );
};
export default TuitItem;
