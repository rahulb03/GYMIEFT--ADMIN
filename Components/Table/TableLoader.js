import { useTranslation } from 'next-i18next';

const TableLoader = ({ fetchStatus }) => {
    const { t } = useTranslation("common");
    return (
        <>
            {fetchStatus == 'fetching' &&
                <tbody>
                    <tr className="table-loader">
                        <td>{t("Pleasewait")}...</td>
                    </tr>
                </tbody>
            }</>
    )
}

export default TableLoader