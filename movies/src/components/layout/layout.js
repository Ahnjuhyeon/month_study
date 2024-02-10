import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import Banner from "../../pages/home-page/components/banner";

const Layout = () => {
  // const isShowMenuBar = useRecoilValue(isMenuBarState);

  return (
    <>
      <>
        <Header />
        <Banner />
        <Outlet />
        {/* <ScrollIcon /> */}
        <Footer />
      </>
    </>
  );
};

export default Layout;
