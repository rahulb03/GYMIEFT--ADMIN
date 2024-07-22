import React from "react";
import { Col } from "reactstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AllFaqTable from '../../Components/Faq/index';
import { useState } from "react";
import { FaqAPI } from "../../Utils/AxiosUtils/API";

const FaqComponent = () => {
    const [isCheck, setIsCheck] = useState([]);
    return (
        <Col sm="12">
            <AllFaqTable url={FaqAPI} moduleName="Faq" isCheck={isCheck} setIsCheck={setIsCheck} />
        </Col>
    )
}
export default FaqComponent
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
