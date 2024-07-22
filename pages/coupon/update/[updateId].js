import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CouponForm from "../../../Components/Coupon/CouponForm";

const CouponUpdate = () => {
  const router = useRouter();
  return (
    router?.query?.updateId && (
      <CouponForm updateId={router?.query?.updateId} title={"UpdateCoupon"} />
    )
  );
};

export default CouponUpdate;
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
