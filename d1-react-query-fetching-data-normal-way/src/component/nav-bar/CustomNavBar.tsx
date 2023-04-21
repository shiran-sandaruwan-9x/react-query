import React from 'react';
import {AppBar, Button, IconButton,Stack, Toolbar, Typography} from "@mui/material";
import {NavLink,Link} from "react-router-dom";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

class CustomNavBar extends React.Component {
    render() {
        return (
            <AppBar position='static' sx={{bgcolor:'black'}}>
                <Toolbar >
                    <IconButton sx={{color:'white'}} size='large' edge='start' aria-label='logo'>
                        <CatchingPokemonIcon/>
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                        CLICK ME APP
                    </Typography>

                    <Stack direction='row' spacing={2}>
                        <Button sx={{color:'white'}}><Link to='/'>home</Link></Button>
                        <Button><NavLink to='/super-hero'

                                         style={({isActive}: { isActive: boolean })=>{return isActive ? {color:'yellowgreen'} : {color:'white'}}}

                        >
                            {({isActive} : {isActive:boolean}) =>{ return isActive ? "active hero page" : "hero page" }}

                        </NavLink></Button>
                        <Button sx={{color:'white'}}><Link to='/super-girl'>super girl</Link></Button>
                        <Button sx={{color:'white'}}>default</Button>
                    </Stack>

                </Toolbar>
            </AppBar>
        );
    }
}

export default CustomNavBar;