import React, { useRef, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import TreeForm from '../../../Components/category/TreeForm'
import { useTranslation } from 'next-i18next'
import CategoryForm from '../../../Components/category/CategoryForm'

const BlogCategory = () => {
    const { t } = useTranslation("common");
    const [resetData, setResetData] = useState(false)
    const refRefetch = useRef()
    return (
        <Row >
            <Col xl="4">
                <Card >
                    <CardBody>
                        <TreeForm type={"post"} ref={refRefetch} />
                    </CardBody>
                </Card>
            </Col>
            <Col xl="8">
                <Card >
                    <CardBody>
                        <div className="title-header option-title">
                            <h5>{t("AddCategory")}</h5>
                        </div>
                        <CategoryForm key={resetData} type={"post"} setResetData={setResetData} />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}
export default BlogCategory
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });