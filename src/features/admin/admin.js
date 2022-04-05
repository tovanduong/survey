
import React from 'react'
import Topbar from './component/topbar/topbar'
import Sidebar from './component/sidebar/sidebar'
import { Box } from '@mui/system'


const Dashboard = () => {
    return (
        <Box paddingTop='80px' minHeight='100vh' >
            <Sidebar />
        </Box>
    )
}

export default Dashboard
