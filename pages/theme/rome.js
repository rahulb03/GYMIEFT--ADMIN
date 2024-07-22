import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomePageFourForm from '../../Components/HomePages/HomePage4';

const ThemeFour = () => {
    return (
        <HomePageFourForm title={"Rome"} />
    )
}

export default ThemeFour
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });