import { useRef, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Card, CardBody, Col, Row } from "reactstrap";
import { useTranslation } from "next-i18next";
import TreeForm from "../../Components/category/TreeForm";
import CategoryForm from "../../Components/category/CategoryForm";
import { RiLockLine } from "react-icons/ri";
import TableTitle from "../../Components/Table/TableTitle";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";

const CategoryCreate = () => {
  const { t } = useTranslation("common");
  const [create] = usePermissionCheck(["create"]);
  const refRefetch = useRef()
  const [resetData, setResetData] = useState(false)
  return (
    <>
      <Row>
        <Col xl="4">
          <Card>
            <CardBody>
              <TableTitle moduleName="Category" type={'product'} onlyTitle={true} />
              <TreeForm type={"product"} ref={refRefetch} />
            </CardBody>
          </Card>
        </Col>
        <Col xl="8">
          <Card className={create ? "" : "nopermission-parent"}>
            <CardBody>
              <div className="title-header option-title">
                <h5>{t("AddCategory")}</h5>
              </div>
              <CategoryForm setResetData={setResetData} key={resetData} type={"product"} />
            </CardBody>
            <div className="no-permission"><div><RiLockLine /><h3>{t("NoPermission")}</h3></div></div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CategoryCreate;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });