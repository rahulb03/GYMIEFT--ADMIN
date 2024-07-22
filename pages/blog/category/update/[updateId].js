import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import CategoryForm from '../../../../Components/category/CategoryForm';
import { useTranslation } from 'next-i18next';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import TreeForm from '../../../../Components/category/TreeForm';
import usePermissionCheck from '../../../../Utils/Hooks/usePermissionCheck';
import TableTitle from '../../../../Components/Table/TableTitle';

const UpdateBlogCategory = () => {
    const router = useRouter();
    const [edit] = usePermissionCheck(["edit"], "category");
    const { t } = useTranslation("common");
    return (
        <>
            <Container fluid={true}>
                <Row >
                    <Col xl="4">
                        <Card>
                            <CardBody>
                                <TreeForm type={'post'} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl="8">
                        <Card>
                            {edit ? <CardBody>
                                {router?.query?.updateId && (
                                    <>
                                        <TableTitle moduleName="UpdateCategory" onlyTitle={true} />
                                        <CategoryForm updateId={router?.query?.updateId} type={'post'} />
                                    </>
                                )}
                            </CardBody>
                                : <h1>{t("NoPermission")}</h1>}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default UpdateBlogCategory
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });