import React from 'react'
import SimpleInputField from '../InputFields/SimpleInputField'
import SearchableSelectInput from '../InputFields/SearchableSelectInput'
import { AllCountryCode } from '../../Data/AllCountryCode'
import { useTranslation } from 'next-i18next'

const StoreVendor = () => {
    const { t } = useTranslation("common");
    return (
        <>
            <SimpleInputField nameList={[{ name: "name", placeholder: t("EnterName"), require: "true" }, { name: "email", placeholder: t("EnterEmail"), title: "EmailAddress", require: "true" }]} />
            <div className='country-input mb-4'>
                <SimpleInputField nameList={[{ name: "phone", title: "Phone", placeholder: t("EnterPhone"), require: "true", type: 'number' }]} />

                <SearchableSelectInput
                    nameList={[
                        {
                            name: "country_code",
                            notitle: "true",
                            inputprops: {
                                name: "country_code",
                                id: "country_code",
                                options: AllCountryCode,
                            },
                        },
                    ]}
                />
            </div>
        </>
    )
}

export default StoreVendor