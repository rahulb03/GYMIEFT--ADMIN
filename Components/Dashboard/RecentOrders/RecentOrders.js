import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import TableWarper from '../../../Utils/HOC/TableWarper'
import ShowTable from '../../Table/ShowTable';

const RecentOrders = ({ data, ...props }) => {
    const { t } = useTranslation("common");
    const router = useRouter()
    const getSpanTag = (number) => {
        return <span className="fw-bolder">#{number}</span>;
    };
    const headerObj = {
        checkBox: false,
        isOption: true,
        noEdit: false,
        isSerialNo: false,
        optionHead: { title: "Action", type: 'View', redirectUrl: "/order/details", modalTitle: t("Orders") },
        noCustomClass: true,
        column: [
            { title: "Number", apiKey: "order_number" },
            { title: "Date", apiKey: "created_at", sorting: true, sortBy: "desc", type: "date" },
            { title: "Name", apiKey: "consumer", subKey: ["name"] },
            { title: "Amount", apiKey: "total", type: 'price' },
            { title: "Payment", apiKey: "payment_status" },
        ],
        data: data?.slice(0, 6)?.map((elem) => elem) || []
    };
    let orders = useMemo(() => {
        return headerObj?.data?.filter((element) => {
            element.order_number = getSpanTag(element.order_number);
            element.payment_status = element.payment_status ? <div className={`status-${element?.payment_status.toString().toLowerCase() || ''}`}><span>{element?.payment_status}</span></div> : '-';
            return element;
        });
    }, [data]);
    headerObj.data = headerObj ? orders : [];

    const redirectLink = (data) => {
        const order_number = data?.order_number?.props?.children?.[1];
        router.push(`/order/details/${order_number}`)
    }
    return (
        <ShowTable {...props} headerData={headerObj} redirectLink={redirectLink} />
    )
}

export default TableWarper(RecentOrders)