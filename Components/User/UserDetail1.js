import React from 'react'
import SimpleInputField from '../InputFields/SimpleInputField'
import SearchableSelectInput from '../InputFields/SearchableSelectInput'
import { AllCountryCode } from '../../Data/AllCountryCode'
import { useTranslation } from 'next-i18next'

const UserDetail1 = () => {
    const { t } = useTranslation("common");
    return (
        <>
            <SimpleInputField nameList={[
                { name: "name", placeholder: t("EnterUserName"), require: 'true' },
                { type: "email", name: "email", placeholder: t("EnterEmailAddress"), require: 'true' }
            ]} />
            <div className='country-input mb-4'>
                <SimpleInputField nameList={[{ name: "phone", type: "number", placeholder: t("EnterPhoneNumber"), require: 'true' }]} />
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

export default UserDetail1