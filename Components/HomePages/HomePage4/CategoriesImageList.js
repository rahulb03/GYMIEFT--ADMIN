import CheckBoxField from '../../InputFields/CheckBoxField'
import MultiSelectField from '../../InputFields/MultiSelectField';
import SimpleInputField from '../../InputFields/SimpleInputField'
import { useTranslation } from 'next-i18next'

const CategoriesImageList = ({ values, setFieldValue, categoryData }) => {
    const { t } = useTranslation("common");
    return (
        <>
            <SimpleInputField nameList={[
                { name: `[content][categories_image_list][title]`, placeholder: t("EnterTitle"), title: "Title" },
            ]} />
            <MultiSelectField values={values} setFieldValue={setFieldValue} name='categoryIconList' title="Categories" data={categoryData} />
            <CheckBoxField name={`[content][categories_image_list][status]`} title="Status" />
        </>
    )
}

export default CategoriesImageList