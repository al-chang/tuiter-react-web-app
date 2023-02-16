const WhoToFollowListItem = (who) => {
  return `<li class="list-group-item p-0">
    <div
      class="d-flex justify-content-between align-items-center p-2"
    >
      <div class="d-flex justify-content-between align-items-center">
        <img
          src="${who.avatarIcon}"
          class="wd-profile-image rounded-circle"
        />
        <div class="d-inline-block ps-1">
          <p class="m-0 fw-bold">
            ${who.userName}
            <i class="fas fa-check-circle"></i>
          </p>
          <p class="m-0 text-secondary">@${who.handle}</p>
        </div>
      </div>
      <button type="button" class="btn btn-primary rounded-pill">
        Follow
      </button>
    </div>
  </li>`;
};

export default WhoToFollowListItem;
