import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Particles from "react-particles-js";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    particlesCanva:{
        position:'absolute',
        opacity:0.3
    }
})

const Home = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar/>
            <Header/>
            <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    particles:{
                        number:{
                        value:45,
                        density:true,
                        value_area:900
                        }
                    },
                }}
            />
        </div>
    )
}

export default Home
