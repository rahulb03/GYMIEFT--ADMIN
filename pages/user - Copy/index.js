import React, { useState } from "react";
import { Col } from "reactstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AllUsersTable from "../../Components/User/AllUsersTable";
import { UserExportAPI, UserImportAPI, user } from "../../Utils/AxiosUtils/API";

const AllUsers = () => {
  const [isCheck, setIsCheck] = useState([]);
  return (
    <Col sm="12">
      <AllUsersTable url={user} moduleName="User" isCheck={isCheck} setIsCheck={setIsCheck} importExport={{ importUrl: UserImportAPI, exportUrl: UserExportAPI }} />
    </Col>
  );
};

export default AllUsers;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
