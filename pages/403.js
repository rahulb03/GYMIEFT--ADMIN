import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

const FourOThree = () => {
  const { t } = useTranslation("common");
  return (
    <section className="error-section section-lg-space">
      <Container fluid={true}>
        <Row>
          <Col xl={6} lg={7} className="m-auto">
            <div className="error-content">
              <img src="/assets/svg/401.svg" className="img-fluid" alt="" />
              <h2>{t("Access Denied")}</h2>
              <h3 className="text-content">{t("The page you are trying to access has restricted access. Contact to your administrator to unlock or You can go back to previous page.")}</h3>
              <Link href={'/'} className="btn btn-animation mt-4 mx-auto btn-lg">{t("BackToPage")}</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

FourOThree.getLayout = (FourOThree) => FourOThree;
export default FourOThree;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
