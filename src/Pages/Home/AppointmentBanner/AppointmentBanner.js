import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import doctorBg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const appointmentBg = {
    background: `url(${doctorBg})`,
    backgroundColor: 'rgba(66, 75, 95, 0.89)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '200px',
    height: '350px'
}
const AppointmentBanner = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{
                            width: '400px',
                            margin: "-120px"
                        }} src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
                        <Box >
                            <Typography variant='h6' sx={{ mt: 3 }} style={{ color: '#51EEE9 ' }}>Appointment</Typography>
                            <Typography variant='h4' sx={{ my: 5 }} style={{ color: 'white' }}>Make An Appointment Today</Typography>
                            <Typography variant='h6' sx={{ mb: 5 }} style={{ color: 'black', fontSize: '14px', fontWeight: '400' }}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim repellat velit obcaecati omnis mollitia quaerat doloribus aliquam quibusdam rem eos.</Typography>
                            <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </div >
    );
};

export default AppointmentBanner;