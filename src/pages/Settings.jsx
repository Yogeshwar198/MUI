import React from 'react'
import Sidenav from '../Components/Sidenav'

import { Box, Typography } from '@mui/material'
import Navbar from '../Components/Navbar'
import Lists from '../settings/List'


const Sattings = () => {
    return (
        <>
            <div className='bgColor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: "flex" }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Lists />

                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Sattings