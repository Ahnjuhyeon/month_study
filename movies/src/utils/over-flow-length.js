const MAX_TITLE_LENGTH = 20;
const MAX_OVERVIEW_LENGTH = 80;
//영화제목
export const skipTitleView = (title) => {
  if (title.length > MAX_TITLE_LENGTH) {
    return title.substring(0, MAX_TITLE_LENGTH) + "...";
  }
  return title;
};

//영화내용
export const skipOverView = (overview) => {
  if (overview.length > MAX_OVERVIEW_LENGTH) {
    return overview.substring(0, MAX_OVERVIEW_LENGTH) + "...";
  }
  return overview;
};
