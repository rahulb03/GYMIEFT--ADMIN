import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import { Row } from "reactstrap";
import { useQuery } from "@tanstack/react-query";
import FormBtn from "../../Elements/Buttons/FormBtn";
import request from "../../Utils/AxiosUtils";
import { nameSchema, YupObject } from "../../Utils/Validation/ValidationSchemas";
import Loader from "../CommonComponent/Loader";
import CheckBoxField from "../InputFields/CheckBoxField";
import SimpleInputField from "../InputFields/SimpleInputField";
import { useTranslation } from "next-i18next";

const TagForm = ({ updateId, type }) => {
  const { t } = useTranslation("common");
  const { data: oldData, isLoading, refetch } = useQuery(["role/id"], () => request({ url: `tag/${updateId}` }), { refetchOnMount: false, enabled: false });
  useEffect(() => {
    updateId && refetch();
  }, [updateId]);
  if (updateId && isLoading) return <Loader />;

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: updateId ? oldData?.data?.name || "" : "",
        type: type,
        description: updateId ? oldData?.data?.description : "",
        status: updateId ? Boolean(Number(oldData?.data?.status)) : true,
      }}
      validationSchema={YupObject({ name: nameSchema })}
      onSubmit={(values) => {
        // Put Add Or Update Logic Here
      }}>
      {() => (
        <Form className="theme-form theme-form-2 mega-form">
          <Row>
            <SimpleInputField nameList={[{ name: "name", placeholder: t("EnterTagName"), require: "true" }, { name: 'description', type: 'textarea', title: 'Description', placeholder: t("EnterDescription") }]} />
            <CheckBoxField name="status" />
            <FormBtn />
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default TagForm;
