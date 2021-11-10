import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {

    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleformSubmit = e => {
        const user = { email }
        fetch(`http://localhost:5000/users/admin`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                }
            })
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <form onSubmit={handleformSubmit}>
                <TextField
                    type='email'
                    label="email"
                    onBlur={handleOnBlur}

                />
                <br />
                <Button variant='contained' type='submit'>Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Made admin successfully!</Alert>
            }
        </div>
    );
};

export default MakeAdmin;