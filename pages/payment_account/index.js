import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PaymentDetailsForm from "../../Components/PaymentDetails";
import FormWrapper from "../../Utils/HOC/FormWrapper";
const PaymentDetails = () => {
    return (
        <FormWrapper title="Payment Details">
            <PaymentDetailsForm />
        </FormWrapper>
    )
}
export default PaymentDetails
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });