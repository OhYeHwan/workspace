import React, { Component } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Box, Divider, Drawer, List, ListItem, Toolbar } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';

class Sidebar extends Component {
    render() {

        return (
            <Box style={{zIndex: 0}}>
                <Drawer
                    variant="permanent"
                >
                <Toolbar />
                <Box width="70px">
                    <List>
                        {['Add', 'Inbox'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <AddBoxIcon fontSize="large" /> : <InboxIcon fontSize="large" />}</ListItemIcon>
                                {/* <ListItemText primary={text}/> */}
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Add', 'Inbox'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <AddBoxIcon fontSize="large"/> : <InboxIcon fontSize="large" />}</ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
                </Drawer>
            </Box>
            
        );
    }
}

export default (Sidebar);