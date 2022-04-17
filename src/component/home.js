
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        backgroundImage: "url('./assets/image/background-login.png')",

        width: '100vw',
        minHeight: '100vh',
        backgroundSize: "100% 100%",
        backgroundRepeat: 'no-repeat',
    }
})
const Home = () => {
    const classes = useStyles()
    let navigate = useNavigate()

    useEffect(() => {
        const isLogin = JSON.parse(localStorage.getItem('datauser'))
        if (isLogin === null) {
            navigate('/')
            return
        }
        if (isLogin.role == 'user') {
            navigate('/survey')
            return
        }
        if (isLogin.role == 'admin') {
            navigate('/admin')
            return
        }
    }, [])

    return (
        <Box className={classes.root}></Box>
    )
}

export default Home