import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import { observer } from 'mobx-react';
import UkRemoveButton from './UkRemoveButton';
import { Box } from '@material-ui/core';

@observer
class ListView extends React.Component {
  funcRemoveUk = id => {
    this.props.funcRemoveUk(id);
  };

  render() {
    const { uks, funcSelectedUk } = this.props;
    return (
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="0" label="UK">
          {Array.isArray(uks) && uks.length ? (
            uks.map(uk => (
              <Box key={uk.id} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flexGrow: 3 }}>
                  <TreeItem
                    nodeId={uk.id}
                    label={uk.name}
                    onClick={() => funcSelectedUk(uk)}
                  />
                </Box>
                <Box>
                  <UkRemoveButton id={uk.id} funcRemoveUk={this.funcRemoveUk} />
                </Box>
              </Box>
            ))
          ) : (
            <TreeItem nodeId="1" label="Empty" />
          )}
        </TreeItem>
      </TreeView>
    );
  }
}

export default ListView;
