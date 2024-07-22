import React, { useEffect, useState } from "react";
import { Input, Pagination, PaginationItem, PaginationLink, Table, Image, Modal, ModalHeader, ModalBody, Button } from "reactstrap";

import { useDispatch, useSelector } from 'react-redux';
import actions from "../../redux/actions";
import { pageLimit } from "../../Config/constant_c";
import moment from "moment/moment";
// import { SERVER_URL } from "../../Config/config";
// import { SERVER_URL } from "../../Config/config";
import { SERVER_URL } from "../../Config/config_c";

const TableComponent = (props = {}) => {
    
    const dispatch = useDispatch();
    useSelector((state) => state[props?.stateName]);

    const [seriesCount, setSeriesCount] = useState(1)
    const [showingMessage, setShowingMessage] = useState('')
    const [pagination, setPagination] = useState([])
    const [filterData, setFilterData] = useState({
        page: 1,
        limit: 5,
        search:''
    })
    const [tableData, setTableData] = useState([])
    const [confirmModalStatus, setConfirmModalStatus] = useState(false)
    const [tempRow, setTempRow] = useState(false)


    // get data for show in table ------------
    const getTableData = async () => {
        setTempRow({})
        if (props?.isRedux) {
            const action = actions[props?.action];
            const { payload } = await dispatch(action(filterData));
            
            setSeriesCount((filterData?.limit * (filterData?.page - 1)) + 1)
            setTableData(payload?.status == 200 ? [...payload?.data] : [])
            setShowingMessage(`Showing data from ${seriesCount} to ${(filterData?.limit + seriesCount) - 1} between ${payload?.totalCount}`)
            createPagination(filterData?.page, payload?.totalCount, filterData?.limit)

        }
    }
    // ------------

    // function for create pagination array start ------------
    const createPagination = (page, totalrows, currentLimit) => {

        const countLoop = Math.ceil(totalrows / currentLimit)
        const pageArray = []

        pageArray.push({
            label:'Previous',
            value:(page === 1) ? 1 : page - 1,
            disabled:(page === 1),
            active:false
        })

        if (page >= 2) {

            if (page === countLoop && countLoop >= 3) {
                pageArray.push({
                    label:page - 2,
                    value:page - 2,
                    disabled:false,
                    active:false
                })
            }

            pageArray.push({
                label:page - 1,
                value:page - 1,
                disabled:false,
                active:false
            })
        }

        pageArray.push({
            label:page,
            value:page,
            disabled:true,
            active:true
        })

        if (page < countLoop) {
            if ((countLoop - page) >= 1) {
                pageArray.push({
                    label:page + 1,
                    value:page + 1,
                    disabled:false,
                    active:false
                })
            }      
            if (page === 1 && countLoop >= 3) {
                pageArray.push({
                    label:page + 2,
                    value:page + 2,
                    disabled:false,
                    active:false
                })
            }
        }

        pageArray.push({
            label:'Next',
            value:(page === countLoop) ? countLoop : page + 1,
            disabled:(page === countLoop),
            active:false
        })

        setPagination(pageArray)

    }
    // ------------

    // function for open confirm Modal ------------
    const openConfirmModal = (row) => {
        setTempRow(row)
        setConfirmModalStatus(true)
    }
    // ------------
    
    // useEffect ------------
    useEffect(() => {
        getTableData()
    }, [filterData, props?.refresh])
    // useEffect ------------
   
    // action button ------------
    const ActionButtons = ({row = {}, action = []}) => {
        return (
            <div className="d-flex align-items-center justify-content-center gap-1">
            {
                action?.map((act) => 
                <>
                {
                    (['edit', 'delete']?.includes(act)) && (
                        <div
                            onClick={() => {
                                (act == 'delete') ? openConfirmModal(row) : props?.onActionClick({act, ...row})
                            }}
                            className={`cursor p-1 d-flex justify-content-center align-items-center rounded-1 text-dark text-weight-bold bg-${act == 'edit' ? 'warning' : 'danger'}`}
                        >
                            <i className={`bx bx-${act == 'edit' ? 'pencil' : 'trash'}`}></i>
                        </div>
                    )
                }
                </>)
            }
            </div>
        )
    }
    // ------------

    // script for show parent data in td ------------
    const ParentDataTd = ({ parent = {}}) => {
        return (
            <>
                <div>{parent?.name?? 'N/A'}</div>
            </>
        )
    }
    // ------------
    
    // script for show tbody td ------------
    const ShowTbodyTd = ({ keyName = '', row = {}}) => {
        const keyObj = (typeof props?.tbody[keyName] === 'object') ? props?.tbody[keyName] : {type:props?.tbody[keyName]}
        
        return (
            <>
            {
                (keyObj?.type == 'tag') && (<>
                    <label
                        onClick={()=> {
                            if (keyObj?.click) {
                                props?.onActionClick({act:keyObj?.act, ...row})
                            }
                        }}
                        className={`cursor badge bg-success-subtle text-success ${keyObj?.class}`}
                    >
                        {row[keyName]}
                    </label>
                </>)
            }
            {
                (keyObj?.type == 'img') && (<><img src={SERVER_URL + (row[keyName]?? '')} className="img-thumbnail" width={80} height={50} /></>)
            }
            {
                (keyObj?.type == 'text') && (<>{row[keyName]}</>)
            }
            {
                (['email', 'tel', 'contact']?.includes(keyObj?.type)) && (<a href={`${keyObj?.type == 'email' ? 'mailto' : 'tel'}:${row[keyName]}`}>{row[keyName]}</a>)
            }
            {
                (keyObj?.type == 'date') && (<>{moment(row[keyName])?.format('DD, MMM YYYY')}</>)
            }
            {
                (keyObj?.type == 'dateTime') && (<>{moment(row[keyName])?.format('DD, MMM YYYY, HH:mm:ss a')}</>)
            }
            {
                (keyObj?.type == 'toggle') && (
                <div className="form-check form-switch form-switch-md form-switch-success">
                    <Input
                        className="form-check-input" type="checkbox"
                        onChange={(e) => {
                            row.status = row?.status == 1 ? 0 : 1
                            props?.onActionClick({act:'status', ...row})
                        }}
                        role="switch"
                        defaultChecked={row[keyName] == 1}
                    />
                </div>)
            }
            </>
        )
    }
    // ------------

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <select className="form-control w-auto" onChange={(e) => setFilterData((prev) => ({...prev, page:1, limit:Number(e?.target?.value)}))}>
                    { pageLimit?.map((limit) => <option value={limit} selected={limit == filterData?.limit}>{limit}</option>) }
                </select>
                <Input
                    className="w-auto form-control"
                    placeholder="search.."
                    onChange={(e) => setFilterData((prev) => ({...prev, page:1, search:e?.target?.value}))}
                />
            </div>
            <div className="table-responsive">
                <Table className="table align-middle table-nowrap table-striped-columns mb-0">
                    <thead className="table-light text-capitalize">
                        <tr>
                        {
                            props?.thead?.map((row, i) => <th key={i} scope="col">{row}</th>)
                        }
                        </tr>
                    </thead>
                    <tbody>
                    {
                        tableData?.map((row, key) =>
                            <tr key={key}>
                                <td>{seriesCount + key}</td>
                            {
                                Object?.keys(props?.tbody)?.map((keyName, index) => {
                                    return (
                                        <td key={`${key}${index}`}>
                                        {
                                            (keyName == 'action') && (
                                                <>
                                                <ActionButtons row={row} action={props?.tbody?.action} />                                                    
                                                </>
                                            )
                                        }
                                        {
                                            (keyName == 'parent') && (
                                                <ParentDataTd index={index} parent={row?.parent} />
                                            )
                                        }
                                        {
                                            (!['action', 'parent']?.includes(keyName)) && (
                                                <ShowTbodyTd keyName={keyName} index={index} row={row} />
                                            )
                                        }
                                        </td>
                                    )
                                })
                            }
                            </tr>
                        )
                    }
                    {
                        (tableData?.length == 0) && (
                            <tr>
                                <td colSpan={Object?.keys(props?.tbody)?.length + 1} className="text-center">
                                    No Data Found
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
            <div class="align-items-center mt-2 row">
                <Pagination className="col-sm" listClassName="d-flex justify-content-end align-items-center">
                {
                    pagination?.map((row) =>
                    <>
                        <PaginationItem disabled={row?.disabled} onClick={(e) => setFilterData((prev) => ({...prev, page:Number(row?.value)}))}>
                            <PaginationLink>{row?.label}</PaginationLink>
                        </PaginationItem>
                    </>)
                }
                </Pagination>
            </div>
            <Modal
                isOpen={confirmModalStatus}
                toggle={() => setConfirmModalStatus(!confirmModalStatus)}
                centered
                className="modal-sm"
                backdrop="static"
                keyboard={false}
            >
                <ModalBody className="text-center p-2 py-4">
                    <div>
                        <h4 className="mb-3">Confirmation!</h4>
                        <p className="text-muted mb-4"> Are sure for remove selected data??.</p>
                        <div className="hstack gap-2 justify-content-center">
                            <Button
                                color="light"
                                onClick={() => setConfirmModalStatus(false)}
                            >Cancel</Button>
                            <Button
                                color="danger"
                                onClick={() => {
                                    tempRow.act = 'delete'
                                    setConfirmModalStatus(false)
                                    props?.onActionClick(tempRow)
                                }}
                            >Processed</Button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default TableComponent;