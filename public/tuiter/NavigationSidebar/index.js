const NavigationSidebar = () => {
  return `
    <ul class="list-group">
    <li class="list-group-item text-center text-xl-start">
      <a href="/" class="text-decoration-none  text-white">
        <i class="fab fa-twitter"></i>
      </a>
    </li>
    <li class="list-group-item text-center text-xl-start">
      <a href="" class="text-decoration-none  text-white">
        <i class="fas fa-home"></i>
        <span class="d-none d-xl-inline">Home</span>
      </a>
    </li>
    <li class="list-group-item text-center text-xl-start active">
      <a href="" class="text-decoration-none text-white">
        <i class="fa fa-solid fa-hashtag"></i>
        <span class="d-none d-xl-inline">Explore</span>
      </a>
    </li>
    <li class="list-group-item text-center text-xl-start">
      <a href="" class="text-decoration-none  text-white">
        <i class="fa fa-solid fa-bell"></i>
        <span class="d-none d-xl-inline">Notifications</span>
      </a>
    </li>
    <li class="list-group-item text-center text-xl-start">
      <a href="" class="text-decoration-none  text-white">
        <i class="fas fa-envelope"></i>
        <span class="d-none d-xl-inline">Messages</span>
      </a>
    </li>
    <li class="list-group-item text-center text-xl-start">
      <a href="" class="text-decoration-none  text-white">
        <i class="fas fa-bookmark"></i>
        <span class="d-none d-xl-inline">Bookmarks</span>
      </a>
    </li>
    <li class="list-group-item text-center text-xl-start">
      <a href="" class="text-decoration-none  text-white">
        <i class="fas fa-list"></i>
        <span class="d-none d-xl-inline">Lists</span>
      </a>
    </li>
    <li class="list-group-item text-center text-xl-start">
      <a href="" class="text-decoration-none  text-white">
        <i class="fas fa-user"></i>
        <span class="d-none d-xl-inline">Profile</span>
      </a>
    </li>
    <li class="list-group-item text-center text-xl-start">
      <a href="" class="text-decoration-none  text-white">
        <i class="fas fa-ellipsis-h"></i>
        <span class="d-none d-xl-inline">More</span>
      </a>
    </li>
  </ul>
    <div class="d-grid mt-2">
      <a href="tweet.html"
         class="btn btn-primary btn-block rounded-pill">
         Tweet</a>
    </div>
  `;
};
export default NavigationSidebar;
