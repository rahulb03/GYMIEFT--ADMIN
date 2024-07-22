import React from 'react'
import { RiArrowDownLine } from 'react-icons/ri'
import { useTranslation } from 'next-i18next'
import CheckBoxField from '../../InputFields/CheckBoxField'
import SimpleInputField from '../../InputFields/SimpleInputField'
import FileUploadField from '../../InputFields/FileUploadField'
import { getHelperText } from '../../../Utils/CustomFunctions/getHelperText'

const RightSection5 = ({ values, setFieldValue, setActive, active }) => {
    const { t } = useTranslation("common");
    return (
        <div className='shipping-accordion-custom'>
            <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(5)}>{t("Coupon")}<RiArrowDownLine />
            </div>
            {active == 5 && (
                <div className="rule-edit-form">
                    <SimpleInputField nameList={[
                        { name: `[content][main_content][section5_coupons][title]`, placeholder: t("EnterTitle"), title: "Title" },
                        { name: `[content][main_content][section5_coupons][coupon_code]`, placeholder: t("EnterCouponCode"), title: "CouponCode" }
                    ]} />
                    <FileUploadField name="section5CouponsImage" title='Image' id="section5CouponsImage" type="file" values={values} setFieldValue={setFieldValue} showImage={values['section5CouponsImage']} helpertext={getHelperText('1198x138px')} />
                    <CheckBoxField name={`[content][main_content][section5_coupons][status]`} title="Status" />
                </div>
            )}
        </div>
    )
}

export default RightSection5