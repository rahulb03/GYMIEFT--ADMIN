import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'
import { Col } from 'reactstrap'
import FormWrapper from '../../Utils/HOC/FormWrapper'
import NotificationsData from '../../Components/Notifications/NotificationsData'

const Notifications = () => {
  return (
    <Col sm="12">
      <FormWrapper title="Notifications">
        <NotificationsData />
      </FormWrapper>
    </Col>
  )
}

export default Notifications
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ['common'])) } })