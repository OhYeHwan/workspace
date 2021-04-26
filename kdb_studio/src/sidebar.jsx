import React, { Component } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles"
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddBoxIcon from '@material-ui/icons/AddBox';

const styles = {
    root: {
        width: 100,
        height: "100%",
    }
}


class Sidebar extends Component {
    render() {
        return (
            <Paper className={this.props.classes.root}>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <AddBoxIcon fontSize="large" />
                        </ListItemIcon>
                    </MenuItem>
                </MenuList>
           </Paper>
        );
    }
}

export default withStyles(styles)(Sidebar);