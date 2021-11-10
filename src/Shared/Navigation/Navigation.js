import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {

    const { user, logout } = useAuth()
    console.log(user)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctor's Portal
                    </Typography>
                    <Link style={{
                        color: 'white',
                        fontWeight: '500',
                        textDecoration: 'none', padding: '10px'
                    }} to='/home'>Home</Link>
                    <Link style={{
                        color: 'white',
                        fontWeight: '500',
                        textDecoration: 'none', padding: '10px'
                    }} to='/appointment'>Appointment</Link>

                    {user?.email ?
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Link style={{
                                color: 'white',
                                fontWeight: '500',
                                textDecoration: 'none', padding: '10px'
                            }} to='/dashboard'>Dashboard</Link>
                            <img src={user?.photoURL} style={{ width: '30px', height: '30px', borderRadius: "60%", marginRight: '3px' }} alt="" />
                            <h6>{user?.displayName}</h6>
                            <Button onClick={logout} color="inherit">Logout</Button>

                        </div>
                        :
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'>
                            <Button color="inherit">Login</Button>
                        </NavLink>}
                    <NavLink to='/register'>
                        <Button color="inherit">Register</Button>
                    </NavLink>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;