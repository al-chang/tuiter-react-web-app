import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item fw-bold">Who to follow</li>
      {who.map((user) => (
        <WhoToFollowListItem key={user._id} who={user} />
      ))}
    </ul>
  );
};

export default WhoToFollowList;
