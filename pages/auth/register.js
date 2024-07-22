import { Form, Formik } from "formik";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { RegistrationInitialValues, RegistrationValidationSchema } from "../../Components/Auth/RegistrationFormObjects";
import UserAddress from "../../Components/Auth/UserAddress";
import UserContact from "../../Components/Auth/UserContact";
import UserPersonalInfo from "../../Components/Auth/UserPersonalInfo";
import Btn from "../../Elements/Buttons/Btn";
import AuthLayout from "../../Layout/AuthLayout";
import { YupObject } from "../../Utils/Validation/ValidationSchemas";
import { useRouter } from "next/router";

const VendorRegister = () => {
  const { t } = useTranslation("common");
  const router = useRouter()
  return (
    <div className="log-in-box">
      <div className="log-in-title">
        <h3>{"Welcome To Fastkart"}</h3>
        <h4>{"Setup Your Store Information"}</h4>
      </div>
      <div className="input-box">
        <Formik initialValues={RegistrationInitialValues}
          validationSchema={YupObject({
            ...RegistrationValidationSchema,
          })}
          onSubmit={(values) => {
            values["status"] = 1;
            router.push("/auth/login")
          }}
        >
          {({ values, errors }) => (
            <Form className="row g-4">
              <UserPersonalInfo />
              <UserAddress values={values} />
              <UserContact />
              <div className="col-12">
                <Btn title="Submit" className="btn btn-animation w-100 justify-content-center" type="submit" color="false" />
                <div className="sign-up-box">
                  <h4>{t("Alreadyhaveanaccount?")}</h4>
                  <Link href="/auth/login">{t("Login")}</Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
VendorRegister.getLayout = (VendorRegister) => <AuthLayout customCol>{VendorRegister}</AuthLayout>;
export default VendorRegister;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
