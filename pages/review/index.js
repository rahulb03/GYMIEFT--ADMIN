import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react'
import { Col } from 'reactstrap';
import AllReviewsTable from '../../Components/Reviews/index';
import { ReviewAPI } from '../../Utils/AxiosUtils/API';

const Reviews = () => {
    const [isCheck, setIsCheck] = useState([]);
    return (
        <Col sm="12">
            <AllReviewsTable url={ReviewAPI} moduleName="Reviews" onlyTitle={true} isCheck={isCheck} setIsCheck={setIsCheck} />
        </Col>
    )
}

export default Reviews
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });