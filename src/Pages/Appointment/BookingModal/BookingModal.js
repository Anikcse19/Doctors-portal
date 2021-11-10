import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../../Hooks/useAuth';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, booking, date, setBookingSuccess }) => {
    console.log(setBookingSuccess)
    const { name, time } = booking
    const { user } = useAuth()
    const initialInfo = { patientName: user.displayName, patientEmail: user.email, patientPhoneNumber: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value
        setBookingInfo(newInfo)
        console.log(newInfo)
    }

    const handleBookingSubmit = e => {
        const appointment = {
            ...bookingInfo,
            time,
            serviceName: booking.name,
            date: date.toLocaleDateString()
        }
        fetch('http://localhost:5000/appointments', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true)
                    handleBookingClose();
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {booking.name}
                        </Typography>
                        <form onSubmit={handleBookingSubmit}>
                            <TextField
                                sx={{ width: "90%", m: 1 }}
                                disabled
                                required
                                id="outlined-required"

                                defaultValue={booking.time}
                            />
                            <TextField
                                sx={{ width: "90%", m: 1 }}

                                required
                                id="outlined-required"
                                name='patientName'
                                onBlur={handleOnBlur}

                                defaultValue={user.displayName}
                            />
                            <TextField
                                sx={{ width: "90%", m: 1 }}

                                required
                                id="outlined-required"
                                name='patientEmail'
                                onBlur={handleOnBlur}

                                defaultValue={user.email}
                            />
                            <TextField
                                sx={{ width: "90%", m: 1 }}

                                required
                                id="outlined-required"
                                name='patientPhoneNumber'
                                onBlur={handleOnBlur}

                                defaultValue='Phone Number'
                            />
                            <TextField
                                sx={{ width: "90%", m: 1 }}
                                disabled
                                required
                                id="outlined-required"

                                defaultValue={date.toDateString()}
                            />
                            <Button type='submit' variant='contained'>Submit</Button>
                        </form>
                    </Box>
                </Fade>
            </Modal>

        </div>
    );
};

export default BookingModal;