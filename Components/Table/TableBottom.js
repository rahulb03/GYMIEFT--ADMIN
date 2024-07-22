import React from "react";
import { useTranslation } from "next-i18next";
import Pagination from "./Pagination";

const TableBottom = ({ current_page, total, per_page, setPage }) => {
  const { t } = useTranslation("common");
  return (
    <div className="card-bottom">
      {/* {total > 0 && (
        <h6>
          {t("Showing")} {(current_page - 1) * per_page + 1} {t("to")} {total > current_page * per_page ? current_page * per_page : total} {t("of")} {total} {t("entries")}
        </h6>
      )} */}
      <Pagination current_page={current_page} total={total} per_page={per_page} setPage={setPage} />
    </div>
  );
};

export default TableBottom;
