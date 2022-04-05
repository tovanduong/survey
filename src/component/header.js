

import { Box, ButtonBase } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fecthLogout } from '../features/login/loginSlice'
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
    let { userId } = useParams();
    const isLogin = useSelector((state) => state.login.isLogin)
    const dispatch = useDispatch()
    const classes = useStyles()
    console.log(isLogin)
    let navigate = useNavigate()
    const accesstoken = JSON.parse(localStorage.getItem('accesstoken'))


    const handleClick = () => {
        if (isLogin === false) {
            navigate('/login')
        }

        if (isLogin === true) {
            dispatch(fecthLogout({ refreshToken: accesstoken.refresh.token }))
            dispatch(resetSurvey())
            navigate('/')
        }

    }

    return (
        <Box component='header' className={classes.root}>
            <Box className={classes.itemContainer}>
                <img src='/assets/image/logo.png' alt='logo' />
                <ButtonBase onClick={handleClick} className={classes.itemsLink} >{isLogin ? 'Log Out' : 'Log In'}</ButtonBase>
            </Box>
        </Box>
    )
}

export default Header