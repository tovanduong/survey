


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Modal, Typography } from '@mui/material';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react'
import { delQuestion, delSurvey, EditQuestion, EditSurvey, getCategory, getDiff, getQuestion, getSurvey } from '../../../common/API/adminAPI'
import { Formik } from 'formik';
import FormPostSurvey from './formPostSurvey';


const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
});
const SurveyList = () => {
    const [category, setCategory] = useState([]);
    const [diff, setDiff] = useState([]);
    const [survey, setSurvey] = useState([])
    const [open, setOpen] = useState(false);
    const [para, setPara] = useState({})

    useEffect(() => {
        getCategory().then((dataCate) => setCategory(dataCate));
    }, []);
    useEffect(() => {
        getDiff().then((datadiff) => setDiff(datadiff));
    }, []);
    useEffect(() => {
        getSurvey().then(dataSurvey => setSurvey(dataSurvey))
    }, [])
    // const handleOpen = (params) => {
    //     setOpen(true)

    //     console.log(params)
    //     setPara(params)
    // };
    // const handleClose = () => setOpen(false);
    const handleDel = (params) => {
        delSurvey(params.id)
        setTimeout(() => {
            const newSurvey = survey.filter((item) => {
                return item.id !== params.id
            })
            setSurvey(newSurvey)
        })

    }
    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 600,
        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 100,
            height: '100%',
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    style={{ width: '100%', margin: '10px', color: '#000', border: 'none', boxShadow: 'none' }}
                // onClick={() => handleOpen(params)}
                >
                    <EditIcon />
                </Button>
            ),
        },
        {
            field: 'del',
            headerName: 'Delete',
            width: 100,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    size='large'
                    style={{ width: '80%', margin: '10px', color: '#000', border: 'none', boxShadow: 'none' }}
                    onClick={() => handleDel(params)}
                >
                    <DeleteIcon />
                </Button>

            ),
        },

    ];
    // const initialValues = {
    //     category: '',
    //     difficulty: "",
    //     name: '',
    //     questions: []
    // };
    return (
        <div>
            <Box style={{ height: 650, width: '100%' }} >
                {/* <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <Box className='modal__question'>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={SignupSchema}
                            onSubmit={(value, { resetForm }) => {
                                // EditSurvey(para.id, { value }).then(data => {
                                //     console.log(data)
                                //     const removeOldSurvey = survey.filter((item) => {
                                //         return item.id !== para.id
                                //     })
                                //     removeOldSurvey.push(data)
                                //     console.log(removeOldSurvey)
                                //     setSurvey(removeOldSurvey)
                                // })
                                // resetForm({ value: '' })
                                // setOpen(false)
                                console.log(value)
                            }
                            }
                        >
                            {() => {
                                return (
                                    <FormPostSurvey propsCate={category} propsDiff={diff} propPara={para} />
                                )
                            }}
                        </Formik>
                    </Box>
                </Modal> */}

                <DataGrid
                    rows={survey}
                    columns={columns}
                    getRowId={(row) => row.id}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    experimentalFeatures={{ newEditingApi: true }}
                    checkboxSelection

                />
            </Box>
        </div>
    )
}

export default SurveyList