import SimpleInputField from "../../InputFields/SimpleInputField";
import FileUploadField from "../../InputFields/FileUploadField";
import CheckBoxField from "../../InputFields/CheckBoxField";
import { useTranslation } from "next-i18next";
import { getHelperText } from "../../../Utils/CustomFunctions/getHelperText";

const NewsLetterTab = ({ values, setFieldValue }) => {
    const { t } = useTranslation("common");
    return (
        <>
            <SimpleInputField nameList={[
                { name: "[content][news_letter][title]", placeholder: t("EnterTitle"), title: "Title" },
                { name: "[content][news_letter][sub_title]", placeholder: t("EnterSubTitle"), title: "SubTitle" }
            ]} />
            <FileUploadField name="newsLetterImage" title='Image' id="newsLetterImage" showImage={values['newsLetterImage']} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText('1600x218px')} />
            <CheckBoxField name="[content][news_letter][status]" title="Status" />
        </>
    )
}
export default NewsLetterTab