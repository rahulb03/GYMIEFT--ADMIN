import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AttachmentContain from "../../Components/Attachment";

const Media = () => {
    return <AttachmentContain isattachment={true} />;
};
export default Media;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });