import SimpleInputField from '../InputFields/SimpleInputField'
import { useTranslation } from 'next-i18next';
import CheckBoxField from '../InputFields/CheckBoxField';
import FileUploadField from '../InputFields/FileUploadField';

const MaintenanceTab = ({ values, setFieldValue, errors }) => {
    const { t } = useTranslation("common");
    return (
        <>
            <CheckBoxField name="[values][maintenance][maintenance_mode]" title="MaintenanceMode" />
            {values?.values?.maintenance?.maintenance_mode &&
                <>
                    <SimpleInputField nameList={[
                        { name: "[values][maintenance][title]", title: "Title", placeholder: t("EnterTitle") },
                        { name: "[values][maintenance][description]", title: "Description", placeholder: t("EnterDescription") }]} />
                    <FileUploadField name="maintenance_image_id" uniquename={values?.values?.maintenance?.maintenance_image} title="LightLogo" errors={errors} id="maintenance_image_id" type="file" values={values} setFieldValue={setFieldValue} />
                </>}
        </>
    )
}

export default MaintenanceTab