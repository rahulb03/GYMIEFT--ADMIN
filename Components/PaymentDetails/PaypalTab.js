import React from 'react'
import SimpleInputField from '../InputFields/SimpleInputField'
import { useTranslation } from 'next-i18next';

const PaypalTab = () => {
    const { t } = useTranslation("common");
    return (
        <SimpleInputField nameList={[
            { name: 'paypal_email', title: 'PaypalEmail', placeholder: t('EnterPaypalEmail') }
        ]} />
    )
}

export default PaypalTab