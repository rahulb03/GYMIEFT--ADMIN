import React from 'react'
import SimpleInputField from '../../InputFields/SimpleInputField'
import CheckBoxField from '../../InputFields/CheckBoxField'
import { useTranslation } from 'next-i18next'

const ProductSlider3 = ({ values, setFieldValue }) => {
    const { t } = useTranslation("common");
    return (
        <>
            <h4 className='fw-semibold mb-3 txt-primary w-100'>{t("ProductSlider")} 3</h4>
            <SimpleInputField nameList={[
                { name: `[content][main_content][section2_slider_products][product_slider_3][title]`, placeholder: t("EnterTitle"), title: "Title" },
                // { name: `[content][main_content][section2_slider_products][product_slider_3][description]`, placeholder: t("EnterDescription"), title: "Description", type: "textarea" }
            ]} />
            <CheckBoxField name={`[content][main_content][section2_slider_products][product_slider_3][status]`} title="Status" />
        </>
    )
}

export default ProductSlider3