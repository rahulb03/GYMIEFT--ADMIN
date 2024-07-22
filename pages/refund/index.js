import React from 'react'
import { RefundAPI } from '../../Utils/AxiosUtils/API';
import AllRefundTable from '../../Components/Refund/AllRefundTable';
import { Col } from 'reactstrap';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Refund = () => {
    return (
        <Col sm="12">
            <AllRefundTable onlyTitle={true} url={RefundAPI} moduleName="Refund" />
        </Col>
    );
}

export default Refund
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });