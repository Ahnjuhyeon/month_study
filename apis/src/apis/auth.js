import { axiosInstance } from "./core";

const PATH = "/todo/user";

const AuthApi = {
  //sign-in
  async signIn(inform) {
    const res = await axiosInstance().post(PATH + `/sign-in`, inform);
    console.log(res);
    return res.data;
  },

  //sign-up
  async signUp(inform) {
    const res = await axiosInstance().post(`${PATH}/sign-up`, inform);
    return res.data;
  },

  // logout
  async logOut() {
    const res = await axiosInstance().post(PATH + "/sign-out");
    return res.data;
  },
};
export default AuthApi;
