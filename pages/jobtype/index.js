import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FormComponent from '../../Components/Form/Form';
import HeadComponent from '../../Components/Head/Head';
import TableComponent from '../../Components/Table/Table';
import { useDispatch } from "react-redux";
import { changeJobTypeStatus, deleteJobType } from "../../redux/jobType/jobTypeThunks";

const JobType = () => {

    const dispatch = useDispatch();
    
    // const & state ------------
    const [formRefresh, setFormRefresh] = useState(true)
    const [tableRefresh, setTableRefresh] = useState(true)
    const [jobTypeObject, setJobTypeObject] = useState({})
    // ------------

    // function for manage Action Event ------------
    const actionEvent = async (obj) => {
        
        if (obj?.act == 'edit') {
            const { payload } = await dispatch(getSingleJobType(obj));
            if (payload?.status == 200) {
                setJobTypeObject({...payload?.data})
            }
        }
            
        if (obj?.act == 'delete') {
            dispatch(deleteJobType(obj))
            setTableRefresh(!tableRefresh)
        }
            
        if (obj?.act == 'status') {
            dispatch(changeJobTypeStatus(obj))
            setTableRefresh(!tableRefresh)
        }
    }
    // ------------

    // useEffect Section ------------
    useEffect(() => {
        
    }, [])
    // ------------

    return (
        <>
            <HeadComponent title={'Job Type'}/>
            <Row>
                <Col xxl='4' xl='5' lg='6' md='12'>
                    <Card>
                        <CardHeader>Job Type Form</CardHeader>
                        <CardBody>
                            <FormComponent
                                isRedux={true}
                                stateName='JobType'
                                action={'createJobType'}
                                fields={[
                                    {
                                        label:'name',
                                        name:'name',
                                        required:true,
                                    },
                                ]}
                                valuesObject={jobTypeObject}
                                onSubmit={(e) => {
                                    setJobTypeObject({})
                                    setFormRefresh(!formRefresh)
                                    setTableRefresh(!tableRefresh)
                                }}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col xxl='12'>
                    <Card>
                        <CardHeader>
                            
                        </CardHeader>
                        <CardBody>
                        <TableComponent
                            refresh={tableRefresh}
                            isRedux={true}
                            stateName='JobType'
                            action='getJobType'
                            thead={['srno', 'action', 'name', 'status', 'updated date']}
                            tbody={{
                                action:['edit', 'delete'],
                                name:'text',
                                status:'toggle',
                                updatedAt:'dateTime'
                            }}
                            onActionClick={(obj) => actionEvent(obj)}
                        />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default JobType;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
