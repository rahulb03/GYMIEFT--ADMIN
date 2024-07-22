import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomePageFiveForm from '../../Components/HomePages/HomePage5';

const ThemeFive = () => {
    return (
        <HomePageFiveForm title={"Madrid"} />
    )
}

export default ThemeFive
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });