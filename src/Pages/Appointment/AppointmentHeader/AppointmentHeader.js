import React from 'react';

import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Calendar from '../../../Shared/Calendar/Calendar';


const AppointmentHeader = ({ date, setDate }) => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <Typography>

                        <Calendar date={date} setDate={setDate}></Calendar>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                    <img style={{ width: '100%', }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;