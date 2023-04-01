import React from "react";
import "./post-summary-item.css";

const PostSummaryItem = ({
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
    <li className="list-group-item d-flex justify-content-between">
      <div className="d-flex flex-column">
        <p className="m-0 text-secondary">{post.topic}</p>
        <p className="fw-bold m-0">
          {post.username}
          <i className="fas fa-check-circle"></i>
          <span className="fw-normal text-secondary">- {post.time}</span>
        </p>
        <p className="fw-bold m-0">{post.title}</p>
      </div>
      <img
        src={`/images/${post.image}`}
        className="wd-tweet-image rounded"
        alt="tweet"
      />
    </li>
  );
};
export default PostSummaryItem;
