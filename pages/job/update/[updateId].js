import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import UserForm from "../../../Components/User/UserForm";
import FormWrapper from "../../../Utils/HOC/FormWrapper";

const UserUpdate = () => {
  const router = useRouter();
  return (
    router?.query?.updateId && (
      <FormWrapper title="UpdateUser">
        <UserForm
          updateId={router?.query?.updateId}
        />
      </FormWrapper>
    )
  );
};

export default UserUpdate;
export const getServerSideProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ["common"])) },
});
