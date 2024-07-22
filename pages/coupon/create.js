import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CouponForm from "../../Components/Coupon/CouponForm";

const AddNewCoupon = () => {
  return <CouponForm title={"CreateCoupons"} />;
};

export default AddNewCoupon;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
