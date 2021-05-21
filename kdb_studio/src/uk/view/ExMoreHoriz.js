import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class ExMoreHoriz extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  funcAddChildUk = () => {
    this.props.funcAddChildUk();
    this.handleClose();
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const open = Boolean(this.state.anchorEl);
    return (
      <>
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreHorizIcon fontSize="small" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.funcAddChildUk}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="UK 추가하기" />
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <ListItemIcon>
              <RemoveIcon />
            </ListItemIcon>
            <ListItemText primary="UK 제거하기" />
          </MenuItem>
        </Menu>
      </>
    );
  }
}

export default ExMoreHoriz;
