import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "reactstrap";
import ConvertPermissionArr from "../Utils/CustomFunctions/ConvertPermissionArr";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SettingContext from "../Helper/SettingContext";
import { replacePath } from "../Utils/CustomFunctions/ReplacePath";

const Layout = (props) => {
  const { state } = useContext(SettingContext)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mode, setMode] = useState(false);
  const [ltr, setLtr] = useState(true);
  const router = useRouter();
  const path = router.pathname;
  let data1 = {};
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) data1 = localStorage.getItem("account") && JSON.parse(localStorage.getItem("account"));
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    mode ? document.body.classList.add("dark-only") : document.body.classList.remove("dark-only");
  }, [mode, ltr]);
  useEffect(() => {
    const securePaths = mounted && ConvertPermissionArr(data1?.permissions);

    if (mounted && !securePaths.find((item) => item?.name == replacePath(path)?.split("/")[1] || replacePath(path) === "/")) {
      router.push("/403");
    }
  }, [data1]);
  return (
    <>
      <Head>
        <title>{(state.setTitle) && (state?.setTagline) ? `${state.setTitle} | ${state?.setTagline}` : "FastKart Marketplace: Where Vendors Shine Together."}</title>
        <link rel="shortcut icon" href={state?.setFavicon} />
      </Head>
      <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} setMode={setMode} setLtr={setLtr} settingData={'settingData'} />
        <div className="page-body-wrapper">
          <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
          <div className="page-body">
            <Container fluid={true}>
              {props.children}
            </Container>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
