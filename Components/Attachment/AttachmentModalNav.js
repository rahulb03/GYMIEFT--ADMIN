import { useTranslation } from 'next-i18next';
import { Nav, NavItem, NavLink } from 'reactstrap'
import usePermissionCheck from '../../Utils/Hooks/usePermissionCheck';

const AttachmentModalNav = ({ tabNav, setTabNav, isattachment }) => {
    const { t } = useTranslation("common");
    const [create] = usePermissionCheck(["create"], "attachment");
    return (
        <Nav className="nav-tabs" role="tablist">
            {!isattachment && <NavItem>
                <NavLink className={tabNav === 1 ? "active" : ""} onClick={() => setTabNav(1)}>{t("SelectFile")} </NavLink>
            </NavItem >}
            {create && <NavItem className="nav-item">
                <NavLink className={tabNav === 2 ? "active" : ""} onClick={() => setTabNav(2)}>{t("UploadNew")}</NavLink>
            </NavItem>}

        </Nav>
    )
}

export default AttachmentModalNav