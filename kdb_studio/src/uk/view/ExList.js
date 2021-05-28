import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
  Box,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { observer } from 'mobx-react';

@observer
class ExList extends React.Component {
  state = {
    anchorEl: null,
  };

  funcAddChildUk = () => {
    this.props.funcAddChildUk(this.props.target.id);
    this.handleClose();
  };

  funcSelected = node => {
    this.props.funcSelected(node);
  };

  funcRemoveUk = () => {
    this.props.funcRemoveUk(this.props.target.id);
    this.handleClose();
  };

  handleRightClick = event => {
    event.preventDefault();
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  renderTree = node => {
    const open = Boolean(this.state.anchorEl);
    return (
      <Box key={node.id}>
        <TreeItem
          nodeId={node.id}
          label={node.id}
          onClick={() => this.funcSelected(node)}
          onContextMenu={event => this.handleRightClick(event)}
          // onIconClick={this.handleRemve(data2, node.id)}
          // 토글 되는 것을 방지
          onLabelClick={event => event.preventDefault()}
        >
          {Array.isArray(node.children)
            ? node.children.map(node => this.renderTree(node))
            : null}
        </TreeItem>
        <Menu
          id={node.id}
          anchorEl={this.state.anchorEl}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.funcAddChildUk}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="UK 추가하기" />
          </MenuItem>
          <MenuItem onClick={this.funcRemoveUk}>
            <ListItemIcon>
              <RemoveIcon />
            </ListItemIcon>
            <ListItemText primary="UK 제거하기" />
          </MenuItem>
        </Menu>
      </Box>
    );
  };

  render() {
    const { data, expandData, target } = this.props;

    return (
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expandData}
        selected={`${target.id}`}
      >
        {this.renderTree(data)}
      </TreeView>
    );
  }
}

export default ExList;
