import React, { useState } from "react";
import { Col } from "reactstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AllTagsTable from "../../Components/Tag/AllTagsTable";
import { tag } from "../../Utils/AxiosUtils/API";

const AllTags = () => {
  const [isCheck, setIsCheck] = useState([]);
  return (
    <Col sm="12">
      <AllTagsTable url={tag} moduleName="Tag" isCheck={isCheck} setIsCheck={setIsCheck} type={"product"} />
    </Col>
  );
};

export default AllTags;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
