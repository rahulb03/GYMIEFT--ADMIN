import FormWrapper from '../../Utils/HOC/FormWrapper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import FaqForm from '../../Components/Faq/FaqForm';

const CreateFaq = () => {
    return (
        <FormWrapper title="AddFaq">
            <FaqForm />
        </FormWrapper>
    )
}

export default CreateFaq
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });