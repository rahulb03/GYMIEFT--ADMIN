import React, { useState } from "react";
import { Col } from "reactstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AttributesTable from "../../Components/Attribute/AttributesTable";
import { attribute } from "../../Utils/AxiosUtils/API";

const AllAttributes = () => {
  const [isCheck, setIsCheck] = useState([]);
  return (
    <Col sm="12">
      <AttributesTable url={attribute} moduleName="Attribute" isCheck={isCheck} setIsCheck={setIsCheck} />
    </Col>
  );
};

export default AllAttributes;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
