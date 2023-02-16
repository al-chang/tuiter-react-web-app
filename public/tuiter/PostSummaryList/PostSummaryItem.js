const PostSummaryItem = (post) => {
  return `<li class="list-group-item d-flex justify-content-between">
    <div class="d-flex flex-column">
      <p class="m-0 text-secondary">${post.topic}</p>
      <p class="fw-bold m-0">
        ${post.userName}
        <i class="fas fa-check-circle"></i>
        <span class="fw-normal text-secondary">- ${post.time}</span>
      </p>
      <p class="fw-bold m-0">
        ${post.title}
      </p>
    </div>
    <img
      src="${post.image}"
      class="wd-tweet-image rounded"
    />
  </li>`;
};

export default PostSummaryItem;
