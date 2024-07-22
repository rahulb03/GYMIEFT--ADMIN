import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import UserForm from "../../Components/User/UserForm";
import FormWrapper from "../../Utils/HOC/FormWrapper";

const AddNewUser = () => {
  return (
    <FormWrapper title="AddUser">
      <UserForm />
    </FormWrapper>
  );
};

export default AddNewUser;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
