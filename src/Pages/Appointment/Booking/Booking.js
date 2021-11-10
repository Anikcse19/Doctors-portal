import { Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => {
        setOpenBooking(true);
        setBookingSuccess(false)
    }


    const handleBookingClose = () => setOpenBooking(false);
    return (

        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 3 }}>
                    <Typography variant='h5' sx={{ color: 'info.main', fontWeight: 500 }}>{booking.name}</Typography>
                    <Typography variant='h6'>{booking.time}</Typography>
                    <Typography variant='caption' display='block'>{booking.space} SPACES AVAILABLE</Typography>
                    <Button onClick={handleBookingOpen} sx={{ mt: 2 }} variant="contained">Book Appointment</Button>
                </Paper>
            </Grid >
            <BookingModal date={date}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
                booking={booking}
            >

            </BookingModal>
        </>

    );
};

export default Booking;