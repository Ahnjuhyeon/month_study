// max length
const MAX_TITLE_LENGTH = 200;

export const skipTitleView = (listbody) => {
  if (listbody.length > MAX_TITLE_LENGTH) {
    return listbody.substring(0, MAX_TITLE_LENGTH) + "...";
  }
  return listbody;
};
