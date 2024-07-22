import { useRouter } from "next/router";
import { Card, CardBody, Col, Row } from "reactstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import TaxForm from "../../../Components/Tax/TaxForm";

const TaxUpdate = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    router?.query?.updateId && (
      <Row>
        <Col sm="8" className="m-auto">
          <Card >
            <CardBody>
              <div className="card-header-2">
                <h5>{t("UpdateTax")}</h5>
              </div>
              <TaxForm updateId={router?.query?.updateId} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  );
};

export default TaxUpdate;

export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });


