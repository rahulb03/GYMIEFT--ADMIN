import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomePageTwoForm from '../../Components/HomePages/HomePage2';

const ThemeTwo = () => {
  return (
    <HomePageTwoForm title={"Tokyo"} />
  )
}
export default ThemeTwo
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });