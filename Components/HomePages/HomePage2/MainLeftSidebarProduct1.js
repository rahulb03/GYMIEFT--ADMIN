import { Col, Row } from 'reactstrap';
import SimpleInputField from '../../InputFields/SimpleInputField';
import CheckBoxField from '../../InputFields/CheckBoxField';
import { RiArrowDownLine } from 'react-icons/ri';
import { useTranslation } from 'next-i18next';
import SearchableSelectInput from '../../InputFields/SearchableSelectInput';

const MainLeftSidebarProduct1 = ({ values, setActive, active, setFieldValue, productData, setSearch }) => {
    const { t } = useTranslation("common");
    return (
        <Row className='align-items-center'>
            <Col xs="10">
                <div className='shipping-accordion-custom'>
                    <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive(2)}>{values['content']?.['main_content']?.['section2_slider_products']?.['title'] || ''}<RiArrowDownLine />
                    </div>
                    {active == 2 && (
                        <div className="rule-edit-form">
                            <SimpleInputField nameList={[
                                { name: `[content][main_content][section2_slider_products][title]`, placeholder: t("EnterTitle"), title: "Title" }
                            ]} />
                            <SearchableSelectInput
                                nameList={
                                    [{
                                        name: 'mainLeftProduct2',
                                        title: "Products",
                                        inputprops: {
                                            name: 'mainLeftProduct2',
                                            id: 'mainLeftProduct2',
                                            options: productData || [],
                                            setsearch: setSearch,
                                        }
                                    },
                                    ]}
                            />
                            <CheckBoxField name={`[content][main_content][section2_slider_products][status]`} title="Status" />
                        </div>
                    )}
                </div>
            </Col>
        </Row>
    )
}

export default MainLeftSidebarProduct1