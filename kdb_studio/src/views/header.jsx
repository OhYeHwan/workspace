import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Account from "./account";


class Header extends Component {

    render() {
       
        const Logo = (
            <Typography variant="h5" component="h2" >
                KDB Studio
            </Typography>
        );
        
        return (
            <AppBar position="fixed">
                <Toolbar
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {Logo}
                    <Account/>
                </Toolbar>
            </AppBar>
        );
    }
}

export default (Header);