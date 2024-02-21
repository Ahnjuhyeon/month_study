import { axiosLoginInstance } from "./core";

const PATH = "/todo/user";

const AuthApi = {
  //sign-in
  async signIn(inform) {
    const res = await axiosLoginInstance().post(PATH + `/sign-in`, inform);
    console.log(res);
    return res.data;
  },

  //sign-up
  async signUp(inform) {
    const res = await axiosLoginInstance().post(`${PATH}/sign-up`, inform);
    console.log(res);
    return res.data;
  },

  // logout
  async logOut() {
    const res = await axiosLoginInstance().post(PATH + "/sign-out");
    return res.data;
  },
};
export default AuthApi;
