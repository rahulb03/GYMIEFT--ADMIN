import React from 'react'
import SimpleInputField from '../InputFields/SimpleInputField'
import { useTranslation } from 'next-i18next';

const UserPassword = ({ updateId }) => {
    const { t } = useTranslation("common");
    return (
        <>
            {!updateId && (
                <>
                    <SimpleInputField
                        nameList={[
                            { name: "password", type: "password", placeholder: t("EnterPassword"), require: 'true' },
                            { name: "password_confirmation", title: "ConfirmPassword", type: "password", placeholder: t("Re-EnterPassword"), require: 'true'},
                        ]}
                    />
                </>
            )}
        </>
    )
}

export default UserPassword