import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import AttributeForm from "../../../Components/Attribute/AttributeForm";
import FormWrapper from "../../../Utils/HOC/FormWrapper";

const UpdateAttributes = () => {
  const router = useRouter();
  return (
    <FormWrapper title="UpdateAttribute">
      <AttributeForm updateId={router?.query?.updateId} />
    </FormWrapper>
  );
};
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
export default UpdateAttributes;
