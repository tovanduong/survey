import { Box, Button, Modal, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { delDiff, EditDiff, getDiff, postDiff } from '../../../common/API/adminAPI';
import './difficult.css';
import FormPostDiff from './formPostDiff';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
});
const Category = () => {
    const [diff, setDiff] = useState([])
    const [open, setOpen] = useState(false);
    const [para, setPara] = useState({})

    const handleOpen = (params) => {
        setOpen(true)

        setPara(params)
    };
    const handleClose = () => setOpen(false);

    useEffect(() => {
        getDiff().then(dateCate => {
            const newDiff = [...dateCate]
            setDiff(newDiff)
        })
    }, [])
    const handleDel = (params) => {
        delDiff(params.id)
        setTimeout(() => {
            const newDiff = diff.filter((item) => {
                return item.id !== params.id
            })
            setDiff(newDiff)
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

    return (
        <Box className='diffContainer'>
            <Box className='diffForm'>
                <Formik
                    initialValues={{
                        name: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(value, { resetForm }) => {
                        postDiff(value).then(res => {
                            const newDiff = [...diff, res]
                            setDiff(newDiff)
                        })
                        resetForm({ value: '' })
                    }
                    }
                >
                    {() => {
                        return (
                            <FormPostDiff />
                        )
                    }}
                </Formik>
            </Box>
            <Box className='diffList'>
                <Typography variant='h4' pb={4}>Difficult List</Typography>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <Box className='Box__modal'>
                        <Formik
                            initialValues={{
                                name: ''
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(value, { resetForm }) => {
                                EditDiff(para.id, { value }).then(data => {
                                    console.log(data)
                                    const removeOldCate = diff.filter((item) => {
                                        return item.id !== para.id
                                    })
                                    removeOldCate.push(data)
                                    console.log(removeOldCate)
                                    setDiff(removeOldCate)
                                })
                                resetForm({ value: '' })
                                setOpen(false)
                            }
                            }
                        >
                            {() => {
                                return (
                                    <FormPostDiff />
                                )
                            }}
                        </Formik>
                    </Box>
                </Modal>
                <Box style={{ height: 650, width: '100%' }} >
                    <DataGrid
                        rows={diff}
                        columns={columns}
                        getRowId={(row) => row.id}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                        experimentalFeatures={{ newEditingApi: true }}
                        checkboxSelection

                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Category