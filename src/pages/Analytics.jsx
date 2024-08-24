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
import GeoChart from '../Charts/GeoChart';
import PieChart from '../Charts/PieChart';
import HbarChart from '../Charts/HbarChart';
const Analytics = () => {
  return (
    <>
      <div className='bgColor'>
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Stack spacing={2} direction="row" sx={{ marginBottom: 2, marginRight: 2 }}>
                  <Card sx={{ minWidth: 50 + "%", height: 135 }} className='gradient'>
                    <CardContent>
                      <div className='iconStyle' style={{color:"#000"}}>
                        <CreditCardIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000" }}>
                        $500.00
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: 50 + "%", height: 135 }} className='gradient'>
                    <CardContent>
                      <div className='iconStyle' style={{color:"#000"}}>
                        <CreditCardIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000" }}>
                        $500.00
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
                <Stack spacing={2} direction="row" sx={{ marginRight: 2 }}>
                  <Card sx={{ minWidth: 50 + "%", height: 135 }} className='gradientlight'>
                    <CardContent>
                      <div className='iconStyle' style={{color:"#000"}}>
                        <ShoppingBagIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000" }}>
                        $900.00
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: 50 + "%", height: 135 }} className='gradient'>
                    <CardContent>
                      <div className='iconStyle' style={{color:"#000"}}>
                        <CreditCardIcon />
                      </div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000" }}>
                        $500.00
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                        Total Earning
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ height: 52 + "vh", width: 44 + "vw" }}>
                    <div >
                    <HbarChart />
                    </div>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <PieChart />
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

export default Analytics