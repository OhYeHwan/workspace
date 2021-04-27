import React, { Component } from 'react';
import { withStyles, createMuiTheme } from "@material-ui/core/styles"
import AddBoxIcon from '@material-ui/icons/AddBox';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Divider, Drawer, List, ListItem, Toolbar } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const theme = createMuiTheme();

const styles = {
    root: {
        display: 'flex',
        zIndex: theme.zIndex.drawer - 100,
    },
    drawer: {
        width: 60,
    },
    drawerPaper: {
        width: 60,
        overflow: 'hidden',
    },
}

class Sidebar extends Component {
    render() {
        return (
            <div className={this.props.classes.root}>
                <Drawer
                    variant="permanent"
                    className={this.props.classes.drawer}
                    classes={{
                        paper: this.props.classes.drawerPaper,
                    }}
                >
                <Toolbar />
                <div>
                    <List>
                        {['Add', 'Inbox'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <AddBoxIcon /> : <InboxIcon />}</ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Add', 'Inbox'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <AddBoxIcon /> : <InboxIcon />}</ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </div>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(Sidebar);