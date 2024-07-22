import { Col } from 'reactstrap'
import AllCommissionTable from '../../Components/Commission'
import { commissions } from '../../Utils/AxiosUtils/API'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Commission = () => {
    return (
        <Col sm="12">
            <AllCommissionTable moduleName="Commission" url={commissions} dateRange={true} />
        </Col>
    )
}

export default Commission
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });