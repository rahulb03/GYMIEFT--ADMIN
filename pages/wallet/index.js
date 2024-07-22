import React, { useRef, useState } from 'react'
import { Col, Row } from 'reactstrap'
import { Form, Formik } from 'formik'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SelectUser from '../../Components/Wallet/SelectUser'
import SeleteWalletPrice from '../../Components/Wallet/SeleteWalletPrice'
import UserTransationsTable from '../../Components/Wallet/UserTransationsTable'
import { UserTransations } from '../../Utils/AxiosUtils/API'
import { YupObject, nameSchema } from '../../Utils/Validation/ValidationSchemas'
import { RiWallet2Line } from 'react-icons/ri'
import usePermissionCheck from '../../Utils/Hooks/usePermissionCheck'

const Wallet = () => {
    const [isValue, setIsValue] = useState("")
    const [credit, debit] = usePermissionCheck(["credit", "debit"]);
    const { t } = useTranslation("common");
    const refRefetch = useRef()

    return (
        <div className='save-back-button'>
            <Formik
                initialValues={{
                    consumer_id: "",
                    showBalance: '',
                    balance: ''
                }}
                validationSchema={YupObject({ consumer_id: nameSchema })}
                onSubmit={(values) => {
                    if (isValue == "credit") {
                        // Put Your Logic Here
                    } else {
                        //   Put Your Logic Here
                    }
                }}>
                {({ values, handleSubmit, setFieldValue }) => (
                    <>
                        <Form>
                            <Row>
                                <SelectUser title={t("SelectCustomer")} values={values} setFieldValue={setFieldValue} role="consumer" name={'consumer_id'} userRole={''} />
                                <SeleteWalletPrice values={values} setFieldValue={setFieldValue} handleSubmit={handleSubmit} setIsValue={setIsValue} title={t("Wallet")} description={t("WalletBalance")} selectUser={'consumer_id'} icon={<RiWallet2Line />} isCredit={credit} isDebit={debit} />
                            </Row>
                        </Form>
                        <Col sm="12">
                            {values['consumer_id'] !== '' && < UserTransationsTable url={UserTransations} moduleName="UserTransations" setFieldValue={setFieldValue} userIdParams={true} ref={refRefetch} dateRange={true} paramsProps={{ consumer_id: values['consumer_id'] }} />}
                        </Col>
                    </>
                )}
            </Formik>
        </div>
    )
}

export default Wallet;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });