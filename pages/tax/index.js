import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from "react";
import { Col } from "reactstrap";
import AllTax from "../../Components/Tax/AllTax";
import { tax } from "../../Utils/AxiosUtils/API";

const AllRoles = () => {
  const [isCheck, setIsCheck] = useState([]);
  return (
    <Col sm="12">
      <AllTax url={tax} moduleName="Tax" isCheck={isCheck} setIsCheck={setIsCheck} />
    </Col>
  );
};

export default AllRoles;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
