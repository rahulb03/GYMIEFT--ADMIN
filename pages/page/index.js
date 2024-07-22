import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useState } from 'react'
import { Col } from 'reactstrap'
import { PagesAPI } from '../../Utils/AxiosUtils/API';
import AllPagesTable from '../../Components/Pages';

const Pages = () => {
    const [isCheck, setIsCheck] = useState([]);
    return (
        <Col sm="12">
            <AllPagesTable url={PagesAPI} moduleName="Page" isCheck={isCheck} setIsCheck={setIsCheck} />
        </Col>
    )
}

export default Pages
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });