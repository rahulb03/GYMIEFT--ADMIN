import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomePageSixForm from '../../Components/HomePages/HomePage6';

const ThemeSix = () => {
    return (
        <HomePageSixForm title={"Berlin"} />
    )
}

export default ThemeSix
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });