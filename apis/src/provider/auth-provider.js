import { createContext, useContext, useEffect, useState } from "react";
import TokenRepository from "../repository/token-repository";
import AuthApi from "../apis/auth";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(TokenRepository.getToken());
  useEffect(() => {
    const token = TokenRepository.getToken();
    if (token) {
      console.log(token);
      setAccessToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={[accessToken, setAccessToken]}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => {
  const [accessToken, setAccessToken] = useContext(AuthContext);

  const SignIn = async (inform) => {
    const res = await AuthApi.signIn(inform);
    setAccessToken(res.token);
    TokenRepository.setToken(res.token);
    console.log(res);
    return res;
  };

  const SignUp = async (inform) => {
    const res = await AuthApi.signUp(inform);
    return res;
  };

  const SignOut = async () => {
    await AuthApi.logOut();
    setAccessToken(null);
    TokenRepository.deleteToken();
  };
  return {
    accessToken,
    SignUp,
    SignIn,
    SignOut,
  };
};
