import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { delAssignment, getAssignment } from '../../../common/API/adminAPI'
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import './assignment.css'
import AssignmentAnswer from './assignmentAnswer';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const AssignmentContainer = () => {
    const [assignment, setAssignment] = useState([])
    const [answerResult, setAnswerResult] = useState({})
    const [open, setOpen] = useState(false);
    const [para, setPara] = useState({})
    useEffect(() => {
        getAssignment().then(dataAssignment => setAssignment(dataAssignment))

    }, [])
    const arrUserAnswer = assignment.map((el) => {
        return { ...el, username: el.owner.username }
    })


    const handleOpen = (params) => {
        console.log(params)
        const userResultAnswer = params.row?.assignmentDetails.reduce((acc, curr) => {
            acc[curr.question.id] = { pointQuestion: curr.pointQuestion, userQuestionAnswers: curr.userQuestionAnswers }
            return acc
        }, {})
        console.log(userResultAnswer)
        setAnswerResult(userResultAnswer)
        setOpen(true)
        setPara(params)


    };
    const handleClose = () => setOpen(false);
    const handleDel = (params) => {
        delAssignment(params.id)
        setTimeout(() => {
            const newAssignment = assignment.filter((item) => {
                return item.id !== params.id
            })
            setAssignment(newAssignment)
        })
    }

    const columns = [
        {
            field: 'username',
            headerName: 'User Name',
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
                    <InfoOutlinedIcon sx={{ color: '#FFF' }} />
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
        <Box style={{ height: 650, width: '100%' }} >
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                sx={{ padding: '10% 0' }}
            >
                <Box className='modal__Assignment'>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Assignment Detail
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} className='modal__assignment-desc'>
                        <Box className='modal__assignment-list'>
                            <Typography className='modal__assignment-item'><strong>User name</strong>: {para.row?.username}</Typography>
                            <Typography className='modal__assignment-item'><strong>Point survey</strong>: {para.row?.pointSurvey}</Typography>
                            <Typography className='modal__assignment-item'><strong>Difficult</strong>: {para.row?.survey.difficulty.name}</Typography>
                        </Box>
                        <Box className='modal__assignment-list'>
                            <Typography className='modal__assignment-item'><strong>Category</strong>: {para.row?.survey.category.name}</Typography>
                            <Typography className='modal__assignment-item'><strong>Survey</strong>: {para.row?.survey.name}</Typography>
                            <Typography className='modal__assignment-item'><strong>Status</strong>: {para.row?.isFinished == true ? 'Finished' : 'Incompleted'}</Typography>
                        </Box>
                    </Typography>
                    <hr />
                    {para && para.row?.assignmentDetails.map((el) => {
                        return <Box key={el.id}>
                            <Typography variant='p' mt={3} mb={5} component="h3"> <strong>{el.question.name}</strong></Typography>
                            <AssignmentAnswer propsAnswer={el.question.answers} propsAnswerResult={answerResult && answerResult[el.question.id]} />
                        </Box>
                    })}
                    {console.log(para)}
                </Box>
            </Modal>
            <DataGrid
                rows={arrUserAnswer}
                columns={columns}
                getRowId={(row) => row.id}
                pageSize={10}
                rowsPerPageOptions={[10]}
                experimentalFeatures={{ newEditingApi: true }}
                checkboxSelection

            />
        </Box>
    )
}

export default AssignmentContainer