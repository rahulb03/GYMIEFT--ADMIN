import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";
import { Col } from "reactstrap";
import AllStoresTable from "../../Components/Store/AllStoresTable";
import { store } from "../../Utils/AxiosUtils/API";

const AllStores = () => {
  const [isCheck, setIsCheck] = useState([]);
  return (
    <Col sm="12">
      <AllStoresTable url={store} moduleName="Store" isCheck={isCheck} setIsCheck={setIsCheck} />
    </Col>
  );
};

export default AllStores;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
