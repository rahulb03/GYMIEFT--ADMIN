import { Form, Formik } from 'formik'
import React, { useEffect } from 'react'
import { YupObject, nameSchema } from '../../Utils/Validation/ValidationSchemas'
import { Row } from 'reactstrap'
import SimpleInputField from '../InputFields/SimpleInputField'
import CheckBoxField from '../InputFields/CheckBoxField'
import FormBtn from '../../Elements/Buttons/FormBtn'
import Loader from '../CommonComponent/Loader'
import { useQuery } from '@tanstack/react-query'
import request from '../../Utils/AxiosUtils'
import { FaqAPI } from '../../Utils/AxiosUtils/API'
import { useTranslation } from 'next-i18next'

const FaqForm = ({ updateId }) => {
    const { t } = useTranslation("common");
    const { data: oldData, isLoading, refetch } = useQuery(["faq/id"], () => request({ url: `${FaqAPI}/${updateId}` }), { refetchOnMount: false, enabled: false });
    useEffect(() => {
        updateId && refetch();
    }, [updateId]);
    if (updateId && isLoading) return <Loader />;
    return (
        <Formik
            enableReinitialize
            initialValues={{
                title: updateId ? oldData?.data?.title || "" : "",
                description: updateId ? oldData?.data?.description : "",
                status: updateId ? Boolean(Number(oldData?.data?.status)) : true,
            }}
            validationSchema={YupObject({ title: nameSchema, description: nameSchema })}
            onSubmit={(values) => { // Put Add Or Update Logic Here
            }}>
            {() => (
                <Form className="theme-form theme-form-2 mega-form">
                    <Row>
                        <SimpleInputField nameList={[{ name: "title", placeholder: t("EnterTitle"), require: "true" }, { name: 'description', type: 'textarea', title: 'Description', placeholder: t("EnterDescription"), require: "true" }]} />
                        <CheckBoxField name="status" />
                        <FormBtn />
                    </Row>
                </Form>
            )}
        </Formik>
    )
}

export default FaqForm