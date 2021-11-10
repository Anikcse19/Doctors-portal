import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import flouride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import teethWhitening from '../../../images/whitening.png'
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';




const services = [
    {
        name: "Fluoride Treatement",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus odio libero molestias vitae incidunt dolores accusantium saepe possimus totam eaque voluptate, aspernatur animi cupiditate esse cumque sit quo doloribus!",
        img: flouride
    },

    {
        name: "Cavity Filling",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus odio libero molestias vitae incidunt dolores accusantium saepe possimus totam eaque voluptate, aspernatur animi cupiditate esse cumque sit quo doloribus!",
        img: cavity
    },

    {
        name: "Teeth whitening",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus odio libero molestias vitae incidunt dolores accusantium saepe possimus totam eaque voluptate, aspernatur animi cupiditate esse cumque sit quo doloribus!",
        img: teethWhitening
    }

]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 'bold' }} style={{
                    textAlign: 'center',

                }} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography style={{
                    textAlign: 'center',
                    color: "blue"

                }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {services.map((service, index) => <Service key={service.name} service={service}></Service>)}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Services;