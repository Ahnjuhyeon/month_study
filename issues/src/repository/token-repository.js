const ACCESS_TOKEN = "access_token";

const TokenRepository = {
  setToken(token) {
    localStorage.setItem(ACCESS_TOKEN, token);
    console.log("토큰이 설정되었습니다. 토큰:", token);
  },
  getToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  },
  deleteToken() {
    localStorage.removeItem(ACCESS_TOKEN);
  },
};
export default TokenRepository;
