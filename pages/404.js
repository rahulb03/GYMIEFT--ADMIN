import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const FourOFour = () => {
  const { t } = useTranslation("common");
  return <>
    <section className="error-section section-lg-space">
      <Container fluid={true}>
        <Row>
          <Col xl="6" lg="7" className="m-auto">
            <div className="error-content">
              <Image src="/assets/svg/404.svg" className="img-fluid" alt="Error Page" width={300} height={300} />
              <h2>{t("PageNotFound")}</h2>
              <h3 className="text-content">{t('Description404')}</h3>
              <Link className="btn btn-animation mt-4 mx-auto btn-lg" href={'auth/login'}>{t("BackToPage")}</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>
};

FourOFour.getLayout = (FourOFour) => FourOFour;
export default FourOFour;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
