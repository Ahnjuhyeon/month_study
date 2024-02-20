import { axiosLoginInstance } from "./core";

const PATH = "/todo/user";

const AuthApi = {
  //sign-in
  async signIn(email, pw) {
    const res = await axiosLoginInstance().post(PATH + `/sign-in`, email, pw);
    return res.data;
  },

  //sign-up
  async signUp(email, pw) {
    const res = await axiosLoginInstance().post(`${PATH}/sign-up`, email, pw);
    return res.data;
  },

  // logout
  async logOut() {
    const res = await axiosLoginInstance().post(PATH + "/sign-out");
    return res.data;
  },
};
export default AuthApi;
/*
email,pw
*/
