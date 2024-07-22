import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { Col } from "reactstrap";
import AllBlogsTable from "../../Components/Blog/AllBlogsTable";
import { blog } from "../../Utils/AxiosUtils/API";

const AllRoles = () => {
  const [isCheck, setIsCheck] = useState([]);
  return (
    <Col sm="12">
      <AllBlogsTable url={blog} moduleName="Blog" isCheck={isCheck} setIsCheck={setIsCheck} />
    </Col>
  );
};

export default AllRoles;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
