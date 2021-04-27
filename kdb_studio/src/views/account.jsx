import React, { Component } from 'react';
import Avatar from "@material-ui/core/Avatar";
import {
    Grid,
    Box,
} from '@material-ui/core';

const user = {
    name: "YEHWAN",
    mail: "azss0470@gmail.com",
}

class Account extends Component {
    render() {
        return (
            <>
                <Box display="flex">
                    <Avatar src="/broken-image.jpg" style={{margin:"10px"}} />
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Grid item style={{color:"#172B4D"}}>
                            {'@' + user.name}
                        </Grid>
                        <Grid item style={{color:"#6B778C"}}>
                            {user.mail}
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    }
}

export default (Account);