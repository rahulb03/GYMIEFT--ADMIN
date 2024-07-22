import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TaxForm from "../../Components/Tax/TaxForm";
import FormWrapper from "../../Utils/HOC/FormWrapper";

const TaxCreate = () => {
  return (
    <FormWrapper title="AddTax">
      <TaxForm />
    </FormWrapper>
  );
};

export default TaxCreate;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
