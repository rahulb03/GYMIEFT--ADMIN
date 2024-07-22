import { useTranslation } from "next-i18next";
import CheckBoxField from "../InputFields/CheckBoxField";
import SimpleInputField from "../InputFields/SimpleInputField";

const NewsLetterTab = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <SimpleInputField
        nameList={[
          { name: "[values][newsletter][mailchip_api_key]", title: "MailchipApiKey", placeholder: t("EnterMailChipApiKey") },
          { name: "[values][newsletter][mailchip_list_id]", title: "MailchipListId", placeholder: t("EnterMailChipListId") },
        ]}
      />
      <CheckBoxField name="[values][newsletter][status]" title="MailchipStatus" />
    </div>
  );
};

export default NewsLetterTab;
