import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CategoryForm from "../../../Components/category/CategoryForm";
import TreeForm from "../../../Components/category/TreeForm";
import TableTitle from "../../../Components/Table/TableTitle";

const CategoryUpdate = () => {
  const router = useRouter();
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col xl="4">
            <Card>
              <CardBody>
                <TableTitle moduleName="Category" type={'product'} />
                <TreeForm type={'product'} />
              </CardBody>
            </Card>
          </Col>
          <Col xl="8">
            <Card><CardBody>
              <TableTitle moduleName="Update Category" onlyTitle={true} />
              {router?.query?.updateId && (
                <CategoryForm updateId={router?.query?.updateId} type={'product'} />
              )}
            </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoryUpdate;
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });