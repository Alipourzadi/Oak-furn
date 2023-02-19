import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import useMediaQuery from "../hooks/useMediaQuery";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BrowserLayout = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width:768px)");
  const [isScroll, setIsScroll] = useState<boolean>(
    window.scrollY == 0 ? false : true
  );

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY == 0) {
        setIsScroll(false);
      }
      if (window.scrollY != 0) setIsScroll(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [window.scrollY]);
  return (
    <>
      <Header isAboveMediumScreen={isAboveMediumScreen} isScroll={isScroll} />
      <div>
        <Outlet />
      </div>
      <Footer />
      {isAboveMediumScreen && (
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          className="text-zinc-400"
        />
      )}
      {!isAboveMediumScreen && (
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          className="text-zinc-400"
        />
      )}
    </>
  );
};

export default BrowserLayout;
