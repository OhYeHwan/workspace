import React, { Component } from "react";
import XsdListView from "../views/XsdListView";
import { inject, observer } from "mobx-react";
import autobind from "autobind-decorator";

@inject("xsdStore")
@autobind
@observer
class XsdListContainer extends Component {
  onSelectedXsd(xsd) {
    this.props.xsdStore.selectedXsd(xsd);
  }

  render() {
    let { xsds, searchText } = this.props.xsdStore;
    xsds = xsds.filter(
      (xsd) =>
        xsd.file_name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );

    return <XsdListView xsds={xsds} onSelectedXsd={this.onSelectedXsd} />;
  }
}

export default XsdListContainer;
