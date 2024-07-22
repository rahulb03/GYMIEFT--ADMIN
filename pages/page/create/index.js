import FormWrapper from '../../../Utils/HOC/FormWrapper';
import PageForm from '../../../Components/Pages/PageForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const CreatePage = () => {
    return (
        <FormWrapper title="CreatePage">
            <PageForm />
        </FormWrapper>
    )
}

export default CreatePage
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } })
