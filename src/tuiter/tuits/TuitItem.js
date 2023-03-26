import React from "react";
import "./tuit-item.css";
import TuitStats from "./TuitStats";

const TuitItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "tesla.png",
  },
}) => {
  return (
    <li className="list-group-item d-flex">
      <div className="w-10 me-4">
        <img
          src={post.image}
          alt="profile"
          className="wd-profile-image rounded-circle"
        />
      </div>
      <div>
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
