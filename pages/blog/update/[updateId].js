import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import BlogForm from "../../../Components/Blog/BlogForm";
import FormWrapper from "../../../Utils/HOC/FormWrapper";

const BlogUpdate = () => {
  const router = useRouter();
  return (
    router?.query?.updateId && (
      <FormWrapper title="UpdateBlog">
        <BlogForm updateId={router?.query?.updateId}  />
      </FormWrapper>
    )
  );
};

export default BlogUpdate;
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
