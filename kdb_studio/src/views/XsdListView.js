import React, { PureComponent } from "react";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import { Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { observer } from "mobx-react";

@observer
class XsdListViews extends PureComponent {
  render() {
    const { xsds, onSelectedXsd } = this.props;
    return (
      <Box style={{ width: "100%" }}>
        <h4 align="center">XSD List</h4>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem nodeId="0" label="XSD">
            {Array.isArray(xsds) && xsds.length ? (
              xsds.map((xsd) => (
                <TreeItem
                  key={xsd.id}
                  nodeId={xsd.id}
                  label={xsd.file_name}
                  onClick={() => onSelectedXsd(xsd)}
                />
              ))
            ) : (
              <TreeItem nodeId="1" label="Empty" />
            )}
          </TreeItem>
        </TreeView>
      </Box>
    );
  }
}

export default XsdListViews;
