import React from "react";
import { RiMoonLine, RiSearchLine } from "react-icons/ri";
import { Col } from "reactstrap";
import ProfileNav from "./ProfileNav";
import NotificationBox from "./NotificationBox";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import Language from "./Language";
import useOutsideDropdown from "../../Utils/Hooks/CustomHooks/useOutsideDropdown";

const RightNav = ({ setMode, setOpenSearchBar }) => {
  const { t } = useTranslation("common");
  const [isProductCreate] = usePermissionCheck(["create"], "product");
  const [isOrderCreate] = usePermissionCheck(["create"], "order");
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown();
  return (
    <Col className="nav-right pull-right right-header p-0">
      <div className="header-btns d-none d-lg-flex">
        {isProductCreate && <Link href={"/product/create"} className="btn btn-outline">{t("AddProduct")}</Link>}
        {isOrderCreate && <Link href={"/order/create"} className="btn btn-animation">{t("AddOrder")}</Link>}
      </div>
      <ul className="nav-menus" ref={ref}>
        <li>
          <span className="header-search" onClick={() => setOpenSearchBar(true)}>
            <RiSearchLine />
          </span>
        </li>
        <Language isComponentVisible={isComponentVisible} setIsComponentVisible={setIsComponentVisible} />
        <NotificationBox isComponentVisible={isComponentVisible} setIsComponentVisible={setIsComponentVisible} />
        <li>
          <div className="mode">
            <RiMoonLine className="ri-moon-line" onClick={() => setMode((prev) => !prev)} />
          </div>
        </li>
        <ProfileNav isComponentVisible={isComponentVisible} setIsComponentVisible={setIsComponentVisible} />
      </ul>
    </Col>
  );
};

export default RightNav;
