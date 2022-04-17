import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { Formik } from 'formik';
import React, { useEffect, useState } from "react";
import * as Yup from 'yup';
import { getUser, postUser } from "../../../common/API/adminAPI";
import './user.css';
import FormPostUser from './formPostUser';
import swal from 'sweetalert';

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),
});
const User = () => {
    const [user, setUser] = useState([])
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    useEffect(() => {
        getUser().then(value => setUser(value));
    }, []);

    const columns = [
        {
            field: 'username',
            headerName: 'user name',
            width: 350,
            editable: true,
        },
        {
            field: 'role',
            headerName: 'Role',
            width: 350,
            editable: true,
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
                >
                    <DeleteIcon sx={{ color: '#FFF' }} />
                </Button>

            ),
        },
    ];


    return (
        <Box style={{ height: 650, width: '100%' }}>
            <Box>
                <Typography variant='h4' mb={2}>User List</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    style={{ width: '200px', background: '#faad14', color: '#FFF', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={handleOpen}
                >
                    ADD <AddIcon />
                </Button>
            </Box>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <Box className='Box__modal'>
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={value => {
                            const checkUser = user.some((el) => {
                                return el.username == value.username
                            })
                            if (!checkUser) {
                                postUser(value).then(res => {
                                    const newUser = [...user, res]
                                    setUser(newUser)
                                })
                                setOpen(false)
                            }
                            if (checkUser) {
                                swal({
                                    title: "Username exists !!!",
                                    icon: "error",
                                })
                            }
                        }
                        }
                    >
                        {() => {
                            return (
                                <FormPostUser />
                            )
                        }}
                    </Formik>
                </Box>
            </Modal>
            <DataGrid
                rows={user}
                columns={columns}
                getRowId={(row) => row.username}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                editMode="row"
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    )
};

export default User;
