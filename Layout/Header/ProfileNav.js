import React, { useContext, useState } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi";
import { Media } from "reactstrap";
import Cookies from "js-cookie";
import { RiArrowDownSLine, RiQuestionLine, RiUserLine } from "react-icons/ri";
import AccountContext from "../../Helper/AccountContext";
import Avatar from "../../Components/CommonComponent/Avatar";
import { useQuery } from "@tanstack/react-query";
import { LogoutAPI } from "../../Utils/AxiosUtils/API";
import request from "../../Utils/AxiosUtils";
import Btn from "../../Elements/Buttons/Btn";
import ShowModal from "../../Elements/Alerts&Modals/Modal";

const ProfileNav = ({ isComponentVisible, setIsComponentVisible }) => {
  const { t } = useTranslation("common");
  const [modal, setModal] = useState(false)
  const router = useRouter();
  const { accountData, accountContextData } = useContext(AccountContext)
  const isStateData = accountContextData.image && Object?.keys(accountContextData.image).length > 0 || accountContextData.image == ''
  const { data, isLoading, refetch, fetchStatus } = useQuery([LogoutAPI], () => request({ url: LogoutAPI }), {
    refetchOnWindowFocus: false, enabled: false
  })
  const handelLogout = () => {
    refetch();
    Cookies.remove("uat");
    Cookies.remove("ue");
    Cookies.remove("account");
    localStorage.removeItem("account")
    localStorage.removeItem("role");
    router.push("/auth/login");
  }
  return (
    <>
      <li className="profile-nav onhover-dropdown pe-0 me-0">
        <Media className="profile-media" onClick={() => setIsComponentVisible((prev) => prev !== "account" ? "account" : "")}>
          <Avatar data={isStateData ? accountContextData.image : accountData?.profile_image} name={accountData} customeClass={'rounded-circle'} />
          <Media body className="user-name-hide">
            <span>{accountContextData.name !== "" ? accountContextData.name : accountData?.name}</span>
            <p className="mb-0 font-roboto">
              {accountData ? accountData?.role?.name : t("Account")}
              <RiArrowDownSLine className="middle" />
            </p>
          </Media>
        </Media>
        <ul className={`profile-dropdown onhover-show-div ${isComponentVisible == "account" ? "active" : ""}`}>
          <li >
            <Link href={'/account'}>
              <RiUserLine />
              <span>{t("MyAccount")}</span>
            </Link>
          </li>
          <li>
            <a onClick={() => setModal(true)}>
              <FiLogOut />
              <span>{t("Logout")}</span>
            </a>
          </li>
        </ul>
      </li>
      <ShowModal open={modal} close={false}
        buttons={
          <>
            <Btn title="No" onClick={() => setModal(false)} className="btn--no btn-md fw-bold" />
            <Btn title="Yes" onClick={() => handelLogout()} loading={Number(fetchStatus == 'fetching')} className="btn-theme btn-md fw-bold"></Btn>
          </>
        }>
        <div className="remove-box">
          <RiQuestionLine className="icon-box wo-bg" />
          <h5 className="modal-title">{t("Confirmation")}</h5>
          <p>{t("Areyousureyouwanttoproceed?")} </p>
        </div>
      </ShowModal>
    </>
  );
};

export default ProfileNav;
