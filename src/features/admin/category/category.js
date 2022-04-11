
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Modal, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { delCategory, EditCategory, getCategory, postCategory } from '../../../common/API/adminAPI';
import './category.css';
import FormPostCate from './formPostCate';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(10, 'Too Long!')
});
const Category = () => {
    const [cate, setCate] = useState([])
    const [open, setOpen] = useState(false);
    const [para, setPara] = useState({})

    const handleOpen = (params) => {
        setOpen(true)
        // console.log(params.id)
        // const paraId = params.id
        setPara(params)
    };
    const handleClose = () => setOpen(false);

    useEffect(() => {
        getCategory().then(dateCate => {
            const newCate = [...dateCate]
            setCate(newCate)
        })
    }, [])
    const handleDel = (params) => {
        delCategory(params.id)
        setTimeout(() => {
            const newCate = cate.filter((item) => {
                return item.id !== params.id
            })
            setCate(newCate)
        })

    }

    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 250,
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
        <Box className='cateContainer'>
            <Box className='cateForm'>
                <Formik
                    initialValues={{
                        name: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(value, { resetForm }) => {
                        postCategory(value).then(res => {
                            const newCate = [...cate, res]
                            setCate(newCate)
                        })
                        resetForm({ value: '' })
                    }
                    }
                >
                    {() => {
                        return (
                            <FormPostCate />
                        )
                    }}
                </Formik>
            </Box>
            <Box className='cateList'>
                <Typography variant='h4' pb={4}>Category List</Typography>
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
                                EditCategory(para.id, { value }).then(data => {
                                    console.log(data)
                                    const removeOldCate = cate.filter((item) => {
                                        return item.id !== para.id
                                    })
                                    removeOldCate.push(data)
                                    console.log(removeOldCate)
                                    setCate(removeOldCate)
                                })
                                resetForm({ value: '' })
                                setOpen(false)
                            }
                            }
                        >
                            {() => {
                                return (
                                    <FormPostCate />
                                )
                            }}
                        </Formik>
                    </Box>
                </Modal>
                <Box style={{ height: 650, width: '100%' }} >
                    <DataGrid
                        rows={cate}
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