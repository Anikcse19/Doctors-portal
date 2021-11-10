import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,
    marginTop: '20px',

}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }} style={bannerBg}>
            <Grid container spacing={2} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '450px'
            }}>
                <Grid item xs={12} md={6} >
                    <Typography variant='h2' style={{
                        fontWeight: '400'
                    }}>
                        Your New Smile <br /> Start Here
                    </Typography>
                    <Typography variant='h6' style={{ marginBottom: '20px', color: 'gray', fontSize: '15px', fontWeight: '300' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cum asperiores esse ducimus delectus dolorem sed, molestiae temporibus maxime rerum?
                    </Typography>
                    <Button variant='contained'> Get Appointment</Button>
                </Grid>
                <Grid item xs={12} md={6} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img style={{ width: '450px' }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Banner;