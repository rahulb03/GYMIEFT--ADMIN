import { useRouter } from 'next/router';
import PageForm from '../../../Components/Pages/PageForm';
import FormWrapper from '../../../Utils/HOC/FormWrapper';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const UpdatePage = () => {
    const router = useRouter();
    return (
        router?.query?.updateId && (
            <FormWrapper title="Update Page">
                <PageForm updateId={router?.query?.updateId} />
            </FormWrapper>
        )
    )
}

export default UpdatePage
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });