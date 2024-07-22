import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FormComponent from '../../Components/Form/Form';
import HeadComponent from '../../Components/Head/Head';
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { jobTypeDropDown } from "../../redux/jobType/jobTypeThunks";


const CreateJob = () => {

    const router = useRouter();
    const dispatch = useDispatch();
    
    // const & state ------------
    const [formRefresh, setFormRefresh] = useState(true)
    const [tableRefresh, setTableRefresh] = useState(true)
    const [jobObject, setJobObject] = useState({})
    const [jobTypeData, setJobTypeData] = useState([])
    // ------------

    // function for manage Action Event ------------
    const actionEvent = async (obj) => {
        
        if (obj?.act == 'edit') {
            // const { payload } = await dispatch((obj));
            // if (payload?.status == 200) {
            //     setJobTypect({...payload?.data})
            // }
        }
            
        if (obj?.act == 'delete') {
            dispatch(deleteJobType(obj))
            setTableRefresh(!tableRefresh)
        }
            
        if (obj?.act == 'status') {
            // dispatch(changeJobTypeStatus(obj))
            setTableRefresh(!tableRefresh)
        }
    }
    // ------------

    // function for get DropDown Data ------------
    const getDropDownData = async () => {
        const { payload } = await dispatch(jobTypeDropDown())
        console.log('payload :: ', payload)
        setJobTypeData([...payload?.data])
    }
    // ------------
    
    // useEffect Section ------------
    useEffect(() => {
        getDropDownData()
    }, [])
    // ------------

    return (
        <>
            <HeadComponent title={'Job'}/>
            <Row>
                <Col xxl='8' md='12'>
                    <Card>
                        <CardHeader>Job Form</CardHeader>
                        <CardBody>
                            <FormComponent
                                isRedux={true}
                                stateName='JobType'
                                action={'createJobType'}
                                fields={[
                                    {
                                        divClass:'col-xl-6 col-md-12',
                                        type:'select',
                                        label:'job type',
                                        name:'jobTypeId',
                                        required:true,
                                        options:[
                                            {
                                                value:'',
                                                label:'select job type'
                                            },
                                            ...jobTypeData
                                        ]
                                    },
                                    {
                                        divClass:'col-xl-6 col-md-12',
                                        label:'name',
                                        name:'name',
                                        required:true,
                                    },
                                    {
                                        divClass:'col-xl-6 col-md-12',
                                        type:'textarea',
                                        label:'short description',
                                        name:'shortDescription',
                                        required:true,
                                    },
                                    {
                                        divClass:'col-xl-6 col-md-12',
                                        type:'textarea',
                                        label:'short description',
                                        name:'longDescription',
                                    },
                                    {
                                        divClass:'col-xl-6 col-md-12',
                                        label:'experience',
                                        name:'experience',
                                        required:true,
                                    },
                                    {
                                        divClass:'col-xl-6 col-md-12',
                                        label:'salary',
                                        name:'salary',
                                        required:true,
                                    },
                                    {
                                        divClass:'col-xl-6 col-md-12',
                                        type:'radio',
                                        label:'mode',
                                        name:'mode',
                                        required:true,
                                        data:[
                                            {
                                                value:'ONLINE',
                                                label:'Online'
                                            },
                                            {
                                                value:'OFFLINE',
                                                label:'Offline'
                                            }
                                        ]
                                    },
                                    {
                                        divClass:'col-xl-6 col-md-12',
                                        label:'location',
                                        name:'location',
                                        required:true,
                                    },
                                ]}
                                valuesObject={jobObject}
                                onSubmit={(e) => {
                                    if (e?.status == 200) {
                                        router.push('/job');
                                    }
                                }}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default CreateJob;
export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
