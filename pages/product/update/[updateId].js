import { useState } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ProductForm from "../../../Components/Product/ProductForm";

const UpdateProduct = () => {
  const [resetKey, setResetKey] = useState(false)
  const router = useRouter();


  return (
    router?.query?.updateId && (
      <ProductForm setResetKey={setResetKey} updateId={router?.query?.updateId} title={"EditProduct"} key={resetKey} />
    )
  );
};

export default UpdateProduct;
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
