import React from 'react'
import Sidenav from '../Components/Sidenav'
import ProductList from './products/ProductList'
import { Box, Typography } from '@mui/material'
import Navbar from '../Components/Navbar'

const Products = () => {
    return (
        <>
            <div className='bgColor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: "flex" }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <ProductList />
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Products