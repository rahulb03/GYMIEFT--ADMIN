import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Input, Label, Row } from "reactstrap";
import Select from "react-select";
import { useForm } from "react-hook-form";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";

const FormComponent = (props = {}) => {
    

    const { handleSubmit } = useForm();
    const dispatch = useDispatch();

    // states defining ------------
    const [nonFiledError, setNonFiledError] = useState('')
    const [errorLog, setErrorLog] = useState({})
    const [formData, setFormData] = useState({})
    // ------------
    
    // function for validation check ------------
    const checkValidation = (param = {}) => {
        console.log('params :: ', param)
        
        setNonFiledError('')

        // remove key always
        delete errorLog[param?.key]

        if (Array.isArray(param?.value) && param?.value.length === 0)
            delete param?.value;
        
        // execute when required or pattern exist
        if (param?.required || param?.pattern)
        {
            const key = param?.key?.replace(/"/g, '')?.replace(/Id/g, '')?.replace(/([A-Z])/g, ' $1')?.toLowerCase();
            
            // execute value required
            // if (param?.required && param?.value?.length <= 0)
            if (param?.required && ['', null, undefined]?.includes(param?.value))
                errorLog[param?.key] = `${key} required`;
        
            // execute value exist
            if (param?.pattern && param?.value?.length > 0) {
                const patternCheck = new RegExp(param?.pattern, 'g')
                if (!patternCheck.test(param?.value)) {
                    errorLog[param?.key] = `Invalid pattern for ${key}`;
                }
            }
        }

        // formData state add/update 
        setFormData((prev) => ({
            ...prev,
            [param?.key]:param?.value
        }))

        // update error log state
        setErrorLog({...errorLog})
    }
    // ------------

    // function for validation check ------------
    const showImage = (obj) => {
        if (obj.file) {
            props.fields[obj.index].link = URL.createObjectURL(obj.file);
        }
    }
    // ------------

    // function for validation check ------------
    const formSubmit = async () => {
        // return
        // when we want to submit form by redux action
        if (props?.isRedux) {
            const action = actions[props?.action];
            const { payload } = await dispatch(action(formData));
            
            if (payload?.status == 200) {
                props?.onSubmit(payload)
            }
            
            if ([400, 406]?.includes(payload?.status)) {
                setNonFiledError(payload?.data?.non_field_message)
                const {non_field_message, ...newObj} = payload?.data;
                setErrorLog(newObj)
            }

        } else {

            try {
                const  { data, status } = await axios?.post(props?.action, formData)
                props?.onSubmit({status, ...data})

            } catch (error) {
                const data = {...error?.response?.data, status:error?.response?.status};
                if (data?.status === 406) setErrorLog({...data?.data})
            }
        }
    }
    // ------------


    // useEffect ------------
    useEffect(() => {
        setFormData({...props?.valuesObject})
        setErrorLog({})
    }, [props])
    // useEffect ------------
   
    return (
        <Form
            onSubmit={handleSubmit(formSubmit)}
        >
            <Row className="g-3">
            {
                (nonFiledError) && (
                    <Alert className='text-center' color="danger"> { nonFiledError } </Alert>
                )
            }
            {
                props?.fields?.map((row, index) => {
                    const type = row?.type?? 'text';

                    return (
                        <div key={index} className={row?.divClass?? 'col-lg-12'}>
                            <div className="mb-2">
                                <Label htmlFor={row?.name} className="form-label text-capitalize mb-1">{row?.label}</Label>
                                {
                                    (type == 'select') && (
                                        <>
                                            <Select
                                                options={row?.options}
                                                value={row?.options?.filter((e) => (Array.isArray(formData[row?.name]) ? formData[row?.name] : [formData[row?.name]])?.includes(e?.value))}
                                                onChange={(e) => {
                                                    const value = row?.isMulti ? e.map(item => item.value)?.filter(value => !['', null, undefined]?.includes(value)) : e?.value
                                                    checkValidation({key:row?.name, value, required:row?.required})
                                                }}
                                                onBlur={(e) => checkValidation({key:row?.name, value:formData[row?.name], required:row?.required})}
                                                required={row?.required}
                                                isMulti={row?.isMulti}
                                            />
                                        </>
                                    )
                                }
                                {
                                    (['radio', 'checkbox']?.includes(type)) && (
                                        <div className="d-flex gap-3 align-items-center justify-content-start border rounded-2 p-2">
                                        {
                                            row?.data?.map((e, index) =>
                                            <div className="d-flex align-items-center gap-1">
                                                <Input
                                                    type={row?.type}
                                                    checked={formData[row?.name] == e?.value}
                                                    id={`${row?.name}-${index}`}
                                                    value={e?.value}
                                                    name={row?.name}
                                                    onChange={(e) => {
                                                        const val = row?.isToggle ? (formData[row?.name] == e?.target?.value ? '' : e?.target?.value): e?.target?.value
                                                        checkValidation({key:row?.name, value:val, required:row?.required})
                                                    }}
                                                />
                                                <Label for={`${row?.name}-${index}`} className="mb-0">{e?.label}</Label>
                                            </div>)
                                        }
                                        </div>
                                    )
                                }
                                {
                                    (['text' , 'textarea', 'number', 'email', 'password', 'date', 'time']?.includes(type)) && (
                                        <Input
                                            type={type}
                                            required={row?.required}
                                            value={formData[row?.name]?? ''}
                                            placeholder={row?.placeholder?? `enter ${row?.label}`}
                                            onChange={(e) => checkValidation({key:row?.name, value:e?.target?.value, required:row?.required, pattern:row?.pattern})}
                                            onBlur={(e) => checkValidation({key:row?.name, value:e?.target?.value, required:row?.required, pattern:row?.pattern})}
                                            className={`${errorLog[row?.name] && 'border-danger'}`}
                                        />
                                    )
                                }
                                {
                                    (['file']?.includes(type)) && (
                                        <div className="d-flex flex-column gap-2">
                                            <label htmlFor={`file-upload-${row.name}-${index}`} className="border rounded-2 d-flex justify-content-center w-100 py-2" style={{height:'150px', cursor:'pointer'}}>
                                                {
                                                    (row?.link) && (
                                                        <div className="w-25 p-1 border rounded d-flex justify-content-center align-items-center">
                                                            <img
                                                                src={row?.link}
                                                                className="img-thumbnail w-auto mh-100 mh-100"
                                                            />
                                                        </div>
                                                    )
                                                }
                                                {
                                                    (!row?.link) && (
                                                        <div className="position-relative bg-grey rounded-2" style={{height:'100%', width:'100px', background:'lightgray'}}>
                                                            <div className="position-absolute h-100 w-100 d-flex align-items-center justify-content-center">
                                                                <div className="avatar-xs">
                                                                    <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                                        <i className="ri-image-fill"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </label>
                                            <Input
                                                id={`file-upload-${row.name}-${index}`}
                                                type={type}
                                                required={row?.required}
                                                onChange={(e) => {
                                                    checkValidation({key:row?.name, value:e?.target?.files[0], required:row?.required})
                                                    showImage({file:e?.target?.files[0], index})
                                                }}
                                                className={`${errorLog[row?.name] && 'border-danger'} d-none`}
                                            />
                                            
                                            {/* {
                                                (formData[row?.name].length > 0) && (
                                                    <>
                                                        <img src={formData[row?.name]} />
                                                    </>
                                                )
                                            } */}
                                        </div>
                                    )
                                }
                                { errorLog[row?.name] && (<span className="text-danger">{errorLog[row?.name]}</span>)}
                            </div>
                        </div>
                    )
                })
            }
                <Col lg='12' md='12' className="mt-3">
                    <div className="d-flex gap-2">
                        <Button
                            type="submit"
                            color="primary"
                            className={`text-capitalize ${props?.buttonClass?? ''}`}
                            disabled={Object?.keys(errorLog).length != 0 || nonFiledError?.length != 0}
                        >
                            {/* {loading ? <Spinner size="sm" className='me-2'> Loading... </Spinner> : null} */}
                            {props?.button?? 'Submit'}
                        </Button>
                        {
                            (!props?.hideReset) && (
                                <Button
                                    color="soft-success"
                                    onClick={() => setFormData({})}
                                    className={`text-capitalize ml-2`}
                                    type="reset"
                                >
                                    reset
                                </Button>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </Form>
    )
}

export default FormComponent;