import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
            <div class="row">
              <div class="d-flex justify-content-between align-items-center">
              <div
                class="w-100 border border-grey rounded-pill me-4 p-2 d-flex align-items-center"
              >
                <i class="fa far fa-search h-100"></i>
                <input
                  placeholder="Search Tuiter"
                  class="wd-search-input ms-2 border-0 w-100"
                />
              </div>
              <a href="explore-settings.html">
                <i class="fas fa-cog fa-2x" style="color: #0d6efd"></i>
              </a>
            </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
           <ul class="nav nav-tabs mt-2">
            <li class="nav-item">
              <a class="nav-link active" href="#">For you</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
              <a class="nav-link" href="#">Entertainment</a>
            </li>
          </ul>
           </ul>
           <div class="wd-cover-image w-100 position-relative mt-1">
           <h3 class="wd-cover-text position-absolute text-white fw-bold">
             SpaceX's Starship
           </h3>
         </div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
