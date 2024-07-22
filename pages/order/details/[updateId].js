import React from 'react'
import OrderDetailsContain from '../../../Components/Orders/Details'
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const OrderDetails = () => {
    const router = useRouter();
    return (
        router?.query?.updateId && (
            <OrderDetailsContain updateId={router?.query?.updateId} />
        )
    )
}

export default OrderDetails
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });