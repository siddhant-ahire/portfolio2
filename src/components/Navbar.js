import { AppBar, Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import React from 'react'



const Navbar = () => {
    return (
        <Box component="nav">
            <AppBar position="static" style={{background:'#222'}}>
                <Toolbar>
                    <IconButton>
                        <ArrowBack style={{color:"tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan"}}>
                        Portfolio
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
