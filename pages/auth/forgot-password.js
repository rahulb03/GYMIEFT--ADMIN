import React, { useContext } from "react";
import { Col } from "reactstrap";
import { Field, Form, Formik } from "formik";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactstrapInput } from "../../Components/ReactstrapFormik";
import Btn from "../../Elements/Buttons/Btn";
import { ForgotPasswordSchema } from "../../Utils/Hooks/Auth/useForgotPassword";
import AuthLayout from "../../Layout/AuthLayout";
import SettingContext from "../../Helper/SettingContext";
import Head from "next/head";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const { t } = useTranslation("common");
  const { state } = useContext(SettingContext)
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{(state.setTitle) && (state?.setTagline) ? `${state.setTitle} | ${state?.setTagline}` : "FastKart Marketplace: Where Vendors Shine Together."}</title>
        <link rel="shortcut icon" href={state?.setFavicon} />
      </Head>
      <div className="box-wrapper">
        <div className="log-in-title">
          <h4>{t("ForgotPassword")}</h4>
        </div>
        <div className="input-box">
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={ForgotPasswordSchema}
            onSubmit={(values) => router.push('/auth/otp-verification')}>
            {() => (
              <Form className="row g-2">
                <Col sm="12">
                  <Field name="email" component={ReactstrapInput} className="form-control" id="email" placeholder="Email Address" label="EmailAddress" />
                </Col>
                <Col sm="12">
                  <Btn title="SendEmail" className="btn btn-animation w-100 justify-content-center" type="submit" color="false" />
                </Col>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
ForgotPassword.getLayout = (ForgotPassword) => <AuthLayout>{ForgotPassword}</AuthLayout>;
export default ForgotPassword;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
