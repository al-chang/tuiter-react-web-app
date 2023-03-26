import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
  const whoArray = useSelector((state) => state.who);
  return (
    <ul className="list-group">
      <li className="list-group-item fw-bold">Who to follow</li>
      {whoArray.map((user) => (
        <WhoToFollowListItem key={user._id} who={user} />
      ))}
    </ul>
  );
};

export default WhoToFollowList;
