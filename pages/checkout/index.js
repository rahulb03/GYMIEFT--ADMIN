import Checkout from "../../Components/Pos/Checkout/Checkout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const MainCheckout = () => {
    return <Checkout />
};
export default MainCheckout;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });