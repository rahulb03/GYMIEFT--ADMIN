import React from 'react';
import FormWrapper from '../../Utils/HOC/FormWrapper';
import AccountForm from '../../Components/Account';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Account = () => {
    return (
        <FormWrapper title="MyAccount">
            <AccountForm />
        </FormWrapper>
    )
}

export default Account
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });