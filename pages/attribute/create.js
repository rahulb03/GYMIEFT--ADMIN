import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AttributeForm from "../../Components/Attribute/AttributeForm";
import FormWrapper from "../../Utils/HOC/FormWrapper";

const AttributeCreate = () => {
  return (
    <FormWrapper title="AddAttribute">
      <AttributeForm />
    </FormWrapper>
  );
};

export default AttributeCreate;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
