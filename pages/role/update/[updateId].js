import React from "react";
import { useRouter } from "next/router";
import { Card, CardBody, Col, Row } from "reactstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PermissionForm from "../../../Components/Role/PermissionForm";

const RoleUpdate = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    router?.query?.updateId && (
      <Row>
        <Col xxl="8" lg="10" className="m-auto">
          <Card>
            <CardBody>
              <div className="title-header option-title">
                <h5>{t("UpdateRole")}</h5>
              </div>
              <PermissionForm updateId={router?.query?.updateId} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  );
};

export default RoleUpdate;
export const getServerSideProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
