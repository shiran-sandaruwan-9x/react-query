import React from 'react';
import {Stack, Typography} from "@mui/material";

class SuperHeroesComp extends React.Component {
    render() {
        return (
            <Stack>
                <Typography component='div' variant='h1'>
                    super hero
                </Typography>
            </Stack>
        );
    }
}

export default SuperHeroesComp;