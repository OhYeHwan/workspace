import React, { Component } from 'react';
import Avatar from "@material-ui/core/Avatar";
import { createMuiTheme, withStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

const user = {
    name: "YEHWAN",
    mail: "azss0470@gmail.com",
}

const theme = createMuiTheme();

const styles = {
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        }
    },

}

class Account extends Component {
    render() {
        return (
            <>
                <div className={this.props.classes.root}>
                    <Avatar src="/broken-image.jpg" />
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            {user.name}
                        </Grid>
                        <Grid item>
                            {user.mail}
                        </Grid>
                    </Grid>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(Account);