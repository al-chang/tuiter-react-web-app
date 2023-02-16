import explorePosts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
  return `<ul class="list-group">${explorePosts
    .map((post) => PostSummaryItem(post))
    .join("")}</ul>`;
};

export default PostSummaryList;
