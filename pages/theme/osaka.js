import HomePageThreeForm from '../../Components/HomePages/HomePage3';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ThemeThree = () => {
  return (
    <HomePageThreeForm title={"Osaka"} />
  )
}

export default ThemeThree
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });