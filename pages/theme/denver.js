import HomePageNineForm from "../../Components/HomePages/HomePage9";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ThemeNine = () => {
    return (
        <HomePageNineForm title={"Denver"} />
    )
}
export default ThemeNine
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });