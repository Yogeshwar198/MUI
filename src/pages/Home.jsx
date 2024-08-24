import React from 'react'
import Sidenav from '../Components/Sidenav'
import Navbar from '../Components/Navbar'
import { Accordion, Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../Dash.css'
import AccordionDash from '../Components/AccordianDash';
import BarChart from '../Charts/BarChart'


const Home = () => {
    return (
        <>
            <div className='bgColor'>
                <Navbar />
                <Box height={30} />
                <Box sx={{ display: "flex" }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradient'>
                                        <CardContent>
                                            <div className='iconStyle' style={{ color: "black" }}>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000" }}>
                                                $500.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#000" }}>
                                                Total Earning
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>
                                        <CardContent>
                                            <div className='iconStyle' style={{ color: "black" }}>
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000" }}>
                                                $900.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#000" }}>
                                                Total Earning
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card className='gradientlight'>
                                        <Stack spacing={2} direction="row">
                                            <div>
                                                <StorefrontIcon sx={{ mt: '20px', ml: "20px" }} />
                                            </div>
                                            <div className='paddingAll'>
                                                <span className='priceTitle' style={{ color: "#000" }}> $203k</span>
                                                <br />
                                                <span className='priceSubTitle' style={{fontSize: "14px"}}>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                    <Card>
                                        <Stack spacing={2} direction="row">
                                            <div>
                                                <StorefrontIcon sx={{ mt: '20px', ml: "20px" }} />
                                            </div>
                                            <div className='paddingAll'>
                                                <span className='priceTitle'> $203k</span>
                                                <br />
                                                <span className='priceSubTitle'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <BarChart />
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <div className='paddingAll'>
                                            <span className='priceTitle'>Popular Products</span>
                                        </div>

                                        <AccordionDash />
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default Home