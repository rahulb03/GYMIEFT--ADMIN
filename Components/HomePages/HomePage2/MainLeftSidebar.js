import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import { RiArrowDownLine } from 'react-icons/ri'
import { useTranslation } from 'next-i18next'
import SimpleInputField from '../../InputFields/SimpleInputField'
import CheckBoxField from '../../InputFields/CheckBoxField'
import MainLeftSidebarProduct1 from './MainLeftSidebarProduct1'
import MainLeftSidebarProduct2 from './MainLeftSidebarProduct2'
import MainLeftSidebarProduct3 from './MainLeftSidebarProduct3'

const MainLeftSidebar = ({ values, setFieldValue, productData, setSearch }) => {
    const [active, setActive] = useState(0)
    const { t } = useTranslation("common");
    return (
        <>
            <Row className='align-items-center'>
                <Col xs="10">
                    <div className='shipping-accordion-custom'>
                        <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(1)}>{values['content']?.['main_content']?.['section1_products']?.['title']}<RiArrowDownLine />
                        </div>
                        {active == 1 && (
                            <div className="rule-edit-form">
                                <SimpleInputField nameList={[
                                    { name: `[content][main_content][section1_products][title]`, placeholder: t("EnterTitle"), title: "Title" }
                                ]} />
                                <SearchableSelectInput
                                    nameList={
                                        [{
                                            name: 'mainLeftProduct1',
                                            title: "Products",
                                            inputprops: {
                                                name: 'mainLeftProduct1',
                                                id: 'mainLeftProduct1',
                                                options: productData || [],
                                                setsearch: setSearch,
                                            }
                                        },
                                        ]}
                                />
                                <CheckBoxField name={`[content][main_content][section1_products][status]`} title="Status" />
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
            <MainLeftSidebarProduct1 values={values} setActive={setActive} active={active} setFieldValue={setFieldValue} productData={productData} setSearch={setSearch} />
            <MainLeftSidebarProduct2 values={values} setActive={setActive} active={active} setFieldValue={setFieldValue} productData={productData} setSearch={setSearch} />
            <MainLeftSidebarProduct3 values={values} setActive={setActive} active={active} setFieldValue={setFieldValue} productData={productData} setSearch={setSearch} />
        </>

    )
}

export default MainLeftSidebar