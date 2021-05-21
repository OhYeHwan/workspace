import React from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Box } from '@material-ui/core';
import ExMoreHoriz from './ExMoreHoriz';

class ExList extends React.Component {
  renderTree = nodes => {
    const { funcSelected, funcAddChildUk } = this.props;
    // console.log(nodes);
    return (
      <TreeItem
        key={nodes.id}
        nodeId={nodes.id}
        label={
          <Box key={nodes.id} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 3 }}>{`${nodes.name}`}</Box>
            <Box>
              <ExMoreHoriz funcAddChildUk={funcAddChildUk} />
            </Box>
          </Box>
        }
        onClick={() => funcSelected(nodes)}
        //  onLabelClick을 막음으로 해당 UK클릭시 계속해서
        // 토글 되는 것을 방지
        onLabelClick={event => event.preventDefault()}
      >
        {Array.isArray(nodes.children)
          ? nodes.children.map(node => this.renderTree(node))
          : null}
      </TreeItem>
    );
  };

  render() {
    const { data, target } = this.props;
    return (
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        selected={target.id === null ? null : [`${target.id}`]}
      >
        {this.renderTree(data)}
      </TreeView>
    );
  }
}

export default ExList;
