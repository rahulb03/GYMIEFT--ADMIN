
import React, { useState } from "react";
import { Col } from "reactstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QuestionNAnswerAPI } from "../../Utils/AxiosUtils/API";
import QnATable from "../../Components/Q&A/QnATable";

const QuestionAndAnswer = () => {
    const [isCheck, setIsCheck] = useState([]);
    return (
        <Col sm="12">
            <QnATable url={QuestionNAnswerAPI} moduleName="Q&A" isCheck={isCheck} setIsCheck={setIsCheck} keyInPermission={'question_and_answer'} />
        </Col>
    );
};

export default QuestionAndAnswer;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
