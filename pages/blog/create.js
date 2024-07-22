import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BlogForm from "../../Components/Blog/BlogForm";
import FormWrapper from "../../Utils/HOC/FormWrapper";

const AddBlog = () => {
  return (
    <FormWrapper title="AddBlog">
      <BlogForm />
    </FormWrapper>
  );
};

export default AddBlog;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
