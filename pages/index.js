import { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/dashboard')
  }, [])
  return null
};

export default Index;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
