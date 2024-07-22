import React from 'react'
import ThemeOptionForm from '../../Components/ThemeOption';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ThemeOption = () => {
    return <ThemeOptionForm title={"ThemeOption"} />;
}

export default ThemeOption
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });