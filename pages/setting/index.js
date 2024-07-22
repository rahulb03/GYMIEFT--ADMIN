import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SettingForm from "../../Components/Setting/SettingForm";

const Setting = () => {

  return <SettingForm title={"Settings"} />;
};

export default Setting;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
