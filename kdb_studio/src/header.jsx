import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles"
import Account from "./account";

const styles = {
    header: {
        backgroundColor: "pink",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 800,
        color: "black",
        textAlign: "left",
        margin: "30px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    }
}

class Header extends Component {

    render() {
       
        const Logo = (
            <Typography variant="h5" component="h2" className={this.props.classes.logo}>
                KDB Studio
            </Typography>
        );
        return (
            <header>
                <AppBar position="fixed" className={this.props.classes.header}>
                    <Toolbar className={this.props.classes.toolbar}>
                        {Logo}
                        <Account/>
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}

export default withStyles(styles)(Header);