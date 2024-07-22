import React, { useContext } from "react";
import { Col } from "reactstrap";
import { Field, Form, Formik } from "formik";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactstrapInput } from "../../Components/ReactstrapFormik";
import Btn from "../../Elements/Buttons/Btn";
import { UpdatePasswordSchema } from "../../Utils/Hooks/Auth/useUpdatePassword";
import AuthLayout from "../../Layout/AuthLayout";
import SettingContext from "../../Helper/SettingContext";

const UpdatePassword = () => {
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
          <h4>{t("UpdatePassword")}</h4>
        </div>
        <div className="input-box">
          <Formik
            initialValues={{
              password: "",
              password_confirmation: "",
            }}
            validationSchema={UpdatePasswordSchema}
            onSubmit={() => {
              router.push('/auth/login')
            }}>
            {() => (
              <Form className="row g-2">
                <Col sm="12">
                  <Field name="password" component={ReactstrapInput} type="password" className="form-control" id="password" placeholder="Password" label="Password" />
                </Col>
                <Col sm="12">
                  <Field name="password_confirmation" component={ReactstrapInput} type="password" className="form-control" id="password" placeholder="Confirm Password" label="ConfirmPassword" />
                </Col>
                <Col sm="12">
                  <Btn title="Submit" className="btn btn-animation w-100 justify-content-center" type="submit" color="false" />
                </Col>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
UpdatePassword.getLayout = (UpdatePassword) => <AuthLayout>{UpdatePassword}</AuthLayout>;
export default UpdatePassword;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
