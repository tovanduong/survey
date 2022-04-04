


import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';

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
    return (
        <Box className={classes.root}></Box>
    )
}

export default Home