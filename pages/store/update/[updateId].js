import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import StoreForm from "../../../Components/Store/StoreForm";
import FormWrapper from "../../../Utils/HOC/FormWrapper";

const StoreUpdate = () => {
  const router = useRouter();
  return (
    router?.query?.updateId && (
      <FormWrapper title="UpdateStore">
        <StoreForm updateId={router?.query?.updateId} />
      </FormWrapper>
    )
  );
};

export default StoreUpdate;
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
