import React, { useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import { Col } from "reactstrap";
import { role } from "../../Utils/AxiosUtils/API";

const AllRolesTable = dynamic(() => import("../../Components/Role/AllRolesTable"), {
  suspense: true,
});

const AllRoles = () => {
  const [isCheck, setIsCheck] = useState([]);
  return (
    <Col sm="12">
      <AllRolesTable url={role} moduleName="Role" isCheck={isCheck} setIsCheck={setIsCheck} />
    </Col>
  );
};

export default AllRoles;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
