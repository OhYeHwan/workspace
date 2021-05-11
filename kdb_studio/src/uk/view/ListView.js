import React from 'react';
// import { TreeItem, TreeView } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';

class ListView extends React.Component {
  render() {
    return (
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="0" label="UK">
          <TreeItem
            nodeId="1"
            label="1.티베로 설치법"
            onClick={() => console.log('h1')}
          />
          <TreeItem
            nodeId="2"
            label="2.티베로 삭제법"
            onClick={() => console.log('h1')}
          />
          <TreeItem
            nodeId="3"
            label="3.티베로 수정법"
            onClick={() => console.log('h1')}
          />
          <TreeItem
            nodeId="4"
            label="4.티베로 조회법"
            onClick={() => console.log('h1')}
          />
        </TreeItem>
      </TreeView>
    );
  }
}

export default ListView;
