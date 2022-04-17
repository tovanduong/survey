
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Modal } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { delQuestion, EditQuestion, getCategory, getDiff, getQuestion } from '../../../common/API/adminAPI';
import FormPostQuestion from './formPostQuestion';


const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
});
const QuestionList = () => {
    const [category, setCategory] = useState([]);
    const [diff, setDiff] = useState([]);
    const [question, setQuestion] = useState([])
    const [open, setOpen] = useState(false);
    const [para, setPara] = useState({})
    useEffect(() => {
        getCategory().then((dataCate) => setCategory(dataCate));
    }, []);
    useEffect(() => {
        getDiff().then((datadiff) => setDiff(datadiff));
    }, []);
    useEffect(() => {
        getQuestion().then(dataQuestion => setQuestion(dataQuestion))
    }, [])
    const handleOpen = (params) => {
        setOpen(true)
        setPara(params)
    };
    const handleClose = () => setOpen(false);
    const handleDel = (params) => {
        delQuestion(params.id)
        setTimeout(() => {
            const newQuestion = question.filter((item) => {
                return item.id !== params.id
            })
            setQuestion(newQuestion)
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
                    onClick={() => handleOpen(params)}
                >
                    <EditIcon sx={{ color: '#FFF' }} />
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
                    <DeleteIcon sx={{ color: '#FFF' }} />
                </Button>

            ),
        },

    ];
    return (
        <Box>
            <Box style={{ height: 650, width: '100%' }} >
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <Box className='modal__question'>
                        <Formik
                            initialValues={{
                                category: '',
                                difficult: '',
                                name: para.row?.name,
                                answer: [
                                    {
                                        name: '',
                                        isAnswer: false
                                    },
                                    {
                                        name: '',
                                        isAnswer: false
                                    },
                                    {
                                        name: '',
                                        isAnswer: false
                                    },
                                    {
                                        name: '',
                                        isAnswer: false
                                    },
                                ]
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(value, { resetForm }) => {
                                EditQuestion(para.id, { value }).then(data => {
                                    console.log(data)
                                    const removeOldQuestion = question.filter((item) => {
                                        return item.id !== para.id
                                    })
                                    removeOldQuestion.push(data)
                                    console.log(removeOldQuestion)
                                    setQuestion(removeOldQuestion)
                                })
                                resetForm({ value: '' })
                                setOpen(false)
                            }
                            }
                        >
                            {() => {
                                return (
                                    <FormPostQuestion propsCate={category} propsDiff={diff} propPara={para} />
                                )
                            }}
                        </Formik>
                    </Box>
                </Modal>

                <DataGrid
                    rows={question}
                    columns={columns}
                    getRowId={(row) => row.id}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    experimentalFeatures={{ newEditingApi: true }}
                    checkboxSelection

                />
            </Box>
        </Box>
    )
}

export default QuestionList