import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import { observer } from 'mobx-react';

@observer
class ListView extends React.Component {
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
              <TreeItem
                key={uk.id}
                nodeId={uk.id}
                label={uk.name}
                onClick={() => funcSelectedUk(uk)}
              />
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
