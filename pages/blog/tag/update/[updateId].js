import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TagForm from "../../../../Components/Tag/TagForm";
import FormWrapper from "../../../../Utils/HOC/FormWrapper";

const TagUpdate = () => {
  const router = useRouter();
  return (
    router?.query?.updateId && (
      <FormWrapper title="UpdateTag">
        <TagForm updateId={router?.query?.updateId} type={"post"} />
      </FormWrapper>
    )
  );
};

export default TagUpdate;
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
