import React, { useState } from 'react'
import MobileRightMenuSlider from '@material-ui/core/Drawer';
import { AppBar, Avatar, Box, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Apps, ArrowBack, AssignmentInd, ContactMail, Home } from '@material-ui/icons'
import avatar from '../avatar.png'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme=>({
    menuSliderContainer:{
        width:250,
        background:"#511",
        height:"100%",
    },
    avatar:{
        display:'block',
        margin:"0.5rem auto",
        width:theme.spacing(13),
        height:theme.spacing(13)
    },
    listItem:{
        color:"tan",
        
    }
}))

const menuItems = [
    {listIcon:<Home/>,listText:"Home",listPath:'/'},
    {listIcon:<AssignmentInd/>,listText:"Resume",listPath:'/resume'},
    {listIcon:<Apps/>,listText:"Portfolio",listPath:'/portfolio'},
    {listIcon:<ContactMail/>,listText:"Contact",listPath:'/contact'},
]

const Navbar = () => {
    const [state, setState] = useState({
        right:false
    });
    const toggleSlider = (slider,open)=>()=>{
        setState({...state, [slider]:open})
    }
    const sideList = () => (
        <Box className={classes.menuSliderContainer}>
            <Avatar className={classes.avatar} src={avatar}/>
            <List>
                {menuItems.map((item,key)=>(
                <ListItem button key={key} component={Link} to={item.listPath} >
                    <ListItemIcon className={classes.listItem}>
                        {item.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={item.listText}/>
                </ListItem>
                    ))
                }
            </List>
        </Box>
    )
    const classes = useStyles();
    return (
        <>
        
        <Box component="nav">
            <AppBar position="static" style={{background:'#222'}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>
                        <ArrowBack style={{color:"tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan"}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider anchor="right" open={state.right} onClose={toggleSlider("right",false)}>
                        {sideList()}
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
