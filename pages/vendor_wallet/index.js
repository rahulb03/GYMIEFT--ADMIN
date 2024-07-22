import React, { useContext, useEffect, useRef, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Form, Formik } from 'formik';
import { useTranslation } from 'next-i18next';
import { RiWallet2Line } from 'react-icons/ri';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SelectUser from '../../Components/Wallet/SelectUser';
import SeleteWalletPrice from '../../Components/Wallet/SeleteWalletPrice';
import { VendorTransations } from '../../Utils/AxiosUtils/API';
import WrappedVendor from '../../Components/Wallet/WrappedVendor';
import { YupObject, nameSchema } from '../../Utils/Validation/ValidationSchemas';
import usePermissionCheck from '../../Utils/Hooks/usePermissionCheck';
import AccountContext from '../../Helper/AccountContext';

const VendorWallet = () => {
    const { role, setRole } = useContext(AccountContext)
    useEffect(() => {
        setRole(JSON.parse(localStorage.getItem("role"))?.name)
    }, [])
    const { t } = useTranslation("common");
    const [credit, debit] = usePermissionCheck(["credit", "debit"]);
    const [isValue, setIsValue] = useState("");
    const refRefetch = useRef()

    return (
        <div className='save-back-button'>
            <Formik
                initialValues={{
                    vendor_id: "",
                    showBalance: '',
                    balance: ''
                }}
                validationSchema={YupObject({ vendor_id: nameSchema })}
                onSubmit={(values) => {
                    if (isValue == "credit") {
                        // Put Your Logic Here
                    } else {
                        // Put Your Logic Here
                    }
                }}>
                {({ values, handleSubmit, setFieldValue }) => (
                    <>
                        <Form>
                            <Row>
                                {role !== "vendor" && <SelectUser title={t("SelectVendor")} values={values} setFieldValue={setFieldValue} role={"vendor"} name={'vendor_id'} userRole={role} />}
                                <SeleteWalletPrice values={values} setFieldValue={setFieldValue} handleSubmit={handleSubmit} setIsValue={setIsValue} title={t("Wallet")} description={t("WalletBalance")} selectUser={'vendor_id'} icon={<RiWallet2Line />} isCredit={credit} isDebit={debit} role={role} />
                            </Row>
                        </Form>
                        <Col sm="12">
                            <WrappedVendor url={VendorTransations} moduleName="UserTransations" setFieldValue={setFieldValue} values={values} ref={refRefetch} dateRange={true} userIdParams={true} role={role} />
                        </Col>
                    </>
                )}
            </Formik>
        </div>
    )
}

export default VendorWallet;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });