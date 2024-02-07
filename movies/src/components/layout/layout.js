import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
  // const isShowMenuBar = useRecoilValue(isMenuBarState);

  return (
    <>
      <>
        <Header />
        <Outlet />
        {/* <ScrollIcon /> */}
        <Footer />
      </>
    </>
  );
};

export default Layout;
