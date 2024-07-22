import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { Col } from "reactstrap";
import AllCouponTable from "../../Components/Coupon/AllCouponTable";
import { coupon } from "../../Utils/AxiosUtils/API";

const AllCoupon = () => {
  const [isCheck, setIsCheck] = useState([]);
  return (
    <Col sm="12">
      <AllCouponTable url={coupon} moduleName="Coupon" isCheck={isCheck} setIsCheck={setIsCheck} />
    </Col>
  );
};

export default AllCoupon;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
