import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import CurrencyForm from '../../../Components/Currency/CurrencyForm';
import FormWrapper from '../../../Utils/HOC/FormWrapper';

const UpdateCurrency = () => {
    const router = useRouter();
    return (
        router?.query?.updateId && (
            <FormWrapper title="UpdateUser">
                <CurrencyForm updateId={router?.query?.updateId} />
            </FormWrapper>
        )
    )
}

export default UpdateCurrency
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });