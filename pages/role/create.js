import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PermissionForm from "../../Components/Role/PermissionForm";
import FormWrapper from "../../Utils/HOC/FormWrapper";

const Role = () => {
  return (
    <FormWrapper title="AddRole">
      <PermissionForm />
    </FormWrapper>
  );
};

export default Role;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
