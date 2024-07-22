import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import VendorDetails from '../../Components/WithdrawRequest/VendorDetails';

const WithdrawRequest = () => {
    return <VendorDetails />
}

export default WithdrawRequest
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });