import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import StoreForm from "../../Components/Store/StoreForm";
import FormWrapper from "../../Utils/HOC/FormWrapper";

const StoreCreate = () => {
  return (
    <FormWrapper title="AddStore">
      <StoreForm />
    </FormWrapper>
  );
};

export default StoreCreate;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
