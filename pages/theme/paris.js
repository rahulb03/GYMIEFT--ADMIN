import HomePageOneForm from '../../Components/HomePages/HomePage1'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ThemeOne = () => {
    return (
        <HomePageOneForm title={"Paris"} />
    )
}

export default ThemeOne
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });