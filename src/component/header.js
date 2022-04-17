
import { Box, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fecthLogout, lock } from '../features/login/loginSlice'
import { resetSurvey } from '../features/survey/surveySlice'

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        backgroundColor: 'rgba(0, 200, 200)',
        padding: '0 40px',
        zIndex: '999'
    },
    itemContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemsLink: {
        fontSize: '24px !important',
        border: '1px solid gray !important',
        padding: '8px 14px !important',
        background: '#FFF !important',
        borderRadius: '8px !important',
        transition: 'all 0.25s ease-in !important',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.85) !important',
            color: 'blue'
        }
    }
})


const Header = () => {

    const isLogin = localStorage.getItem('datauser')
    const { locklogin } = useSelector(state => state.login)
    const dispatch = useDispatch()
    const classes = useStyles()
    let navigate = useNavigate()
    const handleClick = () => {
        if (isLogin === null) {
            dispatch(lock(true))
            navigate('/login')
        }

        if (isLogin !== null) {
            localStorage.removeItem('datauser')
            dispatch(fecthLogout())
            dispatch(resetSurvey())
            navigate('/')
        }

    }

    return (
        <Box component='header' className={classes.root}>
            <Box className={classes.itemContainer}>
                <img src='/assets/image/logo.png' alt='logo' />
                <Button onClick={handleClick} disabled={locklogin} className={classes.itemsLink} >{isLogin == null ? 'Log In' : 'Log Out'}</Button>
            </Box>
        </Box>
    )
}

export default Header