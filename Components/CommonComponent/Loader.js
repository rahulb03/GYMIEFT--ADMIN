import { useTranslation } from "next-i18next";
import React from "react";

const Loader = () => {
  const { t } = useTranslation("common");
  return (
    <div className="loader-wrapper">
      <div>
        <div className="loader"></div>
        <h3>{t("Loading")}</h3>
      </div>
    </div>
  );
};

export default Loader;
