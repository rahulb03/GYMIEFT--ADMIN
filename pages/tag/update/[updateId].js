import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TagForm from "../../../Components/Tag/TagForm";
import FormWrapper from "../../../Utils/HOC/FormWrapper";

const RoleUpdate = () => {
  const router = useRouter();
  return (
    router?.query?.updateId && (
      <FormWrapper title="UpdateTag">
        <TagForm updateId={router?.query?.updateId} type={"product"} />
      </FormWrapper>
    )
  );
};

export default RoleUpdate;
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
