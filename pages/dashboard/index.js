import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import MainDashboard from "../../Components/Dashboard";
import dynamic from "next/dynamic";

const MainDashboard = dynamic(()=> import("../../Components/Dashboard"), { ssr:false})

const dashboard = () => {
  return (
    <MainDashboard />
  )
};

export default dashboard;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
