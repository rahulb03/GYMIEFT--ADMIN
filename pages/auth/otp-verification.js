import { useTranslation } from "next-i18next";
import React, { useContext, useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Input } from "reactstrap";
import AuthLayout from "../../Layout/AuthLayout";
import NoSsr from "../../Utils/HOC/NoSsr";
import SettingContext from "../../Helper/SettingContext";
import Head from "next/head";
import { useRouter } from "next/router";

const OtpVerification = () => {
  const { t } = useTranslation("common");
  const [seconds, setSeconds] = useState();
  const [otp, setOtp] = useState("");
  const { state } = useContext(SettingContext)
  const router = useRouter()
  const handleChange = (e) => {
    if (e.target.value.length <= 5 && !isNaN(Number(e.target.value))) {
      setOtp(e.target.value);
    }
  };

  useEffect(() => {
    otp && otp.length === 5 && router.push('/auth/update-password')
  }, [otp]);

  useEffect(() => {
    const otpTimer = Boolean(seconds) && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => {
      clearInterval(otpTimer);
    };
  }, [seconds]);
  return (
    <>
      <Head>
        <title>{(state.setTitle) && (state?.setTagline) ? `${state.setTitle} | ${state?.setTagline}` : "FastKart Marketplace: Where Vendors Shine Together."}</title>
        <link rel="shortcut icon" href={state?.setFavicon} />
      </Head>
      <div className="box-wrapper">
        <div className="log-in-title">
          <h3 className="text-content">{t("PleasEnterTheOneTimePasswordToVerifyYourAccount")}</h3>
          <h5 className="text-content">
            A Code Has Been Sent
          </h5>
        </div>
        <div className="outer-otp">
          <div className="inner-otp">
            <Input type="text" maxLength="5" onChange={handleChange} value={otp} />
          </div>
        </div>
        <div className="send-box pt-4">
          {seconds ? (
            <h5>
              {t("PleaseWait")}
              <a className="theme-color fw-bold">
                {seconds} <NoSsr>{t("second(s)")}</NoSsr>3
              </a>
              {t("BeforeRequestingANewOneTimePassword(OTP)")}.
            </h5>
          ) : (
            <h5>
              {t("Didn'tGetTheOTP")} ?
              <a
                className="theme-color fw-bold"
                onClick={() => {
                  router.push('/auth/forgot-password')
                  setSeconds(60);
                }}>
                {' '}{t("ResendIt")}
              </a>
            </h5>
          )}
        </div>
      </div>
    </>
  );
};
OtpVerification.getLayout = (OtpVerification) => <AuthLayout>{OtpVerification}</AuthLayout>;
export default OtpVerification;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
