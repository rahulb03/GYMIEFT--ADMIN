import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import FormWrapper from '../../Utils/HOC/FormWrapper';
import CurrencyForm from '../../Components/Currency/CurrencyForm';

const CreateCurrency = () => {
    return (
        <FormWrapper title="AddCurrency">
            <CurrencyForm />
        </FormWrapper>
    )
}

export default CreateCurrency
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
