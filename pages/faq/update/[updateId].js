import FormWrapper from '../../../Utils/HOC/FormWrapper';
import FaqForm from '../../../Components/Faq/FaqForm';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const UpdateFaq = () => {
    const router = useRouter();
    return (
        router?.query?.updateId && (
            <FormWrapper title="Update Faq">
                <FaqForm updateId={router?.query?.updateId} />
            </FormWrapper>
        )
    )
}

export default UpdateFaq
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });