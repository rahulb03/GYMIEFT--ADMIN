import React, { useState } from 'react'
import { Col } from 'reactstrap';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { currency } from '../../Utils/AxiosUtils/API';
import AllCurrency from '../../Components/Currency/AllCurrency';

const Currency = () => {
    const [isCheck, setIsCheck] = useState([]);
    return (
        <Col sm="12">
            <AllCurrency url={currency} moduleName="Currency" isCheck={isCheck} setIsCheck={setIsCheck} />
        </Col>
    )
}

export default Currency
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });