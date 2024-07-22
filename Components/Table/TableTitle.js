import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { FiPlus } from "react-icons/fi";
import Btn from "../../Elements/Buttons/Btn";
import Pluralize from "../../Utils/CustomFunctions/Pluralize";
import NoSsr from "../../Utils/HOC/NoSsr";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import ImportExport from "./ImportExport";

const TableTitle = ({ moduleName, onlyTitle, type, filterHeader, importExport, refetch }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [create] = usePermissionCheck(["create"]);
  return (
    <div className="title-header option-title">
      <h5>{filterHeader?.customTitle ? t(filterHeader?.customTitle) : t(Pluralize(moduleName))}</h5>
      {importExport && <ImportExport importExport={importExport} refetch={refetch} />}
      <NoSsr>
        {filterHeader?.customFilter && filterHeader?.customFilter}
        {create && !onlyTitle && (
          <Btn className="align-items-center btn-theme add-button" title={t("Add") + " " + t(moduleName)} onClick={() =>
            type == "post" && (moduleName.toLowerCase()) == "tag"
              ?
              router.push(`/${router.pathname.split("/")[1]}/tag/create`)
              :
              type == 'post'
                ?
                router.push(`/${router.pathname.split("/")[1]}/category/create`)
                :
                router.push("/" + router.pathname.split("/")[1] + "/create")
          }>
            <FiPlus />
          </Btn>
        )}
      </NoSsr>
    </div>
  );
};

export default TableTitle;
