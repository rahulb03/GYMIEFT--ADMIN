import Link from 'next/link'
import React, { useContext } from 'react'
import { RiDownload2Fill } from 'react-icons/ri'
import SettingContext from '../../../Helper/SettingContext'
import { Card, CardBody } from 'reactstrap'
import { useTranslation } from 'next-i18next'

const InvoiceSummary = ({ data }) => {
    const { t } = useTranslation("common");
    const { convertCurrency } = useContext(SettingContext)
    return (
        <Card>
            <CardBody>
                <div className="title-header" >
                    <div className="d-flex align-items-center">
                        <h5>{("Summary")}</h5>
                    </div>
                    {data?.invoice_url && <Link href={data?.invoice_url} className="btn btn-animation btn-sm ms-auto">{("Invoice")} <RiDownload2Fill /></Link>}
                </div>
                <div className="tracking-total tracking-wrapper">
                    <ul>
                        <li>{t("Subtotal")} :<span>{convertCurrency(data?.amount)}</span></li>
                        <li>{t("Shipping")} :<span>{convertCurrency(data?.shipping_total ?? 0)}</span></li>
                        <li>{t("Tax")} :<span>{convertCurrency(data?.tax_total ?? 0)}</span></li>
                        {data?.points_amount ? <li className="txt-primary fw-bold">{t("Points")} <span>{convertCurrency(data?.points_amount)}</span></li> : ""}
                        {data?.wallet_balance ? <li className="txt-primary fw-bold">{t("WalletBalance")} <span>{convertCurrency(data?.wallet_balance)}</span></li> : ""}
                        <li>{t("Total")} <span>{convertCurrency(data?.total ?? 0)}</span></li>
                    </ul>
                </div>
            </CardBody>
        </Card >
    )
}

export default InvoiceSummary