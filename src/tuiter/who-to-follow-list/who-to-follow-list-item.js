import React from "react";
import "./who-to-follow-list-item.css";

const WhoToFollowListItem = ({
  who = { userName: "NASA", handle: "NASA", avatarIcon: "nasa.png" },
}) => {
  return (
    <li className="list-group-item p-0">
      <div className="d-flex justify-content-between align-items-center p-2">
        <div className="d-flex justify-content-between align-items-center">
          <img
            src={who.avatarIcon}
            className="wd-profile-image rounded-circle"
            alt="profile"
          />
          <div className="d-inline-block ps-1">
            <p className="m-0 fw-bold">
              {who.userName}
              <i className="fas fa-check-circle"></i>
            </p>
            <p className="m-0 text-secondary">@{who.handle}</p>
          </div>
        </div>
        <button type="button" className="btn btn-primary rounded-pill">
          Follow
        </button>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
